document.getElementById('age-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var day = document.getElementById('day').value;
    var month = document.getElementById('month').value;
    var year = document.getElementById('year').value;

    var today = new Date();
    var birthDate = new Date(year, month - 1, day);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    document.getElementById('result').innerText = 'Your age is ' + age;
});