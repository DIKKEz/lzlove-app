function calculateLove() {
    const yourName = document.getElementById('yourName').value.trim().toLowerCase();
    const taName = document.getElementById('taName').value.trim().toLowerCase();

    // 设置你们专属的名字（需修改这里！）
    const YOUR_SPECIAL_NAME = "宗源"; // 改为你的真实名字
    const TA_SPECIAL_NAME = "柳思思";  // 改为TA的真实名字

    // 判断是否是特定组合（无视输入顺序）
    const isSpecialCouple = 
        (yourName === YOUR_SPECIAL_NAME.toLowerCase() && taName === TA_SPECIAL_NAME.toLowerCase()) ||
        (yourName === TA_SPECIAL_NAME.toLowerCase() && taName === YOUR_SPECIAL_NAME.toLowerCase());

    if(isSpecialCouple) {
        showResult(100, true); // 强制100%
    } else {
        // 原计算逻辑
        const loveScore = [...yourName + taName]
            .reduce((sum, char) => sum + char.charCodeAt(0), 0) % 100;
        showResult(loveScore, false);
    }
}

function showResult(score, isSpecial) {
    const comments = isSpecial ? 
        ["你们是天造地设的一对！", "宇宙最完美组合诞生了"] : 
        ["你们是命中注定的灵魂伴侣！","需要更多磨合"];

    document.getElementById('result').innerHTML = `
        ❤️ 缘分指数：${score}% ❤️
        <div style="color:${isSpecial ? '#ff0000' : '#ff3399'};margin-top:10px">
            ${comments[score % comments.length]}
        </div>
    `;
}
function createHearts() {
    for(let i=0; i<50; i++){
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random()*100 + 'vw';
        heart.style.animationDelay = Math.random()*2 + 's';
        document.body.appendChild(heart);
    }
}