var movieThemeDiv = document.querySelector('#movieThemes')
var showsThemeDiv = document.querySelector('#showThemes')
var musicThemeDiv = document.querySelector('#musicThemes')

movieThemeDiv.addEventListener("click", function () {
    location.href = './Movies/movies.html';
})
showsThemeDiv.addEventListener("click", function () {
    location.href = './Shows/shows.html';
})
musicThemeDiv.addEventListener("click", function () {
    location.href = './Music/music.html';
})