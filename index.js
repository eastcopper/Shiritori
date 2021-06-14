const answer = document.getElementById('answer');
let word = "호랑이";
function printName () {
        while (true) {
        var answer = prompt(word);
        if (word[word.length - 1] == answer[0]) {
            word = answer;
        } else { 
            alert('틀렸습니다!');
        }
      }
}
