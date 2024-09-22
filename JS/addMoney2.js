

document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    
    const addMoney = getInputFieldValueById ('input-add-money');
    const pinNumber = getInputFieldValueById ('input-pin-number');
    // wrong way to verify . do not try it at your serious website;

    if(isNaN(addMoney)){
        alert('Failed to add money');
        return;
    }
    if(pinNumber === 1234 ){
      const balance = getTextFieldValueById('account-balance');
     const newBalance = addMoney + balance;
     document.getElementById('account-balance').innerText = newBalance;
    // add to transaction history
    const p = document.createElement('p');
    p.innerText = ` Added : ${addMoney} Tk. Balance : ${newBalance};`
    document.getElementById('transaction-show').appendChild(p)
    }
    else{
        alert('failed to add the money')
    }
})