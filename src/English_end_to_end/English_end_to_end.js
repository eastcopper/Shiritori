const number = document.getElementById('number');
const timer = document.getElementById('timer');
const input = document.getElementById('answer');
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];
const restart = document.getElementById("restart");
const result = document.getElementById('result');
let numberTime = 0;
let time = 100;
let files = ["undefined", "apple", "banana", "emotion", "water", "circle", "square", "pencil", "notion", "motion", "option", "happy", "january", "feburary", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december", "library", "empire", "salt", "biz", "if", "therefore", "donghyun", "dracula", "newspaper", "orange", "yellow", "cromium", "uranium", "delirium", "hush", "mouth", "whistle", "umbrella", "raccoon", "paul", "reverberation", "silence", "pacific", "ensemble", "nightmare", "impurity", "assembly", "language", "patriarch", "relationship", "cellphone", "colors", "whether", "naver", "chrome", "discord", "canard", "rumor", "maneuever", "science", "friend", "clock", "transformer", "nationalgeographic", "information", "knockdown", "knowledge", "realize", "believe", "monkey", "ipecac", "surfur", "cleaver", "revenge", "evolution", "empress", "hemoglobin", ""];
// 처음 제시어
Array.prototype.shuffle = function () {
    let length = files.length;
    while (length) {
        let index = Math.floor(length-- * Math.random());
        let temp = this[length];
        this[length] = this[index];
        this[index] = temp;
    }
    return this;
}; // 제시어 랜덤
files.shuffle();
function printName() {
    const word = document.getElementById('word').textContent;
    const answer = document.getElementById('answer').value;
    let lastIndex = word.length - 1;
    let num = (answer[answer.length - 1].charCodeAt(0)  < 48 || answer[answer.length - 1].charCodeAt(0) > 57);
    let consonant = (answer[answer.length - 1].charCodeAt(0) < 12593 || answer[answer.length - 1].charCodeAt(0) > 12643);
    let smallLetter = (answer[answer.length - 1].charCodeAt(0) >= 97 || answer[answer.length - 1].charCodeAt(0) <= 122);
    let capitalLetter = (answer[answer.length - 1].charCodeAt(0) < 65 || answer[answer.length - 1].charCodeAt(0) > 90); // 예외 처리
    if (time > 0) {
        if (word[lastIndex] === answer[0] && answer.length > 1 && consonant && smallLetter && capitalLetter && num) {
            const name = document.getElementById('answer').value;
            document.getElementById("word").innerText = name; // 다음 제시어
            numberTime++; // 횟수 증가
        } else {
            alert('틀렸습니다!');
            timer.innerHTML = `${0}s`
            time = 0;
            scene(); // 게임 오버 장면
        }
    }
    number.innerHTML = `${numberTime}번 하였습니다.`; // 횟수 표시
    input.value = "";
}
let timeOut = setInterval(function () {
    if (time > 0) {
        time--;
        timer.innerHTML = `${time}s`; // 타이머 표시
    } else {
        scene();
    }
}, 1000)
window.onload = function () {
    number.innerHTML = `${numberTime}번 하였습니다.`;
    timer.innerHTML = `${time}s`;
    word.innerHTML = `${files[0]}`
}
function scene() {
    modal.style.display = "block";
    result.innerHTML = `${numberTime}번 하였습니다.`;
} // 게임 오버 장면
span.onclick = function () {
    modal.style.display = "none";
}
restart.onclick = function () {
    location.reload();
} // 다시 시작