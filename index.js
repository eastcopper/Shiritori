function printName () {
    const word = document.querySelector('#word').textContent
    const answer = document.querySelector('#answer').value
    let lastIndex = word.length - 1;
    if (word[lastIndex] === answer[0]) {
        const name = document.getElementById('answer').value;
        document.getElementById("word").innerText = name;
    }
    else { 
        alert('틀렸습니다!');
    }
    answer.value = '';
}
