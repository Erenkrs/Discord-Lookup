document.addEventListener('DOMContentLoaded', function () {
    var createdDate = '<%= repositories.created_at %>'; 
    var accountAge = calculateAccountAge(createdDate);

    document.getElementById('created_at').innerText = '' + formatDate(createdDate);
    document.getElementById('account_age').innerText = '' + accountAge + '';
});

function formatDate(dateString) {
    var options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    var formattedDate = new Date(dateString).toLocaleDateString('tr-TR', options);
    return formattedDate;
}

function calculateAccountAge(createdDate) {
    var currentDate = new Date();
    var diffInMilliseconds = currentDate - new Date(createdDate);
    var diffInDays = Math.floor(diffInMilliseconds / (24 * 60 * 60 * 1000));

    if (diffInDays >= 365) {
        var diffInYears = Math.floor(diffInDays / 365);
        return diffInYears + 'Y';
    } else {
        return diffInDays + 'G';
    }
}