/**
 * problems.js
 * 围棋入门闯关题库 (全模版 V12)
 * 包含 Lesson 1 - Lesson 25。
 * 所有题目内容留空，等待您填入 SGF 和 答案。
 */

const ProblemData = {

    // ==========================================
    // Lesson 1: 数气 (选气 / 蓝色方块)
    // 交互：点击空点
    // ==========================================
    1: [
        // 模版 1-6
        { type: 'select_point', size: 9, title: "数气", desc: "请标出这块黑棋的气。", sgf: "(;CA[utf-8]AP[MultiGo:4.4.4]SZ[9]AB[ai]MULTIGOGM[1])", answer: [{x:0, y:7}, {x:1, y:8}] }, 
        { type: 'select_point', size: 9, title: "数气", desc: "请标出这块黑棋的气。", sgf: "(;CA[utf-8]AP[MultiGo:4.4.4]SZ[9]AB[ae]MULTIGOGM[1])", answer: [{x:0, y:3}, {x:0, y:5}, {x:1, y:4}] }, 
        { type: 'select_point', size: 9, title: "数气", desc: "请标出这块黑棋的气。", sgf: "(;CA[utf-8]AP[MultiGo:4.4.4]SZ[9]AB[ee]MULTIGOGM[1])", answer: [{x:4, y:3}, {x:4, y:5}, {x:3, y:4}, {x:5, y:4}]  }, 
        { type: 'select_point', size: 9, title: "数气", desc: "请标出这块黑棋的气。", sgf: "(;CA[utf-8]AW[de]AP[MultiGo:4.4.4]SZ[9]AB[ee]MULTIGOGM[1])", answer: [{x:4, y:3}, {x:4, y:5}, {x:5, y:4}]  }, 
        { type: 'select_point', size: 9, title: "数气", desc: "请标出这块黑棋的气。", sgf: "(;CA[utf-8]AB[ee]AP[MultiGo:4.4.4]SZ[9]AB[ef]MULTIGOGM[1])", answer: [{x:4, y:3}, {x:3, y:4}, {x:5, y:4}, {x:3, y:5}, {x:5, y:5}, {x:4, y:6}]  }, 
        { type: 'select_point', size: 9, title: "数气", desc: "请标出这块黑棋的气。", sgf: "(;CA[utf-8]AB[ff][fe][fd][ed]AP[MultiGo:4.4.4]SZ[9]AB[ef]MULTIGOGM[1])", answer: [{x:4, y:2}, {x:3, y:3}, {x:5, y:2}, {x:6, y:3}, {x:6, y:4}, // 上部和右部
                {x:6, y:5}, {x:5, y:6}, {x:4, y:6}, {x:3, y:5}, // 下部和左部
                {x:4, y:4} // 中间那个核心气
                ] }
    ],

    // ==========================================
    // Lesson 2: 打吃 (判断 / 是非题)
    // 交互：是 / 否
    // ==========================================
    2: [
        { type: 'bool', size: 9, title: "打吃判断", desc: "标记的子是否处于打吃状态？", sgf: "(;CA[utf-8]AW[ed][de][fe]MA[ee]AP[MultiGo:4.4.4]SZ[9]AB[ee]MULTIGOGM[1])", markers:[{x:4,y:4}], answer: true },
        { type: 'bool', size: 9, title: "打吃判断", desc: "标记的子是否处于打吃状态？", sgf: "(;CA[utf-8]AW[bh]AP[MultiGo:4.4.4]SZ[9]AB[ai]MULTIGOGM[1])", markers:[{x:0,y:8}], answer: false },
        { type: 'bool', size: 9, title: "打吃判断", desc: "标记的子是否处于打吃状态？", sgf: "(;CA[utf-8]AB[eg]AW[cf][de][ef]AP[MultiGo:4.4.4]SZ[9]AB[df]MULTIGOGM[1])", markers:[{x:3,y:5}], answer: true },
        { type: 'bool', size: 9, title: "打吃判断", desc: "标记的子是否处于打吃状态？", sgf: "(;CA[utf-8]AB[ei][fh][fg][ff][fe]AW[ci][dh][eh][df][ef]AP[MultiGo:4.4.4]SZ[9]AB[di]MULTIGOGM[1])", markers:[{x:3,y:8},{x:4,y:8}], answer: true },
        { type: 'bool', size: 9, title: "打吃判断", desc: "标记的子是否处于打吃状态？", sgf: "(;CA[utf-8]AB[dg][ee][ed][cd][ce][dc]AW[cf][cg][de][ef][dh]AP[MultiGo:4.4.4]SZ[9]AB[df]MULTIGOGM[1])", markers:[{x:3,y:5},{x:3,y:6}], answer: true },
        { type: 'bool', size: 9, title: "打吃判断", desc: "标记的子是否处于打吃状态？", sgf: "(;CA[utf-8]AB[bh][bi]AW[ag][bg][ch][ci]AP[MultiGo:4.4.4]SZ[9]AB[ah]MULTIGOGM[1])", markers:[{x:0,y:7},{x:1,y:7},{x:1,y:8}], answer: true }
    ],

    // ==========================================
    // Lesson 3: 提子 (落子题)
    // 交互：点击棋盘落子
    // ==========================================
    3: [
        { type: 'board', size: 9, title: "提子", desc: "黑先。请提掉白子。", sgf: "(;CA[utf-8]AB[de][fe]AW[ee]AP[MultiGo:4.4.4]SZ[9]AB[ed]MULTIGOGM[1];B[ef])" },
        { type: 'board', size: 9, title: "提子", desc: "黑先。请提掉白子。", sgf: "(;CA[utf-8]AB[ed][ce][df][ef]AW[de][ee]AP[MultiGo:4.4.4]SZ[9]AB[dd]MULTIGOGM[1];B[fe])" },
        { type: 'board', size: 9, title: "提子", desc: "黑先。请提掉白子。", sgf: "(;CA[utf-8]AW[ai]AP[MultiGo:4.4.4]SZ[9]AB[ah]MULTIGOGM[1];B[bi])" },
        { type: 'board', size: 9, title: "提子", desc: "黑先。请提掉白子。", sgf: "(;CA[utf-8]AB[ed][ef]AW[ee][dd][ec]AP[MultiGo:4.4.4]SZ[9]AB[de]MULTIGOGM[1];B[fe])" },
        { type: 'board', size: 9, title: "提子", desc: "黑先。请提掉白子。", sgf: "(;CA[utf-8]AB[dh][cg][fh]AW[di][eg][eh]AP[MultiGo:4.4.4]SZ[9]AB[ei]MULTIGOGM[1];B[ci])" },
        { type: 'board', size: 9, title: "提子", desc: "黑先。请提掉白子。", sgf: "(;CA[utf-8]AB[eh][dg]AW[dh][eg][fh][gg]AP[MultiGo:4.4.4]SZ[9]AB[ch]MULTIGOGM[1];B[di])" }
    ],

    // ==========================================
    // Lesson 4: 逃出被打吃的子 (落子题)
    // ==========================================
    4: [
        { type: 'board', size: 9, title: "逃跑", desc: "黑先。请逃出被打吃的子。", sgf: "(;CA[utf-8]AW[ed][de][fe]AP[MultiGo:4.4.4]SZ[9]AB[ee]MULTIGOGM[1];B[ef])" },
        { type: 'board', size: 9, title: "逃跑", desc: "黑先。请逃出被打吃的子。", sgf: "(;CA[utf-8]AB[ed][df]AW[cf][de][ef]AP[MultiGo:4.4.4]SZ[9]AB[ee]MULTIGOGM[1];B[dg])" },
        { type: 'board', size: 9, title: "逃跑", desc: "黑先。请逃出被打吃的子。", sgf: "(;CA[utf-8]AB[fe][cf]AW[dd][ce][df]AP[MultiGo:4.4.4]SZ[9]AB[de]MULTIGOGM[1];B[ee])" },
        { type: 'board', size: 9, title: "逃跑", desc: "黑先。请逃出被打吃的子。", sgf: "(;CA[utf-8]AB[dg][ee][fe][ce][be]AW[cf][cg][ef][eg][dd][de]AP[MultiGo:4.4.4]SZ[9]AB[df]MULTIGOGM[1];B[dh])" },
        { type: 'board', size: 9, title: "逃跑", desc: "黑先。请逃出被打吃的子。", sgf: "(;CA[utf-8]AB[df][eg][dh]AW[eh][fg][ef][de][cf]AP[MultiGo:4.4.4]SZ[9]AB[cg]MULTIGOGM[1];B[dg])" },
        { type: 'board', size: 9, title: "逃跑", desc: "黑先。请逃出被打吃的子。", sgf: "(;CA[utf-8]AB[cg][cf][df][eg][eh]AW[dg][ef][ee][de][fg][fh][ei]AP[MultiGo:4.4.4]SZ[9]AB[ch]MULTIGOGM[1];B[dh])" }
    ],

    // ==========================================
    // Lesson 5: 标记被打吃 (选子 / 绿色圆圈)
    // 交互：点击棋子
    // ==========================================
    5: [
        { type: 'select', size: 9, title: "危险感知", desc: "请选中所有【被打吃】的黑棋。", sgf: "(;CA[utf-8]AW[ed][de][fe]AP[MultiGo:4.4.4]SZ[9]AB[ee]MULTIGOGM[1])", answer: [{x:4,y:4}] },
        { type: 'select', size: 9, title: "危险感知", desc: "请选中所有【被打吃】的黑棋。", sgf: "(;CA[utf-8]AB[bh][cg][dh][eh]AW[dg][cf][be][bg][ag][ah]AP[MultiGo:4.4.4]SZ[9]AB[ai]MULTIGOGM[1])", answer: [{x:2,y:6},{x:0,y:8}] },
        { type: 'select', size: 9, title: "危险感知", desc: "请选中所有【被打吃】的黑棋。", sgf: "(;CA[utf-8]AB[bf][ae][ad][bc]AW[af][ag][bg][cg][be][df]AP[MultiGo:4.4.4]SZ[9]AB[cf]MULTIGOGM[1])", answer: [{x:1,y:5},{x:2,y:5}] },
        { type: 'select', size: 9, title: "危险感知", desc: "请选中所有【被打吃】的黑棋。", sgf: "(;CA[utf-8]AB[cf][cd][bd][de]AW[be][ce][bc][cc][dd]AP[MultiGo:4.4.4]SZ[9]AB[bf]MULTIGOGM[1])", answer: [{x:1,y:3},{x:2,y:3}] },
        { type: 'select', size: 9, title: "危险感知", desc: "请选中所有【被打吃】的黑棋。", sgf: "(;CA[utf-8]AB[bi][ch][dh][fg]AW[bh][cg][df][bf]AP[MultiGo:4.4.4]SZ[9]AB[bg]MULTIGOGM[1])", answer: [{x:1,y:6}] },
        { type: 'select', size: 9, title: "危险感知", desc: "请选中所有【被打吃】的黑棋。", sgf: "(;CA[utf-8]AB[eg][fh][gg]AW[eh][fg][ff][gh][df]AP[MultiGo:4.4.4]SZ[9]AB[dh]MULTIGOGM[1])", answer: [{x:5,y:7}] }
    ],

    // ==========================================
    // Lesson 6: 寻求活路 (落子题)
    // ==========================================
    6: [
        { type: 'board', size: 9, title: "寻求活路", desc: "黑先。请寻找出路。", sgf: "(;CA[utf-8]AB[fg][hf][he]AW[hh][hg][gf][ge][if]AP[MultiGo:4.4.4]SZ[9]AB[gg]MULTIGOGM[1](;B[hd]C[正解])(;B[ie]C[失败]))" },
        { type: 'board', size: 9, title: "寻求活路", desc: "黑先。请寻找出路。", sgf: "(;CA[utf-8]AB[gg][hg][eh][dh][dg]AW[hh][gh][fh][eg][ef][ch][cg]AP[MultiGo:4.4.4]SZ[9]AB[fg]MULTIGOGM[1](;B[df]C[正解])(;B[di]C[失败]))" },
        { type: 'board', size: 9, title: "寻求活路", desc: "黑先。请寻找出路。", sgf: "(;CA[utf-8]AB[eg][df][de]AW[gh][fh][gg][ef][ff][cg]AP[MultiGo:4.4.4]SZ[9]AB[fg]MULTIGOGM[1](;B[dg]C[正解])(;B[eh];W[dg]C[失败]))" },
        { type: 'board', size: 9, title: "寻求活路", desc: "黑先。请寻找出路。", sgf: "(;CA[utf-8]AB[df][ce]AW[de][ee][ff][eg][dg]AP[MultiGo:4.4.4]SZ[9]AB[cd]MULTIGOGM[1];B[cg])" },
        { type: 'board', size: 9, title: "寻求活路", desc: "黑先。请寻找出路。", sgf: "(;CA[utf-8]AB[dh][ff][ee][ed][df]AW[cg][cf][ce][de][eg][ef][fe][ge][gg]AP[MultiGo:4.4.4]SZ[9]AB[dg]MULTIGOGM[1];B[fg];W[eh];B[fh])" },
        { type: 'board', size: 9, title: "寻求活路", desc: "黑先。请寻找出路。", sgf: "(;CA[utf-8]AB[ff][fg][dg]AW[bh][cg][cf][df][ef][eg]AP[MultiGo:4.4.4]SZ[9]AB[dh]MULTIGOGM[1];B[eh])" }
    ],

    // ==========================================
    // Lesson 7: 打吃的方向 (落子题 / A,B选择)
    // 注意：需要在 markers 里定义 A 和 B 的位置
    // ==========================================
    7: [
        { type: 'board', size: 9, title: "打吃方向", desc: "黑先。请选择正确的打吃方向。", sgf: "(;CA[utf-8]AB[hf]AW[gg][gf][he]AP[MultiGo:4.4.4]SZ[9]AB[ge]MULTIGOGM[1](;B[hd]C[正解])(;B[ie]C[失败]))", markers:[{x:7,y:3,text:'A'},{x:8,y:4,text:'B'}] },
        { type: 'board', size: 9, title: "打吃方向", desc: "黑先。请选择正确的打吃方向。", sgf: "(;CA[utf-8]AW[if]AP[MultiGo:4.4.4]SZ[9]AB[ie]MULTIGOGM[1](;B[hf]C[正解])(;B[ig]C[失败]))", markers:[{x:7,y:5,text:'A'},{x:8,y:5,text:'B'}] },
        { type: 'board', size: 9, title: "打吃方向", desc: "黑先。请选择正确的打吃方向。", sgf: "(;CA[utf-8]AB[gd][hc]AW[gf][ge][hd]AP[MultiGo:4.4.4]SZ[9]AB[fd]MULTIGOGM[1](;B[he]C[正解])(;B[id]C[失败]))", markers:[{x:7,y:4,text:'A'},{x:8,y:3,text:'B'}] },
        { type: 'board', size: 9, title: "打吃方向", desc: "黑先。请选择正确的打吃方向。", sgf: "(;CA[utf-8]AB[ch][bf][ce][bd][dd][dc]AW[bg][cf][de][df][ed][dg][dh]AP[MultiGo:4.4.4]SZ[9]AB[cg]MULTIGOGM[1];B[bh])", markers:[{x:1,y:7,text:'A'},{x:0,y:6,text:'B'}] },
        { type: 'board', size: 9, title: "打吃方向", desc: "黑先。请选择正确的打吃方向。", sgf: "(;CA[utf-8]AB[bd][cc][dc][dd][de][df][cg]AW[bh][bg][ch][cf][ce][cd][bc][bb][cb]AP[MultiGo:4.4.4]SZ[9]AB[dg]MULTIGOGM[1];B[bf])", markers:[{x:1,y:5,text:'A'},{x:1,y:4,text:'B'}] },
        { type: 'board', size: 9, title: "打吃方向", desc: "黑先。请选择正确的打吃方向。", sgf: "(;CA[utf-8]AB[be][ce][df][dg][eg][ff][fe][ec][bf]AW[ch][cg][cf][cd][bd][de][ee][ef][fg][gg][gf]AP[MultiGo:4.4.4]SZ[9]AB[bg]MULTIGOGM[1];B[dd])", markers:[{x:3,y:3,text:'A'},{x:4,y:3,text:'B'}] }
    ],

    // ==========================================
    // Lesson 8: 能否逃脱 (判断 / 是非题)
    // ==========================================
    8: [
        { type: 'bool', size: 9, title: "能否逃脱", desc: "标记的黑子能逃跑吗？", sgf: "(;CA[utf-8]AB[fe][gd][gc][he][gg]AW[ge][fd][fc][fb][gb]MA[ge]C[被标记的子，不能逃脱了。]AP[MultiGo:4.4.4]SZ[9]AB[ff]MULTIGOGM[1];W[gf];B[hf])", markers: [{x:6,y:4}], answer: false },
        { type: 'bool', size: 9, title: "能否逃脱", desc: "标记的黑子能逃跑吗？", sgf: "(;CA[utf-8]AW[di][fi]MA[ei]AP[MultiGo:4.4.4]SZ[9]AB[ei]MULTIGOGM[1];B[eh]C[可以逃跑])", markers: [{x:4,y:8}], answer: true },
        { type: 'bool', size: 9, title: "能否逃脱", desc: "标记的黑子能逃跑吗？", sgf: "(;CA[utf-8]AB[bi][ci]AW[ah][bh][dh]AP[MultiGo:4.4.4]SZ[9]AB[ai]MULTIGOGM[1])", markers: [{x:0,y:8},{x:1,y:8},{x:2,y:8}], answer: false },
        { type: 'bool', size: 9, title: "能否逃脱", desc: "标记的黑子能逃跑吗？", sgf: "(;CA[utf-8]AB[eh][eg][ef]AW[dh][ei][fi][fh][fg]AP[MultiGo:4.4.4]SZ[9]AB[di]MULTIGOGM[1])", markers: [{x:3,y:8}], answer: false },
        { type: 'bool', size: 9, title: "能否逃脱", desc: "标记的黑子能逃跑吗？", sgf: "(;CA[utf-8]AB[dh][cd][ce][cf]AW[bg][cg][eg][eh][df][de]AP[MultiGo:4.4.4]SZ[9]AB[dg]MULTIGOGM[1])", markers: [{x:3,y:6},{x:3,y:7}], answer: false },
        { type: 'bool', size: 9, title: "能否逃脱", desc: "标记的黑子能逃跑吗？", sgf: "(;CA[utf-8]AB[cg][df][ef][eg]AW[bh][ci][dg][dh][cf][ce]AP[MultiGo:4.4.4]SZ[9]AB[ch]MULTIGOGM[1])", markers: [{x:2,y:6},{x:2,y:7}], answer: false }
    ],

    // ==========================================
    // Lesson 9: 双打吃 (落子题 / A,B选择)
    // ==========================================
    9: [
        { type: 'board', size: 9, title: "双打吃", desc: "请选择双打吃的位置(A/B)。", sgf: "(;CA[utf-8]AB[eh][cf]AW[eg][df]AP[MultiGo:4.4.4]SZ[9]AB[dg]MULTIGOGM[1];B[ef])", markers:[{x:4,y:5,text:'A'},{x:3,y:4,text:'B'}] },
        { type: 'board', size: 9, title: "双打吃", desc: "请选择双打吃的位置(A/B)。", sgf: "(;CA[utf-8]AB[ce][eg]AW[dg][cf][be][eh]AP[MultiGo:4.4.4]SZ[9]AB[df]MULTIGOGM[1];B[cg])", markers:[{x:2,y:6,text:'A'},{x:1,y:5,text:'B'}] },
        { type: 'board', size: 9, title: "双打吃", desc: "请选择双打吃的位置(A/B)。", sgf: "(;CA[utf-8]AB[cf][ce][bd][cc][ae][dg]AW[bf][be][cg][dh]AP[MultiGo:4.4.4]SZ[9]AB[eg]MULTIGOGM[1];B[bg])", markers:[{x:1,y:6,text:'A'},{x:2,y:7,text:'B'}] },
        { type: 'board', size: 9, title: "双打吃", desc: "请选择双打吃的位置(A/B)。", sgf: "(;CA[utf-8]AB[df][ef][ff][fg][bh]AW[ch][dg][eg][fh][gg][hh]AP[MultiGo:4.4.4]SZ[9]AB[cg]MULTIGOGM[1];B[dh])", markers:[{x:3,y:7,text:'A'},{x:4,y:7,text:'B'}] },
        { type: 'board', size: 9, title: "双打吃", desc: "请选择双打吃的位置(A/B)。", sgf: "(;CA[utf-8]AB[dd][cd][ed][cf]AW[cg][df][ce][be][ee][fd]AP[MultiGo:4.4.4]SZ[9]AB[de]MULTIGOGM[1];B[ef])", markers:[{x:4,y:5,text:'A'},{x:5,y:4,text:'B'}] },
        { type: 'board', size: 9, title: "双打吃", desc: "请选择双打吃的位置(A/B)。", sgf: "(;CA[utf-8]AB[ff][ef][df][cf][fd][ch]AW[cg][dh][ci][eg][fh][hg]AP[MultiGo:4.4.4]SZ[9]AB[fg]MULTIGOGM[1];B[dg])", markers:[{x:3,y:6,text:'A'},{x:1,y:7,text:'B'}] }
    ],

    // ==========================================
    // Lesson 10: 禁入点 (判断 / 是非题)
    // ==========================================
    10: [
        { type: 'bool', size: 9, title: "禁入点", desc: "标记的位置是禁入点吗？", sgf: "(;CA[utf-8]AW[de][fe][ef]AP[MultiGo:4.4.4]SZ[9]AW[ed]MULTIGOGM[1])", markers:[{x:4,y:4}], answer: true },
        { type: 'bool', size: 9, title: "禁入点", desc: "标记的位置是禁入点吗？", sgf: "(;CA[utf-8]AB[dc][eb][fc][fd]AW[df][de][fe][ff][eg][ed]AP[MultiGo:4.4.4]SZ[9]AB[dd]MULTIGOGM[1])", markers:[{x:4,y:4}], answer: false },
        { type: 'bool', size: 9, title: "禁入点", desc: "标记的位置是禁入点吗？", sgf: "(;CA[utf-8]AB[dh][ch][df][cf]AW[di][eh][fh][gi][ef][ff]AP[MultiGo:4.4.4]SZ[9]AB[fi]MULTIGOGM[1])", markers:[{x:4,y:8}], answer: true },
        { type: 'bool', size: 9, title: "禁入点", desc: "标记的位置是禁入点吗？", sgf: "(;CA[utf-8]AB[df][de][fe][ff][ed]AW[dh][dg][di][fg][fh][fi][ef]AP[MultiGo:4.4.4]SZ[9]AB[eh]MULTIGOGM[1])", markers:[{x:4,y:6}], answer: false },
        { type: 'bool', size: 9, title: "禁入点", desc: "标记的位置是禁入点吗？", sgf: "(;CA[utf-8]AB[cd][cf]AW[af][bf][bd][ad][ce]AP[MultiGo:4.4.4]SZ[9]AB[ae]MULTIGOGM[1])", markers:[{x:1,y:4}], answer: true },
        { type: 'bool', size: 9, title: "禁入点", desc: "标记的位置是禁入点吗？", sgf: "(;CA[utf-8]AB[af][bf][cf][dg][dh][di][ci]AW[bi][ah][bg][cg][ch]AP[MultiGo:4.4.4]SZ[9]AB[ag]MULTIGOGM[1])", markers:[{x:1,y:7}], answer: false }
    ],

    // ==========================================
    // Lesson 11: 棋的死活 (直三直四等, 落子题)
    // ==========================================
    11: [
        { type: 'board', size: 9, title: "死活基础", desc: "黑先。请做活或杀棋。", sgf: "(;CA[utf-8]AB[bh][ch][dh][di]AW[ei][eh][eg][dg][cg][bg][ag]AP[MultiGo:4.4.4]SZ[9]AB[ah]MULTIGOGM[1];B[bi])" },
        { type: 'board', size: 9, title: "死活基础", desc: "黑先。请做活或杀棋。", sgf: "(;CA[utf-8]AB[eh][eg][dg][cg][bg][ag]AW[ah][bh][ch][dh][di]AP[MultiGo:4.4.4]SZ[9]AB[ei]MULTIGOGM[1];B[bi])" },
        { type: 'board', size: 9, title: "死活基础", desc: "黑先。请做活或杀棋。", sgf: "(;CA[utf-8]AB[bg][bf][be][bi][ah]AW[ae][bd][cd][ce][cf][cg][ch][ci]AP[MultiGo:4.4.4]SZ[9]AB[bh]MULTIGOGM[1];B[af])" },
        { type: 'board', size: 9, title: "死活基础", desc: "黑先。请做活或杀棋。", sgf: "(;CA[utf-8]AB[bg][cg][ch][ci][bi]AW[af][bf][cf][df][dg][dh][di]AP[MultiGo:4.4.4]SZ[9]AB[ag]MULTIGOGM[1];B[ah])" },
        { type: 'board', size: 9, title: "死活基础", desc: "黑先。请做活或杀棋。", sgf: "(;CA[utf-8]AB[bf][be][ae][ce][de][cg][bg]AW[ah][bh][ch][dh][ci][eg][ef][ee][ed][dd][cd][bd][ad]AP[MultiGo:4.4.4]SZ[9]AB[ag]MULTIGOGM[1];B[df])" },
        { type: 'board', size: 9, title: "死活基础", desc: "黑先。请做活或杀棋。", sgf: "(;CA[utf-8]AB[eg][dg][cg][bg][ag]AW[bi][bh][ah][ch][dh]AP[MultiGo:4.4.4]SZ[9]AB[eh]MULTIGOGM[1];B[di])" }
    ],

    // ==========================================
    // Lesson 12: 什么是目 (落子题)
    // ==========================================
    12: [
        { type: 'board', size: 9, title: "围地", desc: "黑先。请下在关键点围住地盘。", sgf: "(;CA[utf-8]AB[ag][dg][eg][eh][ei][bh]AW[cg][cf][bf][af][df][ef][ff][fg][fh][fi]AP[MultiGo:4.4.4]SZ[9]AB[bg]MULTIGOGM[1];B[ch])" },
        { type: 'board', size: 9, title: "围地", desc: "黑先。请下在关键点围住地盘。", sgf: "(;CA[utf-8]AB[di][dg][cg][bg][ag]AW[ei][eh][eg][ef][df][cf][bf][af]AP[MultiGo:4.4.4]SZ[9]AB[bi]MULTIGOGM[1];B[dh])" },
        { type: 'board', size: 9, title: "围地", desc: "黑先。请下在关键点围住地盘。", sgf: "(;CA[utf-8]AB[cg][dg][eg][fh][fi][ag]AW[gh][gi][fg][ff][ef][df][cf][bf][af]AP[MultiGo:4.4.4]SZ[9]AB[bg]MULTIGOGM[1];B[di])" },
        { type: 'board', size: 9, title: "围地", desc: "黑先。请下在关键点围住地盘。", sgf: "(;CA[utf-8]AB[eg][fg][gg][gf][fe][ed][dd][ce][cf][cg]AW[ch][dh][eh][fh][gh][hg][hf][cd][be][bf][bg][dc][ec][fd][gd][ge]AP[MultiGo:4.4.4]SZ[9]AB[dg]MULTIGOGM[1];B[ee])" },
        { type: 'board', size: 9, title: "围地", desc: "黑先。请下在关键点围住地盘。", sgf: "(;CA[utf-8]AB[bg][ag][ch][dg][eh][ei]AW[cg][cf][bf][af][df][ef][fg][fh][fi]AP[MultiGo:4.4.4]SZ[9]AB[bh]MULTIGOGM[1];B[eg])" },
        { type: 'board', size: 9, title: "围地", desc: "黑先。请下在关键点围住地盘。", sgf: "(;CA[utf-8]AB[bg][cg][dg][eg][eh][ei]AW[ag][af][bf][cf][df][ef][ff][fg][fh][fi]AP[MultiGo:4.4.4]SZ[9]AB[ah]MULTIGOGM[1];B[bh])" }
    ],

    // ==========================================
    // Lesson 13: 连接与分断 (落子题)
    // ==========================================
    13: [
        { type: 'board', size: 9, title: "连接分断", desc: "黑先。连接自己或切断对方。", sgf: "(;CA[utf-8]AB[df]AW[ff][eg]AP[MultiGo:4.4.4]SZ[9]AB[ef]MULTIGOGM[1];B[fg])" },
        { type: 'board', size: 9, title: "连接分断", desc: "黑先。连接自己或切断对方。", sgf: "(;CA[utf-8]AB[ef]AW[de][fe]AP[MultiGo:4.4.4]SZ[9]AB[ed]MULTIGOGM[1];B[ee])" },
        { type: 'board', size: 9, title: "连接分断", desc: "黑先。连接自己或切断对方。", sgf: "(;CA[utf-8]AB[ff]AW[fd][df]AP[MultiGo:4.4.4]SZ[9]AB[dd]MULTIGOGM[1];B[ee])" },
        { type: 'board', size: 9, title: "连接分断", desc: "黑先。连接自己或切断对方。", sgf: "(;CA[utf-8]AB[de]AW[ce][cd][dg]AP[MultiGo:4.4.4]SZ[9]AB[cf]MULTIGOGM[1];B[df])" },
        { type: 'board', size: 9, title: "连接分断", desc: "黑先。连接自己或切断对方。", sgf: "(;CA[utf-8]AB[eg][ce][cd][ed][ee]AW[cf][bf][be][ef][ff][fg]AP[MultiGo:4.4.4]SZ[9]AB[cg]MULTIGOGM[1];B[df])" },
        { type: 'board', size: 9, title: "连接分断", desc: "黑先。连接自己或切断对方。", sgf: "(;CA[utf-8]AB[cf][de][dd][fe]AW[bf][be][ce][cc][eg][dh][gg]AP[MultiGo:4.4.4]SZ[9]AB[bg]MULTIGOGM[1];B[dg])" }
    ],

    // ==========================================
    // Lesson 14: 能否切断 (判断 / 是非题)
    // ==========================================
    14: [
        { type: 'bool', size: 9, title: "切断判断", desc: "标记的位置能切断白棋吗？", sgf: "(;CA[utf-8]AB[cd][dg][eg]AW[eh][fg][ff][ef]AP[MultiGo:4.4.4]SZ[9]AB[cf]MULTIGOGM[1])", markers: [{x:5,y:7}], answer: false },
        { type: 'bool', size: 9, title: "切断判断", desc: "标记的位置能切断白棋吗？", sgf: "(;CA[utf-8]AB[eg][fg]AW[de][ef][dg]AP[MultiGo:4.4.4]SZ[9]AB[cf]MULTIGOGM[1])", markers: [{x:3,y:5}], answer: true },
        { type: 'bool', size: 9, title: "切断判断", desc: "标记的位置能切断白棋吗？", sgf: "(;CA[utf-8]AB[ff][gf][eg][dg]AW[dd][de][fd][fe][ef]AP[MultiGo:4.4.4]SZ[9]AB[ed]MULTIGOGM[1])", markers: [{x:4,y:4}], answer: false },
        { type: 'bool', size: 9, title: "切断判断", desc: "标记的位置能切断白棋吗？", sgf: "(;CA[utf-8]AB[bf][dg][eg][fe]AW[df][ef][ee][ce][fg][gf][he]AP[MultiGo:4.4.4]SZ[9]AB[cf]MULTIGOGM[1])", markers: [{x:5,y:5}], answer: false },
        { type: 'bool', size: 9, title: "切断判断", desc: "标记的位置能切断白棋吗？", sgf: "(;CA[utf-8]AB[dh][cf]AW[eh][fg][ff][hg]AP[MultiGo:4.4.4]SZ[9]AB[eg]MULTIGOGM[1])", markers: [{x:5,y:7}], answer: true },
        { type: 'bool', size: 9, title: "切断判断", desc: "标记的位置能切断白棋吗？", sgf: "(;CA[utf-8]AB[df][ef]AW[dh][eg]AP[MultiGo:4.4.4]SZ[9]AB[dg]MULTIGOGM[1])", markers: [{x:4,y:7}], answer: true }
    ],

    // ==========================================
    // Lesson 15: 金角银边草肚皮 (填空 4,6,8)
    // ==========================================
    15: [
        { type: 'multi_input', size: 9, title: "效率对比", desc: "围住4个交叉点，角、边、中腹各需要几颗子？", sgf: "(;CA[utf-8]AB[gh][hg][ig][ah][bh][cg][cf][be][ae][ee][dd][dc][eb][fe][fb][gd][gc]AP[MultiGo:4.4.4]SZ[9]AB[gi]MULTIGOGM[1])", answer: [4, 6, 8] },
        ],

    // ==========================================
    // Lesson 16: 打劫 (判断/落子)
    // ==========================================
    16: [
        { type: 'bool', size: 9, title: "打劫规则", desc: "白棋刚提劫，黑棋现在能马上反提吗？", sgf: "(;CA[utf-8]AB[fg][eh]AW[cg][df][dh][eg][hg][cd]AP[MultiGo:4.4.4]SZ[9]AB[ef]MULTIGOGM[1])", answer: false },
        { type: 'board', size: 9, title: "制造劫争", desc: "黑先。做成劫。", sgf: "(;CA[utf-8]AB[dh]AW[eh][fi]AP[MultiGo:4.4.4]SZ[9]AB[ei]MULTIGOGM[1];B[ci])" },
        { type: 'board', size: 9, title: "制造劫争", desc: "黑先。做成劫。", sgf: "(;CA[utf-8]AB[eh][fg]AW[df][cg][dh]AP[MultiGo:4.4.4]SZ[9]AB[dg]MULTIGOGM[1];B[ef])" },
        { type: 'board', size: 9, title: "制造劫争", desc: "黑先。做成劫。", sgf: "(;CA[utf-8]AB[df][dd]AW[ed][fe][ef]AP[MultiGo:4.4.4]SZ[9]AB[ce]MULTIGOGM[1];B[ee])" },
        { type: 'board', size: 9, title: "制造劫争", desc: "黑先。做成劫。", sgf: "(;CA[utf-8]AB[ff][ee]AW[ed][de][ef]AP[MultiGo:4.4.4]SZ[9]AB[fd]MULTIGOGM[1];B[ge])" },
        { type: 'board', size: 9, title: "制造劫争", desc: "黑先。做成劫。", sgf: "(;CA[utf-8]AB[bf][ch][ah]AW[cg][cf][ce][eg][dh][ci]AP[MultiGo:4.4.4]SZ[9]AB[bg]MULTIGOGM[1];B[bi])" }
    ],

    // ==========================================
    // Lesson 17: 征子 (落子题)
    // ==========================================
    17: [
        { type: 'board', size: 9, title: "征子", desc: "黑先。征吃白子。", sgf: "(;CA[utf-8]AB[dg][ce]AW[cf][de][ee][dc]AP[MultiGo:4.4.4]SZ[9]AB[df]MULTIGOGM[1];B[bf];W[cg];B[ch];W[bg];B[ag];W[bh];B[bi];W[ah];B[ai])" },
        { type: 'board', size: 9, title: "征子", desc: "黑先。征吃白子。", sgf: "(;CA[utf-8]AB[ee][dc][ce]AW[ef][ff][de][dd]AP[MultiGo:4.4.4]SZ[9]AB[df]MULTIGOGM[1];B[ed];W[cd];B[bd];W[cc];B[cb];W[bc];B[bb];W[ac];B[ab];W[ad];B[ae])" },
        { type: 'board', size: 9, title: "征子", desc: "黑先。征吃白子。", sgf: "(;CA[utf-8]AB[de][ed][eg]AW[ee][ef][dd][dc][ce]AP[MultiGo:4.4.4]SZ[9]AB[df]MULTIGOGM[1];B[fe];W[ff];B[gf];W[fg];B[fh];W[gg];B[hg];W[gh];B[hh];W[gi];B[hi];W[fi];B[ei])" },
        { type: 'board', size: 9, title: "征子", desc: "黑先。征吃白子。", sgf: "(;CA[utf-8]AB[dd][ee][ef]AW[bg][df][de][eg][fg]AP[MultiGo:4.4.4]SZ[9]AB[dg]MULTIGOGM[1];B[cf];W[ce];B[be];W[cd];B[cc];W[bd];B[bc];W[ad];B[ac];W[ae];B[af])" },
        { type: 'board', size: 9, title: "征子", desc: "黑先。征吃白子。", sgf: "(;CA[utf-8]AB[cg][dg][ef][fd]AW[bh][bg][ch][cf][df]AP[MultiGo:4.4.4]SZ[9]AB[bf]MULTIGOGM[1];B[ce];W[de];B[dd];W[ee];B[fe];W[ed];B[ec])" },
        { type: 'board', size: 9, title: "征子", desc: "黑先。征吃白子。", sgf: "(;CA[utf-8]AB[ee][dg]AW[df][ff][fg]AP[MultiGo:4.4.4]SZ[9]AB[cf]MULTIGOGM[1];B[ef];W[de];B[dd];W[ce];B[be];W[cd];B[cc];W[bd])" }
    ],

    // ==========================================
    // Lesson 18: 枷 (落子题)
    // ==========================================
    18: [
        { type: 'board', size: 9, title: "枷吃", desc: "黑先。用枷吃掉白子。", sgf: "(;CA[utf-8]AB[dd][ef][ff]AW[cf][df][ee]AP[MultiGo:4.4.4]SZ[9]AB[de]MULTIGOGM[1];B[fd])" },
        { type: 'board', size: 9, title: "枷吃", desc: "黑先。用枷吃掉白子。", sgf: "(;CA[utf-8]AB[eg][fe][ff][cg]AW[ef][fg][gg][hf][ce]AP[MultiGo:4.4.4]SZ[9]AB[dg]MULTIGOGM[1];B[de];W[ee];B[ed];W[df];B[cf])" },
        { type: 'board', size: 9, title: "枷吃", desc: "黑先。用枷吃掉白子。", sgf: "(;CA[utf-8]AB[de][ee][eg][fg][gg]AW[cg][dg][cf][be][cc][ef][ff][ie][if][ig][hd][gc]AP[MultiGo:4.4.4]SZ[9]AB[df]MULTIGOGM[1];B[ge])" },
        { type: 'board', size: 9, title: "枷吃", desc: "黑先。用枷吃掉白子。", sgf: "(;CA[utf-8]AB[de][fh][eh][gg][dg]AW[ch][cg][cf][dh][bd][ef][eg][fg][ge]AP[MultiGo:4.4.4]SZ[9]AB[df]MULTIGOGM[1];B[fe];W[ee];B[ed];W[ff];B[gf])" },
        { type: 'board', size: 9, title: "枷吃", desc: "黑先。用枷吃掉白子。", sgf: "(;CA[utf-8]AB[be][cd][eg][fg][cf]AW[ch][cg][dg][eh][di][bf][ef][gd]AP[MultiGo:4.4.4]SZ[9]AB[df]MULTIGOGM[1];B[fe];W[ee];B[ed];W[de];B[ce];W[dd];B[dc];W[ff];B[gf])" },
        { type: 'board', size: 9, title: "枷吃", desc: "黑先。用枷吃掉白子。", sgf: "(;CA[utf-8]AB[df][eg][fg][hg][cd]AW[bg][cg][dg][ef][he]AP[MultiGo:4.4.4]SZ[9]AB[cf]MULTIGOGM[1];B[fe];W[ee];B[ed];W[de];B[ce];W[dd];B[dc];W[ff];B[gf])" }
    ],

    // ==========================================
    // Lesson 19: 倒扑 (落子题)
    // ==========================================
    19: [
        { type: 'board', size: 9, title: "倒扑", desc: "黑先。使用倒扑手筋。", sgf: "(;CA[utf-8]AB[cf][ce][dd][ff][gf][dg]AW[ch][cg][fg][fh][ef][df][ed][ec][fe]AP[MultiGo:4.4.4]SZ[9]AB[eg]MULTIGOGM[1];B[ee];W[de];B[ee])" },
        { type: 'board', size: 9, title: "倒扑", desc: "黑先。使用倒扑手筋。", sgf: "(;CA[utf-8]AB[cg][dg][eg][eh][fe][de][bi]AW[ch][dh][ei][fi][fh][fg][bg][bf][ce][cc][ah][hg]AP[MultiGo:4.4.4]SZ[9]AB[bh]MULTIGOGM[1];B[di];W[ci];B[di])" },
        { type: 'board', size: 9, title: "倒扑", desc: "黑先。使用倒扑手筋。", sgf: "(;CA[utf-8]AB[dg][eg][ee][dd][cf]AW[df][ef][dc][ed][fc][fe]AP[MultiGo:4.4.4]SZ[9]AB[ce]MULTIGOGM[1];B[ff];W[de];B[ee])" },
        { type: 'board', size: 9, title: "倒扑", desc: "黑先。使用倒扑手筋。", sgf: "(;CA[utf-8]AB[ae][be][ce][df][ef][bh]AW[ah][bi][cf][bf][af][dg][dh][di][ci][fg][gh]AP[MultiGo:4.4.4]SZ[9]AB[cg]MULTIGOGM[1];B[ag];W[bg];B[ag])" },
        { type: 'board', size: 9, title: "倒扑", desc: "黑先。使用倒扑手筋。", sgf: "(;CA[utf-8]AB[dh][eh][eg][ed][fe][ff][cg]AW[dg][ef][ee][dd][dc][ce][fg][gg][hf]AP[MultiGo:4.4.4]SZ[9]AB[cf]MULTIGOGM[1];B[de];W[df];B[de])" },
        { type: 'board', size: 9, title: "倒扑", desc: "黑先。使用倒扑手筋。", sgf: "(;CA[utf-8]AB[cg][ff][df][gg][gh][gi][ci]AW[dg][dh][di][ei][fi][fh][fg][ef][ee][cd][gd]AP[MultiGo:4.4.4]SZ[9]AB[ch]MULTIGOGM[1];B[eg];W[eh];B[eg])" }
    ],

    // ==========================================
    // Lesson 20: 双活 (落子题)
    // ==========================================
    20: [
        { type: 'board', size: 9, title: "双活", desc: "黑先。做出双活。", sgf: "(;CA[utf-8]AB[fh][fi][df][de][cg][ch][eg]AW[di][dh][dg][gi][gh][gg][ff][ef][he]AP[MultiGo:4.4.4]SZ[9]AB[fg]MULTIGOGM[1];B[ci])" },
        { type: 'board', size: 9, title: "双活", desc: "黑先。做出双活。", sgf: "(;CA[utf-8]AB[ff][gf][gg][gh][gi][ee][ed][df][dg][ci]AW[dh][di][eh][fh][eg][ef][fe][ge][he][hf][hg][hh][hi]AP[MultiGo:4.4.4]SZ[9]AB[ch]MULTIGOGM[1];B[fi])" },
        { type: 'board', size: 9, title: "双活", desc: "黑先。做出双活。", sgf: "(;CA[utf-8]AB[bg][cg][dg][df][de][ee][gf][gg][hg][hh][hi][gi][fh][fi][bi]AW[ge][fe][he][dh][ch][ci][eh][ei][eg][ef][hf][if][ig][ih][ii][fc]AP[MultiGo:4.4.4]SZ[9]AB[bh]MULTIGOGM[1];B[ff])" },
        { type: 'board', size: 9, title: "双活", desc: "黑先。做出双活。", sgf: "(;CA[utf-8]AB[bi][ch][cg][ac][bc][cc][dc][dd][de][df]AW[cf][bf][af][ad][bd][cd][ce][dg][dh][di][ci][ef][fg]AP[MultiGo:4.4.4]SZ[9]AB[bh]MULTIGOGM[1];B[ah];W[ag];B[ae])" },
        { type: 'board', size: 9, title: "双活", desc: "黑先。做出双活。", sgf: "(;CA[utf-8]AB[cg][ch][ci][df][ee][fe][ff][fg][gh][hg]AW[bi][bh][bg][bf][de][ce][be][ef][eg][eh][ei][fh]AP[MultiGo:4.4.4]SZ[9]AB[cf]MULTIGOGM[1];B[gi];W[dg];B[fi])" },
        { type: 'board', size: 9, title: "双活", desc: "黑先。做出双活。", sgf: "(;CA[utf-8]AB[eh][ei][fg][ff][fe][ee][gh][de][ce][bd][bf][af][bi]AW[ag][bg][cg][ch][dh][di][cf][df][ef][eg]AP[MultiGo:4.4.4]SZ[9]AB[ci]MULTIGOGM[1];B[ah])" }
    ],

    // ==========================================
    // Lesson 21: 接不归 (落子题)
    // ==========================================
    21: [
        { type: 'board', size: 9, title: "接不归", desc: "黑先。让白棋接不归。", sgf: "(;CA[utf-8]AB[cg][dg][eg][fg][fh][cd]AW[dh][eh][fi][gh][gg][gf][gc]AP[MultiGo:4.4.4]SZ[9]AB[ch]MULTIGOGM[1];B[di];W[ei];B[gi])" },
        { type: 'board', size: 9, title: "接不归", desc: "黑先。让白棋接不归。", sgf: "(;CA[utf-8]AB[bg][ag][be][de][df][ch]AW[ai][bh][ci][dg][dh][eh][ef][fg]AP[MultiGo:4.4.4]SZ[9]AB[cg]MULTIGOGM[1];B[ah];W[di];B[bi])" },
        { type: 'board', size: 9, title: "接不归", desc: "黑先。让白棋接不归。", sgf: "(;CA[utf-8]AB[ab][bb][cc][cd][ce][be][cf][cg]AW[bg][bf][ag][ae][ad][bd][bc][ch][dg][eh][bi]AP[MultiGo:4.4.4]SZ[9]AB[bh]MULTIGOGM[1];B[ac];W[ah];B[af])" },
        { type: 'board', size: 9, title: "接不归", desc: "黑先。让白棋接不归。", sgf: "(;CA[utf-8]AB[gg][gf][dg][cg][cf][ce][dd][ed][fd][gd][ge]AW[ch][dh][eg][fh][gh][de][df][ee][fe][ff][hg]AP[MultiGo:4.4.4]SZ[9]AB[bh]MULTIGOGM[1];B[fg];W[eh];B[ef])" },
        { type: 'board', size: 9, title: "接不归", desc: "黑先。让白棋接不归。", sgf: "(;CA[utf-8]AB[cf][dh][de][dd][ed][gf][fg][fh]AW[df][dg][eg][ee][ff][fd]AP[MultiGo:4.4.4]SZ[9]AB[cg]MULTIGOGM[1];B[eh];W[fe];B[ef])" },
        { type: 'board', size: 9, title: "接不归", desc: "黑先。让白棋接不归。", sgf: "(;CA[utf-8]AB[gg][hg][ig][ih][fg][eg][df][cf][be][cd]AW[bg][bf][cg][dg][eh][ei][fh][gi][hi][hh]AP[MultiGo:4.4.4]SZ[9]AB[gh]MULTIGOGM[1];B[ii];W[fi];B[dh])" }
    ],

    // ==========================================
    // Lesson 22: 杀气 (落子题)
    // ==========================================
    22: [
        { type: 'board', size: 9, title: "对杀", desc: "黑先。紧气杀白。", sgf: "(;CA[utf-8]AB[eh][fg][gg][hg][hh]AW[fh][gh][eg][cg][dg][ch]AP[MultiGo:4.4.4]SZ[9]AB[dh]MULTIGOGM[1];B[gi];W[di];B[fi])" },
        { type: 'board', size: 9, title: "对杀", desc: "黑先。紧气杀白。", sgf: "(;CA[utf-8]AB[gh][hh][eg][dg][cg][ag][bh]AW[ch][dh][eh][ih][ig][hg][gg][fg]AP[MultiGo:4.4.4]SZ[9]AB[fh]MULTIGOGM[1];B[ei];W[hi];B[ci];W[gi];B[di])" },
        { type: 'board', size: 9, title: "对杀", desc: "黑先。紧气杀白。", sgf: "(;CA[utf-8]AB[bh][bg][cg][bd][ce][de][df][dc]AW[bi][ch][dh][dg][cf][bf][af][be][ef][fg]AP[MultiGo:4.4.4]SZ[9]AB[ah]MULTIGOGM[1];B[ad];W[ci];B[ae];W[ai];B[ag])" },
        { type: 'board', size: 9, title: "对杀", desc: "黑先。紧气杀白。", sgf: "(;CA[utf-8]AB[dh][di][fi][ef][ff][gf][hg][ig]AW[bh][cg][cf][df][eg][eh][ei][fg][gh]AP[MultiGo:4.4.4]SZ[9]AB[dg]MULTIGOGM[1];B[gg];W[fh];B[hh];W[gi];B[hi];W[ch];B[fi])" },
        { type: 'board', size: 9, title: "对杀", desc: "黑先。紧气杀白。", sgf: "(;CA[utf-8]AB[cf][df][de][bc][cc][dc][ed][fd]AW[bg][cg][dg][ee][ef][eg][dd][cd][bd][ad][ce]AP[MultiGo:4.4.4]SZ[9]AB[bf]MULTIGOGM[1];B[ae];W[ag];B[ac];W[af];B[be])" },
        { type: 'board', size: 9, title: "对杀", desc: "黑先。紧气杀白。", sgf: "(;CA[utf-8]AB[di][gg][hg][ig][ih][ff][ef][dg]AW[bh][cg][cf][df][eg][fg][eh][ei][gh][hh]AP[MultiGo:4.4.4]SZ[9]AB[dh]MULTIGOGM[1];B[fi];W[fh];B[hi];W[gi];B[fi])" }
    ],

    // ==========================================
    // Lesson 23: 做活 (复杂死活, 落子题)
    // ==========================================
    23: [
        { type: 'board', size: 9, title: "做活", desc: "黑先。占据要点做活。", sgf: "(;CA[utf-8]AB[cg][cf][be][ae][cd][dd][de]AW[bh][ch][ag][bc][cc][dc][ed][ee][ef][dg]AP[MultiGo:4.4.4]SZ[9]AB[bg]MULTIGOGM[1];B[af];W[bd];B[df])" },
        { type: 'board', size: 9, title: "做活", desc: "黑先。占据要点做活。", sgf: "(;CA[utf-8]AB[bh][ch][cg][cf][bf]AW[af][ae][be][ce][de][df][dg][dh][di][ci]AP[MultiGo:4.4.4]SZ[9]AB[bi]MULTIGOGM[1];B[ag])" },
        { type: 'board', size: 9, title: "做活", desc: "黑先。占据要点做活。", sgf: "(;CA[utf-8]AB[dh][dg][eg][fh][gh][gi]AW[bi][bh][cg][bf][df][ef][fg][gg][hg][hh][hi]AP[MultiGo:4.4.4]SZ[9]AB[ch]MULTIGOGM[1];B[ei];W[ci];B[di])" },
        { type: 'board', size: 9, title: "做活", desc: "黑先。占据要点做活。", sgf: "(;CA[utf-8]AB[bg][cg][be][ce][bd][ad][ah]AW[cf][ac][bc][cb][cd][dd][de][ef][dg][ch][eh][bi]AP[MultiGo:4.4.4]SZ[9]AB[bh]MULTIGOGM[1];B[af];W[df];B[bf])" },
        { type: 'board', size: 9, title: "做活", desc: "黑先。占据要点做活。", sgf: "(;CA[utf-8]AB[bi][ch][dh][eh][ei][fh][gh][hi]AW[ah][bg][cg][dg][hh][ih][gg][fg][eg]AP[MultiGo:4.4.4]SZ[9]AB[ai]MULTIGOGM[1];B[gi])" },
        { type: 'board', size: 9, title: "做活", desc: "黑先。占据要点做活。", sgf: "(;CA[utf-8]AB[bg][cg][dh][ci]AW[bf][cf][dg][eg][eh][ei][ee]AP[MultiGo:4.4.4]SZ[9]AB[ah]MULTIGOGM[1];B[bi];W[di];B[ch])" }
    ],

    // ==========================================
    // Lesson 24: 吃棋 (复杂死活, 落子题)
    // ==========================================
    24: [
        { type: 'board', size: 9, title: "杀棋", desc: "黑先。点眼杀白。", sgf: "(;CA[utf-8]AB[bh][bf][cg][dg][hh][ig][gg][gf][ff][ef]AW[ch][dh][eg][fg][fh][ei][gh]AP[MultiGo:4.4.4]SZ[9]AB[bi]MULTIGOGM[1];B[ci];W[di];B[gi])" },
        { type: 'board', size: 9, title: "杀棋", desc: "黑先。点眼杀白。", sgf: "(;CA[utf-8]AB[bg][cg][df][ef][ei][fg][gg][hg][ig][fe]AW[ch][dh][dg][eg][fh][gh][hh][ih][ii]AP[MultiGo:4.4.4]SZ[9]AB[bh]MULTIGOGM[1];B[ci];W[fi];B[bi];W[eh];B[di])" },
        { type: 'board', size: 9, title: "杀棋", desc: "黑先。点眼杀白。", sgf: "(;CA[utf-8]AB[dh][dg][eg][fh][gh][gi]AW[bi][bh][cg][bf][df][ef][fg][gg][hg][hh][hi]AP[MultiGo:4.4.4]SZ[9]AB[ch]MULTIGOGM[1];B[ei];W[ci];B[di])" },
        { type: 'board', size: 9, title: "杀棋", desc: "黑先。点眼杀白。", sgf: "(;CA[utf-8]AB[ah][ag][cf][bf][cd][de][ee][fe][ff][fg][fh]AW[bg][bh][cg][df][ef][eg][eh][dh]AP[MultiGo:4.4.4]SZ[9]AB[bi]MULTIGOGM[1];B[ci])" },
        { type: 'board', size: 9, title: "杀棋", desc: "黑先。点眼杀白。", sgf: "(;CA[utf-8]AB[bh][ae][bd][bf][cf][dg][eg][fg][fh]AW[ag][bg][cg][ch][dh][eh][bi][af]AP[MultiGo:4.4.4]SZ[9]AB[ah]MULTIGOGM[1];B[ei];W[ai];B[di])" },
        { type: 'board', size: 9, title: "杀棋", desc: "黑先。点眼杀白。", sgf: "(;CA[utf-8]AB[bg][cf][df][ei][gi][gh][hg][hf][ih][ge][fe][ee][dd]AW[cg][dg][eg][ef][ff][gf][gg][fh][eh][di]AP[MultiGo:4.4.4]SZ[9]AB[bh]MULTIGOGM[1];B[ch];W[fi];B[dh])" }
    ],

    // ==========================================
    // Lesson 25: 判断胜负 (填数字)
    // ==========================================
    25: [
        { type: 'score_count', size: 9, title: "形势判断", desc: "数一数黑白各占了多少目（交叉点）？", sgf: "(;CA[utf-8]AB[eb][ec][ed][ee][di][dh][dg][df][ce]AW[ef][eg][eh][ei][fe][fd][fc][fb][fa][gf]AP[MultiGo:4.4.4]SZ[9]AB[ea]MULTIGOGM[1])", answer: {black: 41, white: 40} },
        { type: 'score_count', size: 9, title: "形势判断", desc: "数一数黑白各占了多少目（交叉点）？", sgf: "(;CA[utf-8]AB[eg][eh][ei][fe][fd][fc][fb][fa][gf]AW[ea][eb][ec][ed][ee][df][dg][dh][di][ce]AP[MultiGo:4.4.4]SZ[9]AB[ef]MULTIGOGM[1])", answer: {black: 40, white: 41} }
    ]
};

