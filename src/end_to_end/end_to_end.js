const number = document.getElementById('number');
const timer = document.getElementById('timer');
const input = document.getElementById('answer');
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];
const restart = document.getElementById("restart");
const result = document.getElementById('result');
let numberTime = 0;
let time = 100;
let files = ["호랑이", "자동차", "떡볶이", "노트북", "스무디", "포르테", "스팅어", "이리듐", "책가방", "컴퓨터", "코딩", "자바스크립트", "스튜디오", "강아지", "사물함", "놀이공원", "기러기", "라디오", "임금님", "머스탱", "슭곰발", "지우개", "휴대폰", "이동현천재", "마우스", "의자", "책상", "거울", "콘센트", "트라이앵글", "학교", "과자", "음료수", "인터넷", "소나기", "플러그", "미역", "표지판", "판사", "사람", "남자", "여자", "자라", "대한민국", "대전", "서울", "부산", "대구", "울산", "인천", "제주도", "일본", "중국", "러시아", "미국", "유럽", "아프리카", "아메리카", "스페인", "브라질", "시간표", "칠판", "가나", "독일", "멕시코", "베네수엘라", "수단", "스웨덴", "우즈베키스탄", "짐바브웨", "터키", "포르투갈", "필리핀", "타이완", "디스코드", "카카오톡", "깃허브", "크롬", "드래곤", "인덱스", "스택", "프로토타입", "스코프", "체이닝", "프로퍼티", "객체", "네트워크", "시나브로", "스피커", "히어로", "돼지", "토끼", "악어", "하마", "도마뱀", "끝말잇기", "유튜브", "트위치", "메모리", "커밋", "메시지", "당근", "양파", "채소", "과일", "사과", "바나나", "아보카도", "올리브", "무화과", "복숭아", "석류", "으름", "유자", "한라봉", "파인애플", "망고", "파스타치오", "청양고추", "깻잎", "더덕", "멜론", "버섯", "시금치", "청경채", "콩나물", "토마토", "감자", "고구마", "호박", "앵무새", "고릴라", "햄스터", "달팽이", "다람쥐", "키메라", "케르베로스", "파트라슈", "거미", "좀비", "자갈", "테라코타", "네더랙", "발광석", "잭오랜턴", "랜던", "흑요석", "다이아몬드", "철광석", "금광석", "석탄", "흑연", "유리판", "현수막", "양탄자", "사슬", "화분", "거미줄", "공백", "광주", "갈고리", "태양", "수성", "금성", "지구"];
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
    let smallLetter = (answer[answer.length - 1].charCodeAt(0) < 97 || answer[answer.length - 1].charCodeAt(0) > 122);
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