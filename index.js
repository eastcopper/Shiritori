const number = document.getElementById('number');
const timer = document.getElementById('timer');
const input = document.getElementById('answer');
let num = 0;
let time = 100;
let files = [ "호랑이", "자동차", "떡볶이", "노트북", "스무디", "포르테", "스팅어", "이리듐", "책가방", "컴퓨터", "코딩", "자바스크립트", "스튜디오", "강아지", "사물함", "놀이공원", "기러기", "라디오", "임금님", "머스탱", "슭곰발", "지우개", "휴대폰", "이동현천재", "마우스", "의자", "책상", "거울", "콘센트", "트라이앵글", "학교", "과자", "음료수", "인터넷", "소나기", "플러그", "미역", "표지판", "판사", "사람", "남자", "여자", "자라", "대한민국", "대전", "서울", "부산", "대구", "울산", "인천", "제주도", "일본", "중국", "러시아", "미국", "유럽", "아프리카", "아메리카", "스페인", "브라질", "시간표", "칠판", "가나", "독일", "멕시코", "베네수엘라", "수단", "스웨덴", "우즈베키스탄", "짐바브웨", "터키", "포르투갈", "필리핀", "타이완", "디스코드", "카카오톡", "깃허브", "크롬", "드래곤", "인덱스", "스택", "프로토타입", "스코프", "체이닝", "프로퍼티", "객체", "네트워크", "시나브로" ];
Array.prototype.shuffle = function () {
    let length = files.length;
    while (length) {
        let index = Math.floor(length-- * Math.random());
        let temp = this[length];
        this[length] = this[index];
        this[index] = temp;
    }
    return this;
};

files.shuffle();
function printName () {
    const word = document.getElementById('word').textContent;
    const answer = document.getElementById('answer').value;
    let lastIndex = word.length - 1;
    number.innerHTML = `${num}번 하였습니다.`;
    if (word[lastIndex] === answer[0] && answer.length > 1 && answer[answer.length - 1].charCodeAt(0) < 12593 || answer[answer.length - 1].charCodeAt(0) > 12622) {
        const name = document.getElementById('answer').value;
        document.getElementById("word").innerText = name;
        num++;
    } else { 
        alert('틀렸습니다!');
        time = 0;
    }
    input.value="";
}
let timeOut = setInterval(function(){
    if (time > 0) {
        time--;
        timer.innerHTML = `${time}s`;
    }
}, 1000)
window.onload = function() {
    number.innerHTML = `${num}번 하였습니다.`;
    timer.innerHTML = `${time}s`;
    word.innerHTML = `${files[0]}`
}

