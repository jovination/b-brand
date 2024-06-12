document.addEventListener('DOMContentLoaded', function() {
    var currentYear = new Date().getFullYear();
    var yearTag = document.querySelector('.year_tag');
    yearTag.textContent = `©${currentYear}`;
});