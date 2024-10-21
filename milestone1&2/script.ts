const ToggleButton = document.getElementById("toggleSkillButton") as HTMLButtonElement
const SkillsList = document.getElementById("skillsList") as HTMLElement

ToggleButton.addEventListener("click", ()=>{
    if(SkillsList.style.display === "none"){
        SkillsList.style.display = "block"
        ToggleButton.textContent = 'Click to Hide Skills'
    }else{
        SkillsList.style.display = "none"
        ToggleButton.textContent = "Click to Show Skills"
    }
})