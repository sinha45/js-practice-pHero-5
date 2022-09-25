document.getElementById('btn-more').addEventListener('click', function () {
    console.log('event trigger');
});


// document.getElementById('text-field').addEventListener('focus', function () {
//     console.log('event is triggerd');
// })
// document.getElementById('text-field').addEventListener('blur', function () {
//     console.log('event is triggerd');
// })
// document.getElementById('text-field').addEventListener('keydown', function (event) {
//     console.log(event.target.value);
// })
// document.getElementById('text-field').addEventListener('keypress', function (event) {
//     console.log(event.target.value);
// })
document.getElementById('text-field').addEventListener('keyup', function (event) {
    console.log(event.target.value);
})