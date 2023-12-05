// document.getElementById('confirmCheckbox').addEventListener('change', function () {
//     var deleteButton = document.getElementById('deleteButton');
//     deleteButton.disabled = !this.checked;
// })

document.getElementById('DeleteAccountconfirmCheckbox').addEventListener('change', function(){
    var deleteButton = document.getElementById('DeleteAccountButton');

    deleteButton.disabled = !this.checked
})