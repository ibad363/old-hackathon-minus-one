var ToggleButton = document.getElementById("toggleSkillButton");
var SkillsList = document.getElementById("skillsList");
ToggleButton.addEventListener("click", function () {
    if (SkillsList.style.display === "none") {
        SkillsList.style.display = "block";
        ToggleButton.textContent = 'Click to Hide Skills';
    }
    else {
        SkillsList.style.display = "none";
        ToggleButton.textContent = "Click to Show Skills";
    }
});
