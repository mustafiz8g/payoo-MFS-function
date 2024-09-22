
/*

document.getElementById('add-button').addEventListener('click', function(){
   RemoveHidden('add-money-show');
   AddHidden('cash-out-show');
   AddHidden('transaction-show');
});

document.getElementById('cash-button').addEventListener('click', function(){
    AddHidden('add-money-show');
    RemoveHidden('cash-out-show');
    AddHidden('transaction-show');

});

document.getElementById('transaction-button').addEventListener('click', function(){
  RemoveHidden('transaction-show');
  AddHidden('add-money-show');
  AddHidden('cash-out-show');
})

*/

document.getElementById('add-button').addEventListener('click' , function(){
    showSectionById('add-money-show')
})
document.getElementById('cash-button').addEventListener('click' , function(){
    showSectionById('cash-out-show')
})
document.getElementById('transaction-button').addEventListener('click' , function(){
    showSectionById('transaction-show')
})