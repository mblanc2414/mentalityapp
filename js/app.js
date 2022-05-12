
const url = 'http://www.omdbapi.com/?apikey=b29f04f&t='
// ALL BUTTON FUNCTIONALITY HERE:


const $getExBtn = $('#getExBtn')

function getYear(event) {
    let userEntry = document.querySelector('.textInput').value
    let userEntry2 = document.querySelector('.textInput2').value

console.log(userEntry);
    event.preventDefault();
    $.ajax(url + userEntry).then(function(year){
$('.movie1').html(`<img src = '${year.Poster}'/>`)
let rating1='';
rating1.text = year.Ratings[1].Value 
console.log(rating1)
$(rating1).append($('.rating'))
console.log($('.rating'))
})

$.ajax(url + userEntry2).then(function(year2){
    $('.movie2').html(`<img src = '${year2.Poster}'/>`)
    let rating2 = year2.Ratings[1].Value
    $(rating2).append($('.rat2'))

    }) 
}
function compare1 () {
    if ($('.rating') > $('.rat2')){
        alert("You're correct!!")
    }else{
        alert("You're incorrect!")
    }}
    console.log($('.rating'))
    function compare2 () {
        if ($('.rat2')> $('.rating')){
            alert("You're correct!!")
        }else{
            alert("You're incorrect!")
        }}

    $getExBtn.on('click', getYear)
$('.first-option').on('click', compare1)
$('.second-option').on('click', compare2)


// line 9: to get data year."selection" 

// create textbox for users data input: DONE!
// Allow textbox input to push into (url + '')
// pull value from textbox and assign to var
// place var into url reference line 8 ''

// idea movie versus movie 
// use number game conditional statements as a way for users to guess the high ranking of the movies