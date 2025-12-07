/**
 * game.js (V11 - SGF 解析版)
 * 包含 SGF 解析器，支持直接粘贴 SGF 字符串生成题目。
 */

class GoBoard {
    constructor(canvasId, size = 19) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        
        this.grid = [];
        this.size = parseInt(size);
        this.dpr = window.devicePixelRatio || 1;
        
        // 状态
        this.isLocked = false;
        this.isSelectionMode = false;
        this.selectionTarget = 'stone'; 
        this.selectedPoints = new Set();
        this.markers = [];
        this.lastMove = null;
        this.currentColor = 1;

        // 绑定
        window.addEventListener('resize', () => this.resize());
        this.canvas.addEventListener('click', (e) => this.handleClick(e));
        this.canvas.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            this.handleRightClick(e);
        });

        setTimeout(() => this.resize(), 50);
    }

    // --- SGF 解析器 (新功能) ---
    // 输入: "(;SZ[9]AB[cc][dd]AW[ee];B[df])"
    // 输出: { size:9, initial: [...], answer: {x,y} }
    parseSGF(sgf) {
        const result = { size: 19, initial: [], answer: null };
        
        // 1. 提取路数 SZ[...]
        const szMatch = sgf.match(/SZ\[(\d+)\]/);
        if (szMatch) result.size = parseInt(szMatch[1]);

        // 辅助：SGF坐标转数字 'a'->0, 'b'->1
        const charToNum = (c) => c.charCodeAt(0) - 97;

        // 2. 提取初始黑子 AB[...]
        // 正则说明：AB\[([a-z]{2})+\] 这种格式可能有多组，也可能写在一个AB里
        // 简单处理：查找所有 AB[...] 块
        let abRegex = /AB((?:\[[a-z]{2}\])+)/g;
        let match;
        while ((match = abRegex.exec(sgf)) !== null) {
            const stonesStr = match[1]; // [cc][dd]
            const stones = stonesStr.match(/\[([a-z]{2})\]/g);
            stones.forEach(s => {
                const xy = s.slice(1, 3);
                result.initial.push({
                    x: charToNum(xy[0]),
                    y: charToNum(xy[1]),
                    c: 1
                });
            });
        }

        // 3. 提取初始白子 AW[...]
        let awRegex = /AW((?:\[[a-z]{2}\])+)/g;
        while ((match = awRegex.exec(sgf)) !== null) {
            const stonesStr = match[1];
            const stones = stonesStr.match(/\[([a-z]{2})\]/g);
            stones.forEach(s => {
                const xy = s.slice(1, 3);
                result.initial.push({
                    x: charToNum(xy[0]),
                    y: charToNum(xy[1]),
                    c: -1
                });
            });
        }

        // 4. 提取答案 (第一手棋) ;B[...] 或 ;W[...]
        // 通常在SGF的末尾，或者 AB/AW 之后
        const moveRegex = /;([BW])\[([a-z]{2})\]/;
        const moveMatch = sgf.match(moveRegex);
        if (moveMatch) {
            const xy = moveMatch[2];
            result.answer = {
                x: charToNum(xy[0]),
                y: charToNum(xy[1])
            };
            // 还可以根据 moveMatch[1] 决定是黑先还是白先，暂时默认黑先
        }

        return result;
    }

    initGrid() { this.grid = Array(this.size).fill().map(() => Array(this.size).fill(0)); }
    
    setSize(newSize) {
        this.size = parseInt(newSize);
        this.initGrid();
        this.markers = [];
        this.selectedPoints.clear();
        this.lastMove = null;
        if (this.canvas.offsetWidth > 0) this.resize();
    }

    setSelectionMode(enable, type='stone') {
        this.isSelectionMode = enable;
        this.selectionTarget = type;
        this.selectedPoints.clear();
        this.draw();
    }

    setup(stones, markers = []) {
        this.initGrid();
        this.lastMove = null;
        this.markers = markers;
        this.selectedPoints.clear();
        if (stones) {
            stones.forEach(s => {
                if (this.isValid(s.x, s.y)) this.grid[s.y][s.x] = s.c;
            });
        }
        this.draw();
    }

    resize() {
        const p = this.canvas.parentElement;
        if(!p) return;
        const r = p.getBoundingClientRect();
        this.width = r.width;
        this.height = r.height;
        if(this.width===0) return;
        this.canvas.width = this.width * this.dpr;
        this.canvas.height = this.height * this.dpr;
        this.ctx.scale(this.dpr, this.dpr);
        this.cellSize = this.width / (this.size + 1);
        this.padding = this.cellSize;
        this.draw();
    }

    draw() {
        if(!this.cellSize) return;
        this.ctx.fillStyle = "#e6b87d";
        this.ctx.fillRect(0, 0, this.width, this.height);
        
        this.ctx.strokeStyle = "#5e4020";
        this.ctx.lineWidth = 1;
        this.ctx.beginPath();
        for(let i=0; i<this.size; i++) {
            const pos = this.padding + i*this.cellSize;
            this.ctx.moveTo(this.padding, pos); this.ctx.lineTo(this.width-this.padding, pos);
            this.ctx.moveTo(pos, this.padding); this.ctx.lineTo(pos, this.height-this.padding);
        }
        this.ctx.stroke();
        this.drawStars();

        for(let y=0; y<this.size; y++) {
            for(let x=0; x<this.size; x++) {
                if(this.grid[y][x]!==0) this.drawStone(x,y,this.grid[y][x]);
            }
        }
        
        if(this.markers) {
            this.markers.forEach(m => {
                if(m.text) this.drawText(m.x, m.y, m.text);
                else this.drawTriangle(m.x, m.y);
            });
        }
        
        if(this.lastMove) {
            const cx = this.padding + this.lastMove.x * this.cellSize;
            const cy = this.padding + this.lastMove.y * this.cellSize;
            this.ctx.fillStyle = "#e74c3c";
            this.ctx.fillRect(cx-3, cy-3, 6, 6);
        }

        if(this.selectedPoints.size > 0) {
            this.selectedPoints.forEach(key => {
                const [sx,sy] = key.split(',').map(Number);
                this.selectionTarget==='stone' ? this.drawSelectionCircle(sx,sy) : this.drawSelectionSquare(sx,sy);
            });
        }
    }

    drawStars() {
        let p = [];
        if(this.size===9) p=[2,6,4]; else if(this.size===13) p=[3,9,6]; else if(this.size===19) p=[3,9,15];
        this.ctx.fillStyle = "#5e4020";
        p.forEach(y=>{ p.forEach(x=>{
            this.ctx.beginPath();
            this.ctx.arc(this.padding+x*this.cellSize, this.padding+y*this.cellSize, 3, 0, Math.PI*2);
            this.ctx.fill();
        })});
    }

    drawStone(x,y,c) {
        const cx=this.padding+x*this.cellSize, cy=this.padding+y*this.cellSize, r=this.cellSize*0.45;
        this.ctx.beginPath();
        this.ctx.arc(cx, cy, r, 0, Math.PI*2);
        const g=this.ctx.createRadialGradient(cx-r/3, cy-r/3, r/5, cx, cy, r);
        if(c===1){g.addColorStop(0,"#666");g.addColorStop(1,"#000");}else{g.addColorStop(0,"#fff");g.addColorStop(1,"#ddd");}
        this.ctx.fillStyle=g;
        this.ctx.shadowBlur=4; this.ctx.shadowColor="rgba(0,0,0,0.4)"; this.ctx.shadowOffsetX=2; this.ctx.shadowOffsetY=2;
        this.ctx.fill();
        this.ctx.shadowBlur=0; this.ctx.shadowOffsetX=0; this.ctx.shadowOffsetY=0;
        if(c===-1){this.ctx.strokeStyle="#ccc";this.ctx.lineWidth=0.5;this.ctx.stroke();}
    }

    drawTriangle(x,y) {
        const cx=this.padding+x*this.cellSize, cy=this.padding+y*this.cellSize, r=this.cellSize*0.25;
        this.ctx.beginPath(); this.ctx.moveTo(cx,cy-r); this.ctx.lineTo(cx-r*0.866,cy+r*0.5); this.ctx.lineTo(cx+r*0.866,cy+r*0.5); this.ctx.closePath();
        this.ctx.fillStyle="rgba(231,76,60,0.9)"; this.ctx.fill(); this.ctx.strokeStyle="white"; this.ctx.lineWidth=2; this.ctx.stroke();
    }

    drawText(x,y,t) {
        const cx=this.padding+x*this.cellSize, cy=this.padding+y*this.cellSize;
        this.ctx.font=`bold ${this.cellSize*0.6}px sans-serif`; this.ctx.fillStyle="#16a085"; this.ctx.textAlign="center"; this.ctx.textBaseline="middle";
        this.ctx.lineWidth=3; this.ctx.strokeStyle="rgba(255,255,255,0.8)"; this.ctx.strokeText(t,cx,cy); this.ctx.fillText(t,cx,cy);
    }

    drawSelectionCircle(x,y){
        const cx=this.padding+x*this.cellSize, cy=this.padding+y*this.cellSize, r=this.cellSize*0.5;
        this.ctx.beginPath(); this.ctx.arc(cx,cy,r,0,Math.PI*2); this.ctx.strokeStyle="#2ecc71"; this.ctx.lineWidth=4; this.ctx.stroke();
    }
    drawSelectionSquare(x,y){
        const cx=this.padding+x*this.cellSize, cy=this.padding+y*this.cellSize, h=this.cellSize*0.2;
        this.ctx.beginPath(); this.ctx.rect(cx-h,cy-h,h*2,h*2); this.ctx.fillStyle="#3498db"; this.ctx.fill(); this.ctx.strokeStyle="white"; this.ctx.lineWidth=1; this.ctx.stroke();
    }

    getGridFromClick(e) {
        const r=this.canvas.getBoundingClientRect();
        const x=e.clientX-r.left, y=e.clientY-r.top;
        const gx=Math.round((x-this.padding)/this.cellSize), gy=Math.round((y-this.padding)/this.cellSize);
        if(this.isValid(gx,gy)) return {x:gx,y:gy}; return null;
    }

    handleClick(e) {
        if(this.isLocked && !this.isSelectionMode) return;
        const pos = this.getGridFromClick(e);
        if(!pos) return;
        if(this.isSelectionMode) {
            const key = `${pos.x},${pos.y}`;
            const hasStone = this.grid[pos.y][pos.x] !== 0;
            if(this.selectionTarget==='stone' && hasStone) {
                const group = this.getGroup(pos.x, pos.y);
                const isDeselecting = this.selectedPoints.has(key);
                group.stones.forEach(s => isDeselecting ? this.selectedPoints.delete(`${s.x},${s.y}`) : this.selectedPoints.add(`${s.x},${s.y}`));
                this.draw();
            } else if(this.selectionTarget==='point' && !hasStone) {
                if(this.selectedPoints.has(key)) this.selectedPoints.delete(key); else this.selectedPoints.add(key);
                this.draw();
            }
        } else {
            const success = this.playMove(pos.x, pos.y, this.currentColor);
            if(success && this.onMove) this.onMove({x:pos.x,y:pos.y,color:this.currentColor});
        }
    }
    
    handleRightClick(e) { if(this.isSelectionMode){this.selectedPoints.clear();this.draw();}else{/*undo logic omitted for brevity*/} }

    playMove(x, y, color) {
        if(this.grid[y][x]!==0) return false;
        const o=JSON.stringify(this.grid);
        this.grid[y][x]=color;
        // 提子逻辑
        const op=-color, d=[[0,1],[0,-1],[1,0],[-1,0]], cap=[];
        for(let[dx,dy]of d){
            const nx=x+dx,ny=y+dy;
            if(this.isValid(nx,ny)&&this.grid[ny][nx]===op){
                const g=this.getGroup(nx,ny);
                if(g.liberties===0) cap.push(...g.stones);
            }
        }
        for(let s of cap) this.grid[s.y][s.x]=0;
        // 禁入点逻辑
        const my=this.getGroup(x,y);
        if(cap.length===0 && my.liberties===0) {
            this.grid=JSON.parse(o); return false; 
        }
        // 打劫逻辑 (简化)
        // ...
        this.lastMove={x,y,color};
        this.draw();
        return true;
    }

    getGroup(x,y){const c=this.grid[y][x],s=[],l=new Set(),v=new Set(),q=[{x,y}];v.add(`${x},${y}`);while(q.length){const p=q.shift();s.push(p);[[0,1],[0,-1],[1,0],[-1,0]].forEach(([dx,dy])=>{const nx=p.x+dx,ny=p.y+dy;if(this.isValid(nx,ny)){const nc=this.grid[ny][nx];if(nc===0)l.add(`${nx},${ny}`);else if(nc===c&&!v.has(`${nx},${ny}`)){v.add(`${nx},${ny}`);q.push({x:nx,y:ny});}}});}return{stones:s,liberties:l.size};}
    isValid(x,y){return x>=0&&x<this.size&&y>=0&&y<this.size;}
}