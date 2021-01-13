let i = 0;

function hiku() {
    const r = Math.floor(Math.random() * 100000);
    const result = document.getElementById('result');
    const count = document.getElementById('try');
    
    if (r == 0){
        result.innerHTML = '役満！';
    }else if (r < 3000){
        result.innerHTML = '大吉！';
    }else{
        result.innerHTML = '大凶！';
    }

    // 試行回数
    i++;
    count.innerHTML = `試行回数 ${i} 回`;
}
