// handle checkbox deleteUser
document.getElementById('DeleteAccountconfirmCheckbox').addEventListener('change', function(){
    var deleteButton = document.getElementById('DeleteAccountButton');

    deleteButton.disabled = !this.checked
})

