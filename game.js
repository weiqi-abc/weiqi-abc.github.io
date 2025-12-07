/**
 * game.js (V15 - 终极修复版)
 * 修复内容：
 * 1. 强制在 setup/playMove 中初始化 moveStack，防止 undefined 错误。
 * 2. 增加 SGF 解析的鲁棒性。
 */

class GoBoard {
    constructor(canvasId, size = 19) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) {
            console.error("Canvas not found:", canvasId);
            return;
        }
        this.ctx = this.canvas.getContext('2d');
        
        // 核心数据
        this.size = parseInt(size);
        this.grid = [];
        
        // 关键修复：确保这些数组在构造时就存在
        this.history = [];
        this.moveStack = []; 
        this.markers = [];
        this.selectedPoints = new Set();
        this.lastMove = null;
        
        // 状态标记
        this.isLocked = false;
        this.isSelectionMode = false;
        this.selectionTarget = 'stone'; 
        this.currentColor = 1; 
        this.dpr = window.devicePixelRatio || 1;

        // 初始化
        this.initGrid();
        
        // 事件监听
        window.addEventListener('resize', () => this.resize());
        this.canvas.addEventListener('click', (e) => this.handleClick(e));
        this.canvas.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            this.handleRightClick(e);
        });

        setTimeout(() => this.resize(), 50);
    }

    // --- 核心工具 ---

    initGrid() {
        this.grid = Array(this.size).fill().map(() => Array(this.size).fill(0));
    }

    setSize(newSize) {
        this.size = parseInt(newSize);
        this.initGrid();
        this.markers = [];
        this.selectedPoints.clear();
        this.moveStack = []; // 重置撤销栈
        this.history = [];   // 重置历史
        this.lastMove = null;
        if (this.canvas.offsetWidth > 0) this.resize();
    }

    setSelectionMode(enable, type='stone') {
        this.isSelectionMode = enable;
        this.selectionTarget = type;
        this.selectedPoints.clear();
        this.draw();
    }

    // 关键修复：setup 必须重置 moveStack
    setup(stones, markers = []) {
        this.initGrid();
        this.lastMove = null;
        this.markers = markers || [];
        this.selectedPoints.clear();
        
        // 修复点：确保这些数组被重置，防止 undefined
        this.moveStack = []; 
        this.history = [];

        if (stones) {
            stones.forEach(s => {
                if (this.isValid(s.x, s.y)) this.grid[s.y][s.x] = s.c;
            });
        }
        this.draw();
    }

    // --- SGF 解析器 ---
    parseSGF(sgf) {
        const result = { size: 19, initial: [], answer: [] };
        if (!sgf || typeof sgf !== 'string') return result;

        const charToNum = (c) => c.charCodeAt(0) - 97;

        // 1. 路数
        const szMatch = sgf.match(/SZ\[(\d+)\]/);
        if (szMatch) result.size = parseInt(szMatch[1]);

        // 2. 初始黑子
        let match;
        const abRegex = /AB((?:\[[a-z]{2}\])+)/g;
        while ((match = abRegex.exec(sgf)) !== null) {
            const stones = match[1].match(/\[([a-z]{2})\]/g);
            if(stones) stones.forEach(s => {
                const xy = s.slice(1, 3);
                result.initial.push({ x: charToNum(xy[0]), y: charToNum(xy[1]), c: 1 });
            });
        }

        // 3. 初始白子
        const awRegex = /AW((?:\[[a-z]{2}\])+)/g;
        while ((match = awRegex.exec(sgf)) !== null) {
            const stones = match[1].match(/\[([a-z]{2})\]/g);
            if(stones) stones.forEach(s => {
                const xy = s.slice(1, 3);
                result.initial.push({ x: charToNum(xy[0]), y: charToNum(xy[1]), c: -1 });
            });
        }

        // 4. 答案序列
        const cleanSgf = sgf.replace(/\n/g, "");
        const moveRegex = /;([BW])\[([a-z]{2})\]/g;
        
        while ((match = moveRegex.exec(cleanSgf)) !== null) {
            const colorCode = match[1];
            const xy = match[2];
            result.answer.push({
                x: charToNum(xy[0]),
                y: charToNum(xy[1]),
                c: (colorCode === 'B' ? 1 : -1)
            });
        }

        return result;
    }

    // --- 绘图逻辑 ---

    resize() {
        const parent = this.canvas.parentElement;
        if (!parent) return;
        const rect = parent.getBoundingClientRect();
        this.width = rect.width;
        this.height = rect.height;
        if (this.width === 0) return;

        this.canvas.width = this.width * this.dpr;
        this.canvas.height = this.height * this.dpr;
        this.ctx.scale(this.dpr, this.dpr);
        this.cellSize = this.width / (this.size + 1);
        this.padding = this.cellSize;
        this.draw();
    }

    draw() {
        if (!this.cellSize) return;

        this.ctx.fillStyle = "#e6b87d";
        this.ctx.fillRect(0, 0, this.width, this.height);
        
        this.ctx.strokeStyle = "#5e4020";
        this.ctx.lineWidth = 1;
        this.ctx.beginPath();
        for (let i = 0; i < this.size; i++) {
            const pos = this.padding + i * this.cellSize;
            this.ctx.moveTo(this.padding, pos); 
            this.ctx.lineTo(this.width - this.padding, pos);
            this.ctx.moveTo(pos, this.padding); 
            this.ctx.lineTo(pos, this.height - this.padding);
        }
        this.ctx.stroke();

        this.drawStars();

        for (let y = 0; y < this.size; y++) {
            for (let x = 0; x < this.size; x++) {
                if (this.grid[y][x] !== 0) this.drawStone(x, y, this.grid[y][x]);
            }
        }
        
        if (this.markers) {
            this.markers.forEach(m => {
                if (m.text) this.drawText(m.x, m.y, m.text);
                else this.drawTriangle(m.x, m.y);
            });
        }
        
        if (this.lastMove) {
            const cx = this.padding + this.lastMove.x * this.cellSize;
            const cy = this.padding + this.lastMove.y * this.cellSize;
            this.ctx.fillStyle = "#e74c3c";
            this.ctx.fillRect(cx - 3, cy - 3, 6, 6);
        }

        if (this.selectedPoints.size > 0) {
            this.selectedPoints.forEach(key => {
                const [sx, sy] = key.split(',').map(Number);
                if (this.selectionTarget === 'stone') this.drawSelectionCircle(sx, sy);
                else this.drawSelectionSquare(sx, sy);
            });
        }
    }

    drawStars() {
        let p = [];
        if (this.size === 9) p = [2, 6, 4];
        else if (this.size === 13) p = [3, 9, 6];
        else if (this.size === 19) p = [3, 9, 15];
        
        this.ctx.fillStyle = "#5e4020";
        p.forEach(y => { p.forEach(x => {
            this.ctx.beginPath();
            this.ctx.arc(this.padding + x * this.cellSize, this.padding + y * this.cellSize, 3, 0, Math.PI * 2);
            this.ctx.fill();
        })});
    }

    drawStone(x, y, color) {
        const cx = this.padding + x * this.cellSize;
        const cy = this.padding + y * this.cellSize;
        const r = this.cellSize * 0.45;
        this.ctx.beginPath();
        this.ctx.arc(cx, cy, r, 0, Math.PI * 2);
        const g = this.ctx.createRadialGradient(cx - r/3, cy - r/3, r/5, cx, cy, r);
        if (color === 1) { g.addColorStop(0, "#666"); g.addColorStop(1, "#000"); } 
        else { g.addColorStop(0, "#fff"); g.addColorStop(1, "#ddd"); }
        this.ctx.fillStyle = g;
        this.ctx.fill();
        if (color === -1) { this.ctx.strokeStyle = "#ccc"; this.ctx.lineWidth = 0.5; this.ctx.stroke(); }
    }

    drawTriangle(x, y) {
        const cx = this.padding + x * this.cellSize;
        const cy = this.padding + y * this.cellSize;
        const r = this.cellSize * 0.25;
        this.ctx.beginPath();
        this.ctx.moveTo(cx, cy - r);
        this.ctx.lineTo(cx - r * 0.866, cy + r * 0.5);
        this.ctx.lineTo(cx + r * 0.866, cy + r * 0.5);
        this.ctx.closePath();
        this.ctx.fillStyle = "rgba(231,76,60,0.9)"; this.ctx.fill();
        this.ctx.strokeStyle = "white"; this.ctx.lineWidth = 2; this.ctx.stroke();
    }

    drawText(x, y, t) {
        const cx = this.padding + x * this.cellSize;
        const cy = this.padding + y * this.cellSize;
        this.ctx.font = `bold ${this.cellSize * 0.6}px sans-serif`;
        this.ctx.fillStyle = "#16a085"; this.ctx.textAlign = "center"; this.ctx.textBaseline = "middle";
        this.ctx.lineWidth = 3; this.ctx.strokeStyle = "rgba(255,255,255,0.8)";
        this.ctx.strokeText(t, cx, cy); this.ctx.fillText(t, cx, cy);
    }

    drawSelectionCircle(x, y) {
        const cx = this.padding + x * this.cellSize;
        const cy = this.padding + y * this.cellSize;
        this.ctx.beginPath(); this.ctx.arc(cx, cy, this.cellSize * 0.5, 0, Math.PI * 2);
        this.ctx.strokeStyle = "#2ecc71"; this.ctx.lineWidth = 4; this.ctx.stroke();
    }

    drawSelectionSquare(x, y) {
        const cx = this.padding + x * this.cellSize;
        const cy = this.padding + y * this.cellSize;
        const h = this.cellSize * 0.2;
        this.ctx.beginPath(); this.ctx.rect(cx - h, cy - h, h * 2, h * 2);
        this.ctx.fillStyle = "#3498db"; this.ctx.fill();
        this.ctx.strokeStyle = "white"; this.ctx.lineWidth = 1; this.ctx.stroke();
    }

    getGridFromClick(e) {
        const rect = this.canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const gx = Math.round((x - this.padding) / this.cellSize);
        const gy = Math.round((y - this.padding) / this.cellSize);
        if (this.isValid(gx, gy)) return { x: gx, y: gy };
        return null;
    }

    handleClick(e) {
        if (this.isLocked && !this.isSelectionMode) return;
        
        const pos = this.getGridFromClick(e);
        if (!pos) return;

        if (this.isSelectionMode) {
            const key = `${pos.x},${pos.y}`;
            const hasStone = this.grid[pos.y][pos.x] !== 0;
            
            if (this.selectionTarget === 'stone' && hasStone) {
                const group = this.getGroup(pos.x, pos.y);
                const isDeselecting = this.selectedPoints.has(key);
                group.stones.forEach(s => {
                    const k = `${s.x},${s.y}`;
                    isDeselecting ? this.selectedPoints.delete(k) : this.selectedPoints.add(k);
                });
                this.draw();
            } else if (this.selectionTarget === 'point' && !hasStone) {
                if (this.selectedPoints.has(key)) this.selectedPoints.delete(key);
                else this.selectedPoints.add(key);
                this.draw();
            }
        } else {
            const success = this.playMove(pos.x, pos.y, this.currentColor);
            if (success && this.onMove) {
                this.onMove({ x: pos.x, y: pos.y, color: this.currentColor });
            }
        }
    }

    handleRightClick(e) {
        if (this.isSelectionMode) {
            this.selectedPoints.clear();
            this.draw();
        } else {
            this.undoLastMove();
        }
    }

    // --- 游戏规则逻辑 (修复 undefinded 错误) ---

    playMove(x, y, color) {
        if (this.grid[y][x] !== 0) return false;

        // 修复：如果 moveStack 意外丢失，重新初始化
        if (!this.moveStack) this.moveStack = [];

        // 1. 备份用于撤销
        const gridCopy = this.grid.map(row => [...row]);
        this.moveStack.push({
            grid: gridCopy,
            lastMove: this.lastMove,
            color: this.currentColor
        });

        // 2. 尝试落子
        const originalState = JSON.stringify(this.grid);
        this.grid[y][x] = color;

        // 3. 提子逻辑
        const opponent = -color;
        const directions = [[0,1], [0,-1], [1,0], [-1,0]];
        const capturedStones = [];

        for (let [dx, dy] of directions) {
            const nx = x + dx, ny = y + dy;
            if (this.isValid(nx, ny) && this.grid[ny][nx] === opponent) {
                const group = this.getGroup(nx, ny);
                if (group.liberties === 0) {
                    capturedStones.push(...group.stones);
                }
            }
        }

        for (let s of capturedStones) {
            this.grid[s.y][s.x] = 0;
        }

        // 4. 禁入点检查
        const myGroup = this.getGroup(x, y);
        if (capturedStones.length === 0 && myGroup.liberties === 0) {
            this.showToast("禁入点！无法落子");
            this.grid = JSON.parse(originalState);
            this.moveStack.pop();
            return false;
        }

        // 5. 打劫检查
        const currentHash = JSON.stringify(this.grid);
        // 修复：检查 history 是否存在
        if (!this.history) this.history = [];
        
        if (this.history.length > 1 && currentHash === this.history[this.history.length - 2]) {
            this.showToast("打劫！不能立即回提");
            this.grid = JSON.parse(originalState);
            this.moveStack.pop();
            return false;
        }

        this.history.push(currentHash);
        this.lastMove = { x, y, color };
        this.draw();
        return true;
    }

    undoLastMove() {
        if (this.moveStack && this.moveStack.length > 0) {
            const state = this.moveStack.pop();
            this.grid = state.grid;
            this.lastMove = state.lastMove;
            this.currentColor = state.color;
            if (this.history) this.history.pop();
            this.draw();
        }
    }

    getGroup(startX, startY) {
        const color = this.grid[startY][startX];
        const stones = [];
        const liberties = new Set();
        const visited = new Set();
        const queue = [{ x: startX, y: startY }];
        
        visited.add(`${startX},${startY}`);

        while (queue.length > 0) {
            const { x, y } = queue.shift();
            stones.push({ x, y });

            [[0, 1], [0, -1], [1, 0], [-1, 0]].forEach(([dx, dy]) => {
                const nx = x + dx, ny = y + dy;
                if (this.isValid(nx, ny)) {
                    const neighborColor = this.grid[ny][nx];
                    if (neighborColor === 0) {
                        liberties.add(`${nx},${ny}`);
                    } else if (neighborColor === color) {
                        const key = `${nx},${ny}`;
                        if (!visited.has(key)) {
                            visited.add(key);
                            queue.push({ x: nx, y: ny });
                        }
                    }
                }
            });
        }
        return { stones, liberties: liberties.size };
    }

    isValid(x, y) {
        return x >= 0 && x < this.size && y >= 0 && y < this.size;
    }

    showToast(text) {
        const el = document.getElementById('msg-toast');
        if (el) {
            el.innerText = text;
            el.style.opacity = 1;
            setTimeout(() => el.style.opacity = 0, 2000);
        } else {
            console.log(text);
        }
    }
}