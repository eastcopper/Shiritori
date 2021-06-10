const answer = document.getElementById('answer');
let word = "호랑이";
function printName () {
        if (word[word.length - 1] == answer.value[0]) {
                alert('asdf');
        }
        answer.value='';
}