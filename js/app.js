const url = 'http://www.omdbapi.com/?apikey=b29f04f&t='
// ALL BUTTON FUNCTIONALITY HERE:


const $getExBtn = $('#getExBtn')
function getYear(event) {
    event.preventDefault();
    $.ajax(url + "").then(function(year){
 // console.log(year.'') will get any specific data from user input
console.log(year.Title);
    }
    )} 
    $getExBtn.on('click', getYear)


// line 9: to get data year."selection" 

// create textbox for users data input: DONE!
// Allow textbox input to push into (url + '')
// pull value from textbox and assign to var
// place var into url reference line 8 ''

// idea movie versus movie 
// use number game conditional statements as a way for users to guess the high ranking of the movies