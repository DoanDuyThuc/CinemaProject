//handle vertical menu setting Profile
var isInitialized = false;
document.getElementById('HandleVerticalSettingProfile').addEventListener('click', function(){
    // Đảo ngược trạng thái
    isInitialized = !isInitialized;
    var dependentElement = document.querySelector('.InfoManagerLeft-item-dependent');
    var iconUpDown = document.getElementById('IconUpDown');
    if (isInitialized && iconUpDown.classList.contains("fa-caret-up")) {
        dependentElement.classList.add('show');
        iconUpDown.classList.remove('fa-caret-up');
        iconUpDown.classList.add('fa-caret-down');

    } else {
        dependentElement.classList.remove('show');
        iconUpDown.classList.remove('fa-caret-down');
        iconUpDown.classList.add('fa-caret-up');
        
    }

})