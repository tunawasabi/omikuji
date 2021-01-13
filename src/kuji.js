function hiku() {
    const r = Math.floor(Math.random() * 100);
    const result = document.getElementById('result');
    if (r < 3){
        result.innerHTML = '大吉！';
    }else{
        result.innerHTML = '大凶！';
    }
}
