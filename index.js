const number = document.getElementById('number');
const timer = document.getElementById('timer');
let num = 0;
let time = 10;
timer.innerHTML = `${time}s`;
function printName () {
    const word = document.querySelector('#word').textContent;
    const answer = document.querySelector('#answer').value;
    let lastIndex = word.length - 1;
    number.innerHTML = `${num}번 하였습니다.`;
    if (word[lastIndex] === answer[0] && answer.length > 1) {
        const name = document.getElementById('answer').value;
        document.getElementById("word").innerText = name;
        num++;
    }
    else { 
        alert('틀렸습니다!');
    }
}
let timeOut = setInterval(function(){
    if (time > 0) {
        time--;
        timer.innerHTML = `${time}s`;
    }
}, 1000)