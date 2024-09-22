
function getInputFieldValueById(id){
    return  parseFloat(document.getElementById(id).value);
}

function getTextFieldValueById(id){
    return parseFloat(document.getElementById(id).innerText);
}

/*

function RemoveHidden(id){
    const removeHidden = document.getElementById(id);
    return removeHidden.classList.remove('hidden');
}

function AddHidden(id){
    const addHidden = document.getElementById(id)
    return addHidden.classList.add('hidden')
}

*/

function showSectionById(id){
    document.getElementById('add-money-show').classList.add('hidden');
    document.getElementById('cash-out-show').classList.add('hidden')
    document.getElementById('transaction-show').classList.add('hidden')

    //show the section with  provide id as parameter

    document.getElementById(id).classList.remove('hidden');
}