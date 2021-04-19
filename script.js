var users = [
    {
        name: 'Lucy',
        gender: 'F',
        hobby: 'pets',
        age: 20,
        avatar: 'gg1.jpg'
    },
    {
        name: 'Betty',
        gender: 'F',
        hobby: 'pets',
        age: 30,
        avatar: 'g4 (1).jpg'
    },
    {
        name: 'Ronald',
        gender: 'M',
        hobby: 'music',
        age: 27,
        avatar: 'bb2 (2).jpg'
    },
    {
        name: 'Christopher',
        gender: 'M',
        hobby: 'sports',
        age: 26,
        avatar: 'b7.jpg'
    },
    {
        name: 'Mildred',
        gender: 'F',
        hobby: 'reading',
        age: 27,
        avatar: 'g4 (2).jpg'
    },
    {
        name: 'Paul',
        gender: 'M',
        hobby: 'shopping',
        age: 29,
        avatar: 'jpg.png'
    },
    {
        name: 'Charlie',
        gender: 'M',
        hobby: 'pets',
        age: 28,
        avatar: 'bb2 (1).jpg'
    },
];

window.addEventListener('load', function () {

    var results = document.getElementById('results');

    function search() {

        //get hobby
        var hobbyField = document.getElementById('hobby');
        var hobby = hobbyField.value;

        //get gender
        var genderField = document.getElementById('gender');
        var s = genderField.selectedIndex;
        var gender = genderField.options[s].value;

        // get age range
        let minAge = document.getElementById("min-age");
        let maxAge = document.getElementById("max-age");

        let min = minAge.value;
        let max = maxAge.value;
        console.log(minAge.value, maxAge.value);

        var resultsHtml = '';
        var usersLength = users.length;

        for (var i = 0; i < usersLength; i++) {
            //check gender
            if (gender == 'A' || gender == users[i].gender) {
                //check hobby
                if (hobby == '' || hobby == users[i].hobby) {
                    if (min === '' || max === '' || (min <= users[i].age && max >= users[i].age)) {
                        resultsHtml += 
                        '<div class="person-row">\
                        <img src="images/' + users[i].avatar + '" />\
                        <div class="person-info">\
                        <div>' + users[i].name + '</div>\
                        <div>' + users[i].hobby + '</div>\
                        <div>' + users[i].age + '</div></div>\
                        <button>Add as friend</button></div>';
                    }

                }
            }
        }

        results.innerHTML = resultsHtml;
    }

    var searchBtn = document.getElementById('searchBtn');

    searchBtn.addEventListener('click', search);
});