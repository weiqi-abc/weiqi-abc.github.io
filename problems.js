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
        { type: 'select', size: 9, title: "危险感知", desc: "请选中所有【被打吃】的黑棋。", sgf: "", answer: [{x:0,y:0}] },
        { type: 'select', size: 9, title: "危险感知", desc: "请选中所有【被打吃】的黑棋。", sgf: "", answer: [{x:0,y:0}] },
        { type: 'select', size: 9, title: "危险感知", desc: "请选中所有【被打吃】的黑棋。", sgf: "", answer: [{x:0,y:0}] },
        { type: 'select', size: 9, title: "危险感知", desc: "请选中所有【被打吃】的黑棋。", sgf: "", answer: [{x:0,y:0}] },
        { type: 'select', size: 9, title: "危险感知", desc: "请选中所有【被打吃】的黑棋。", sgf: "", answer: [{x:0,y:0}] },
        { type: 'select', size: 9, title: "危险感知", desc: "请选中所有【被打吃】的黑棋。", sgf: "", answer: [{x:0,y:0}] }
    ],

    // ==========================================
    // Lesson 6: 寻求活路 (落子题)
    // ==========================================
    6: [
        { type: 'board', size: 9, title: "寻求活路", desc: "黑先。请寻找出路。", sgf: "(;CA[utf-8]AB[fg][hf][he]AW[hh][hg][gf][ge][if]AP[MultiGo:4.4.4]SZ[9]AB[gg]MULTIGOGM[1](;B[hd]C[正解])(;B[ie]C[失败]))" },
        { type: 'board', size: 9, title: "寻求活路", desc: "黑先。请寻找出路。", sgf: "" },
        { type: 'board', size: 9, title: "寻求活路", desc: "黑先。请寻找出路。", sgf: "" },
        { type: 'board', size: 9, title: "寻求活路", desc: "黑先。请寻找出路。", sgf: "" },
        { type: 'board', size: 9, title: "寻求活路", desc: "黑先。请寻找出路。", sgf: "" },
        { type: 'board', size: 9, title: "寻求活路", desc: "黑先。请寻找出路。", sgf: "" }
    ],

    // ==========================================
    // Lesson 7: 打吃的方向 (落子题 / A,B选择)
    // 注意：需要在 markers 里定义 A 和 B 的位置
    // ==========================================
    7: [
        { type: 'board', size: 9, title: "打吃方向", desc: "黑先。请选择正确的打吃方向。", sgf: "", markers:[{x:0,y:0,text:'A'},{x:1,y:0,text:'B'}] },
        { type: 'board', size: 9, title: "打吃方向", desc: "黑先。请选择正确的打吃方向。", sgf: "", markers:[{x:0,y:0,text:'A'},{x:1,y:0,text:'B'}] },
        { type: 'board', size: 9, title: "打吃方向", desc: "黑先。请选择正确的打吃方向。", sgf: "", markers:[{x:0,y:0,text:'A'},{x:1,y:0,text:'B'}] },
        { type: 'board', size: 9, title: "打吃方向", desc: "黑先。请选择正确的打吃方向。", sgf: "", markers:[{x:0,y:0,text:'A'},{x:1,y:0,text:'B'}] },
        { type: 'board', size: 9, title: "打吃方向", desc: "黑先。请选择正确的打吃方向。", sgf: "", markers:[{x:0,y:0,text:'A'},{x:1,y:0,text:'B'}] },
        { type: 'board', size: 9, title: "打吃方向", desc: "黑先。请选择正确的打吃方向。", sgf: "", markers:[{x:0,y:0,text:'A'},{x:1,y:0,text:'B'}] }
    ],

    // ==========================================
    // Lesson 8: 能否逃脱 (判断 / 是非题)
    // ==========================================
    8: [
        { type: 'bool', size: 9, title: "能否逃脱", desc: "标记的黑子能逃跑吗？", sgf: "", markers: [{x:0,y:0}], answer: true },
        { type: 'bool', size: 9, title: "能否逃脱", desc: "标记的黑子能逃跑吗？", sgf: "", markers: [{x:0,y:0}], answer: true },
        { type: 'bool', size: 9, title: "能否逃脱", desc: "标记的黑子能逃跑吗？", sgf: "", markers: [{x:0,y:0}], answer: true },
        { type: 'bool', size: 9, title: "能否逃脱", desc: "标记的黑子能逃跑吗？", sgf: "", markers: [{x:0,y:0}], answer: true },
        { type: 'bool', size: 9, title: "能否逃脱", desc: "标记的黑子能逃跑吗？", sgf: "", markers: [{x:0,y:0}], answer: true },
        { type: 'bool', size: 9, title: "能否逃脱", desc: "标记的黑子能逃跑吗？", sgf: "", markers: [{x:0,y:0}], answer: true }
    ],

    // ==========================================
    // Lesson 9: 双打吃 (落子题 / A,B选择)
    // ==========================================
    9: [
        { type: 'board', size: 9, title: "双打吃", desc: "请选择双打吃的位置(A/B)。", sgf: "", markers:[{x:0,y:0,text:'A'},{x:0,y:1,text:'B'}] },
        { type: 'board', size: 9, title: "双打吃", desc: "请选择双打吃的位置(A/B)。", sgf: "", markers:[{x:0,y:0,text:'A'},{x:0,y:1,text:'B'}] },
        { type: 'board', size: 9, title: "双打吃", desc: "请选择双打吃的位置(A/B)。", sgf: "", markers:[{x:0,y:0,text:'A'},{x:0,y:1,text:'B'}] },
        { type: 'board', size: 9, title: "双打吃", desc: "请选择双打吃的位置(A/B)。", sgf: "", markers:[{x:0,y:0,text:'A'},{x:0,y:1,text:'B'}] },
        { type: 'board', size: 9, title: "双打吃", desc: "请选择双打吃的位置(A/B)。", sgf: "", markers:[{x:0,y:0,text:'A'},{x:0,y:1,text:'B'}] },
        { type: 'board', size: 9, title: "双打吃", desc: "请选择双打吃的位置(A/B)。", sgf: "", markers:[{x:0,y:0,text:'A'},{x:0,y:1,text:'B'}] }
    ],

    // ==========================================
    // Lesson 10: 禁入点 (判断 / 是非题)
    // ==========================================
    10: [
        { type: 'bool', size: 9, title: "禁入点", desc: "标记的位置是禁入点吗？", sgf: "", markers:[{x:0,y:0}], answer: true },
        { type: 'bool', size: 9, title: "禁入点", desc: "标记的位置是禁入点吗？", sgf: "", markers:[{x:0,y:0}], answer: true },
        { type: 'bool', size: 9, title: "禁入点", desc: "标记的位置是禁入点吗？", sgf: "", markers:[{x:0,y:0}], answer: true },
        { type: 'bool', size: 9, title: "禁入点", desc: "标记的位置是禁入点吗？", sgf: "", markers:[{x:0,y:0}], answer: true },
        { type: 'bool', size: 9, title: "禁入点", desc: "标记的位置是禁入点吗？", sgf: "", markers:[{x:0,y:0}], answer: true },
        { type: 'bool', size: 9, title: "禁入点", desc: "标记的位置是禁入点吗？", sgf: "", markers:[{x:0,y:0}], answer: true }
    ],

    // ==========================================
    // Lesson 11: 棋的死活 (直三直四等, 落子题)
    // ==========================================
    11: [
        { type: 'board', size: 9, title: "死活基础", desc: "黑先。请做活或杀棋。", sgf: "" },
        { type: 'board', size: 9, title: "死活基础", desc: "黑先。请做活或杀棋。", sgf: "" },
        { type: 'board', size: 9, title: "死活基础", desc: "黑先。请做活或杀棋。", sgf: "" },
        { type: 'board', size: 9, title: "死活基础", desc: "黑先。请做活或杀棋。", sgf: "" },
        { type: 'board', size: 9, title: "死活基础", desc: "黑先。请做活或杀棋。", sgf: "" },
        { type: 'board', size: 9, title: "死活基础", desc: "黑先。请做活或杀棋。", sgf: "" }
    ],

    // ==========================================
    // Lesson 12: 什么是目 (落子题)
    // ==========================================
    12: [
        { type: 'board', size: 9, title: "围地", desc: "黑先。请下在关键点围住地盘。", sgf: "" },
        { type: 'board', size: 9, title: "围地", desc: "黑先。请下在关键点围住地盘。", sgf: "" },
        { type: 'board', size: 9, title: "围地", desc: "黑先。请下在关键点围住地盘。", sgf: "" },
        { type: 'board', size: 9, title: "围地", desc: "黑先。请下在关键点围住地盘。", sgf: "" },
        { type: 'board', size: 9, title: "围地", desc: "黑先。请下在关键点围住地盘。", sgf: "" },
        { type: 'board', size: 9, title: "围地", desc: "黑先。请下在关键点围住地盘。", sgf: "" }
    ],

    // ==========================================
    // Lesson 13: 连接与分断 (落子题)
    // ==========================================
    13: [
        { type: 'board', size: 9, title: "连接分断", desc: "黑先。连接自己或切断对方。", sgf: "" },
        { type: 'board', size: 9, title: "连接分断", desc: "黑先。连接自己或切断对方。", sgf: "" },
        { type: 'board', size: 9, title: "连接分断", desc: "黑先。连接自己或切断对方。", sgf: "" },
        { type: 'board', size: 9, title: "连接分断", desc: "黑先。连接自己或切断对方。", sgf: "" },
        { type: 'board', size: 9, title: "连接分断", desc: "黑先。连接自己或切断对方。", sgf: "" },
        { type: 'board', size: 9, title: "连接分断", desc: "黑先。连接自己或切断对方。", sgf: "" }
    ],

    // ==========================================
    // Lesson 14: 能否切断 (判断 / 是非题)
    // ==========================================
    14: [
        { type: 'bool', size: 9, title: "切断判断", desc: "标记的位置能切断白棋吗？", sgf: "", markers: [{x:0,y:0}], answer: true },
        { type: 'bool', size: 9, title: "切断判断", desc: "标记的位置能切断白棋吗？", sgf: "", markers: [{x:0,y:0}], answer: true },
        { type: 'bool', size: 9, title: "切断判断", desc: "标记的位置能切断白棋吗？", sgf: "", markers: [{x:0,y:0}], answer: true },
        { type: 'bool', size: 9, title: "切断判断", desc: "标记的位置能切断白棋吗？", sgf: "", markers: [{x:0,y:0}], answer: true },
        { type: 'bool', size: 9, title: "切断判断", desc: "标记的位置能切断白棋吗？", sgf: "", markers: [{x:0,y:0}], answer: true },
        { type: 'bool', size: 9, title: "切断判断", desc: "标记的位置能切断白棋吗？", sgf: "", markers: [{x:0,y:0}], answer: true }
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
        { type: 'bool', size: 9, title: "打劫规则", desc: "白棋刚提劫，黑棋现在能马上反提吗？", sgf: "", answer: false },
        { type: 'board', size: 9, title: "制造劫争", desc: "黑先。扑进去做成劫。", sgf: "" },
        { type: 'board', size: 9, title: "劫争", desc: "黑先。找劫材或提劫。", sgf: "" },
        { type: 'board', size: 9, title: "劫争", desc: "黑先。找劫材或提劫。", sgf: "" },
        { type: 'board', size: 9, title: "劫争", desc: "黑先。找劫材或提劫。", sgf: "" },
        { type: 'board', size: 9, title: "劫争", desc: "黑先。找劫材或提劫。", sgf: "" }
    ],

    // ==========================================
    // Lesson 17: 征子 (落子题)
    // ==========================================
    17: [
        { type: 'board', size: 9, title: "征子", desc: "黑先。征吃白子。", sgf: "" },
        { type: 'board', size: 9, title: "征子", desc: "黑先。征吃白子。", sgf: "" },
        { type: 'board', size: 9, title: "征子", desc: "黑先。征吃白子。", sgf: "" },
        { type: 'board', size: 9, title: "征子", desc: "黑先。征吃白子。", sgf: "" },
        { type: 'board', size: 9, title: "征子", desc: "黑先。征吃白子。", sgf: "" },
        { type: 'board', size: 9, title: "征子", desc: "黑先。征吃白子。", sgf: "" }
    ],

    // ==========================================
    // Lesson 18: 枷 (落子题)
    // ==========================================
    18: [
        { type: 'board', size: 9, title: "枷吃", desc: "黑先。用枷吃掉白子。", sgf: "" },
        { type: 'board', size: 9, title: "枷吃", desc: "黑先。用枷吃掉白子。", sgf: "" },
        { type: 'board', size: 9, title: "枷吃", desc: "黑先。用枷吃掉白子。", sgf: "" },
        { type: 'board', size: 9, title: "枷吃", desc: "黑先。用枷吃掉白子。", sgf: "" },
        { type: 'board', size: 9, title: "枷吃", desc: "黑先。用枷吃掉白子。", sgf: "" },
        { type: 'board', size: 9, title: "枷吃", desc: "黑先。用枷吃掉白子。", sgf: "" }
    ],

    // ==========================================
    // Lesson 19: 倒扑 (落子题)
    // ==========================================
    19: [
        { type: 'board', size: 9, title: "倒扑", desc: "黑先。使用倒扑手筋。", sgf: "" },
        { type: 'board', size: 9, title: "倒扑", desc: "黑先。使用倒扑手筋。", sgf: "" },
        { type: 'board', size: 9, title: "倒扑", desc: "黑先。使用倒扑手筋。", sgf: "" },
        { type: 'board', size: 9, title: "倒扑", desc: "黑先。使用倒扑手筋。", sgf: "" },
        { type: 'board', size: 9, title: "倒扑", desc: "黑先。使用倒扑手筋。", sgf: "" },
        { type: 'board', size: 9, title: "倒扑", desc: "黑先。使用倒扑手筋。", sgf: "" }
    ],

    // ==========================================
    // Lesson 20: 双活 (落子题)
    // ==========================================
    20: [
        { type: 'board', size: 9, title: "双活", desc: "黑先。做出双活。", sgf: "" },
        { type: 'board', size: 9, title: "双活", desc: "黑先。做出双活。", sgf: "" },
        { type: 'board', size: 9, title: "双活", desc: "黑先。做出双活。", sgf: "" },
        { type: 'board', size: 9, title: "双活", desc: "黑先。做出双活。", sgf: "" },
        { type: 'board', size: 9, title: "双活", desc: "黑先。做出双活。", sgf: "" },
        { type: 'board', size: 9, title: "双活", desc: "黑先。做出双活。", sgf: "" }
    ],

    // ==========================================
    // Lesson 21: 接不归 (落子题)
    // ==========================================
    21: [
        { type: 'board', size: 9, title: "接不归", desc: "黑先。让白棋接不归。", sgf: "" },
        { type: 'board', size: 9, title: "接不归", desc: "黑先。让白棋接不归。", sgf: "" },
        { type: 'board', size: 9, title: "接不归", desc: "黑先。让白棋接不归。", sgf: "" },
        { type: 'board', size: 9, title: "接不归", desc: "黑先。让白棋接不归。", sgf: "" },
        { type: 'board', size: 9, title: "接不归", desc: "黑先。让白棋接不归。", sgf: "" },
        { type: 'board', size: 9, title: "接不归", desc: "黑先。让白棋接不归。", sgf: "" }
    ],

    // ==========================================
    // Lesson 22: 杀气 (落子题)
    // ==========================================
    22: [
        { type: 'board', size: 9, title: "对杀", desc: "黑先。紧气杀白。", sgf: "" },
        { type: 'board', size: 9, title: "对杀", desc: "黑先。紧气杀白。", sgf: "" },
        { type: 'board', size: 9, title: "对杀", desc: "黑先。紧气杀白。", sgf: "" },
        { type: 'board', size: 9, title: "对杀", desc: "黑先。紧气杀白。", sgf: "" },
        { type: 'board', size: 9, title: "对杀", desc: "黑先。紧气杀白。", sgf: "" },
        { type: 'board', size: 9, title: "对杀", desc: "黑先。紧气杀白。", sgf: "" }
    ],

    // ==========================================
    // Lesson 23: 做活 (复杂死活, 落子题)
    // ==========================================
    23: [
        { type: 'board', size: 9, title: "做活", desc: "黑先。占据要点做活。", sgf: "" },
        { type: 'board', size: 9, title: "做活", desc: "黑先。占据要点做活。", sgf: "" },
        { type: 'board', size: 9, title: "做活", desc: "黑先。占据要点做活。", sgf: "" },
        { type: 'board', size: 9, title: "做活", desc: "黑先。占据要点做活。", sgf: "" },
        { type: 'board', size: 9, title: "做活", desc: "黑先。占据要点做活。", sgf: "" },
        { type: 'board', size: 9, title: "做活", desc: "黑先。占据要点做活。", sgf: "" }
    ],

    // ==========================================
    // Lesson 24: 吃棋 (复杂死活, 落子题)
    // ==========================================
    24: [
        { type: 'board', size: 9, title: "杀棋", desc: "黑先。点眼杀白。", sgf: "" },
        { type: 'board', size: 9, title: "杀棋", desc: "黑先。点眼杀白。", sgf: "" },
        { type: 'board', size: 9, title: "杀棋", desc: "黑先。点眼杀白。", sgf: "" },
        { type: 'board', size: 9, title: "杀棋", desc: "黑先。点眼杀白。", sgf: "" },
        { type: 'board', size: 9, title: "杀棋", desc: "黑先。点眼杀白。", sgf: "" },
        { type: 'board', size: 9, title: "杀棋", desc: "黑先。点眼杀白。", sgf: "" }
    ],

    // ==========================================
    // Lesson 25: 判断胜负 (填数字)
    // ==========================================
    25: [
        { type: 'score_count', size: 9, title: "形势判断", desc: "数一数黑白各占了多少目（交叉点）？", sgf: "(;CA[utf-8]AB[eb][ec][ed][ee][di][dh][dg][df][ce]AW[ef][eg][eh][ei][fe][fd][fc][fb][fa][gf]AP[MultiGo:4.4.4]SZ[9]AB[ea]MULTIGOGM[1])", answer: {black: 41, white: 40} },
        { type: 'score_count', size: 9, title: "形势判断", desc: "数一数黑白各占了多少目（交叉点）？", sgf: "", answer: {black: 0, white: 0} },
        { type: 'score_count', size: 9, title: "形势判断", desc: "数一数黑白各占了多少目（交叉点）？", sgf: "", answer: {black: 0, white: 0} },
        { type: 'score_count', size: 9, title: "形势判断", desc: "数一数黑白各占了多少目（交叉点）？", sgf: "", answer: {black: 0, white: 0} },
        { type: 'score_count', size: 9, title: "形势判断", desc: "数一数黑白各占了多少目（交叉点）？", sgf: "", answer: {black: 0, white: 0} },
        { type: 'score_count', size: 9, title: "形势判断", desc: "数一数黑白各占了多少目（交叉点）？", sgf: "", answer: {black: 0, white: 0} }
    ]
};