var toggleButton = document.getElementById('toggleSkillsButton');
var skillsList = document.getElementById('skillsList');
toggleButton.addEventListener('click', function () {
    if (skillsList.style.display === 'none') {
        skillsList.style.display = 'block';
        toggleButton.textContent = 'Click to Hide Skills';
    }
    else {
        skillsList.style.display = 'none';
        toggleButton.textContent = 'Click to Show Skills';
    }
});
