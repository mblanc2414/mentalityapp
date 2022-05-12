// ALL API
// const  URL = [
//     $.ajax({
//         URL: 'https://api.unsplash.com/get/photo/random?tV-DobzGZGDVroe9ya7queS0o7XPqV2L4FsdYqsAdLE'
//     }).then(
        
//     )
// ]
// ALL BUTTON FUNCTIONALITY HERE:
const $getExBtn = $('#getExBtn')
$getExBtn.on('click', function() {
    url:'https://api.unsplash.com/get/photo/random?tV-DobzGZGDVroe9ya7queS0o7XPqV2L4FsdYqsAdLE'
}).then(
    (data) => {

    })

// const getExBtn = () => {
// // Input ajax API data here
// // console.log(apiData)

// }
// EVENT LISTENTER:









// const $exButton = $('#exButton')

// const URL = (
//     $.ajax({
//         url:'https://api.unsplash.com/photos/random/?tV-DobzGZGDVroe9ya7queS0o7XPqV2L4FsdYqsAdLE'
//       }).then(
//         (data) => {
//          console.log();
//         },
//         (error) => {
//          console.log('bad request', error);
//         }
//       );
//     }

//     $exButton.on('click', image);

// console.log($exButton);

// const quote = () => {
// $.ajax({
//     url:'https://quotes15.p.rapidapi.com/quotes/random/'
//   }).then(
//     (data) => {
//      console.log(quote);
//     },
//     (error) => {
//      console.log('bad request', error);
//     }
//   );
// }
// $exButton.on('click', quote);
// unsplash:
// key
// tV-DobzGZGDVroe9ya7queS0o7XPqV2L4FsdYqsAdLE
//   Link: <https://api.unsplash.com/photos?page=1>; rel="first", <https://api.unsplash.com/photos?page=1>; rel="prev", <https://api.unsplash.com/photos?page=346>; rel="last", <https://api.unsplash.com/photos?page=3>; rel="next"








// const quotes = {
//     "async": true;
//     "crossDomain": true;
//     "url": "https://quotes15.p.rapidapi.com/quotes/random/",

// }
// const settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://quotes15.p.rapidapi.com/quotes/random/",
// 	"method": "GET",
// 	"headers": {
// 		"X-RapidAPI-Host": "quotes15.p.rapidapi.com",
// 		"X-RapidAPI-Key": "8234675bc5msha40e361e9db055fp1d091cjsn94a1f0d159c1"
// 	}
// };

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });