document.addEventListener('DOMContentLoaded', function () {
    var inputElement = document.getElementById('userId');
    var submitButton = document.querySelector('.ara-btn');

    inputElement.addEventListener('input', function () {
        var inputValue = inputElement.value.trim();
        if (inputValue.length === 12) {
            submitButton.style.backgroundColor = '#4A526E';
            submitButton.style.color = 'white';
        } else {
            submitButton.style.backgroundColor = '';
            submitButton.style.color = '';
        }
    });
});



