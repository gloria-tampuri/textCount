let inputText = document.getElementById('product-name')
let changeNum = document.querySelector('.change')

function changeIndicator(event){
let inputValue = event.target.value;
let inputCount = inputValue.length;
let inputLeft =  60 - inputCount;
changeNum.textContent = inputLeft;
}
inputText.addEventListener('input', changeIndicator)