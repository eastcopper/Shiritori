const word = document.getElementById('word');
let i = 0;
let arr = [];
function printName () {
    
        arr[i] = word.value;
        console.log(arr[i]);
        i++
        word.value='';
}