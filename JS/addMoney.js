/**
 * How to get a number from a input field
 * 1. create a variable
 * 2. reght side docujment. getid(id
 * .value
 * 4. parsfloat)
 */

// console.log('add money loaded')
document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    console.log('add money button clicked')
    // const addMoneyNumber = parseFloat(document.getElementById('input-add-money').value);
    // console.log(addMoneyNumber)
   
    // getInputFieldValueById();
    // const addMoney = getInputFieldValueById();
    // console.log('add money value',addMoney)

    const addMoney = getInputFieldValueById('input-add-money');
    const pinNumber = getInputFieldValueById('input-pin-number')
    console.log('add money with parameter' , addMoney,pinNumber)
})