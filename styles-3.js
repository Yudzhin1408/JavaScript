const btnAdd = document.querySelector('button[data-add]');
const resetBtn = document.querySelector('button[data-reset]');
const valueInput = document.querySelector('input[data-value]');
const outrotEl=document.querySelector('.js-output span')

let total = 0;

btnAdd.addEventListener('click', function() {
    console.log('click heheheheheh');

    const value = Number(valueInput.value);

    

    total += value;
    outrotEl.textContent = total;
    
    valueInput.value = '';
})

resetBtn.addEventListener('click', function () {
    outrotEl.textContent = 0;
})

