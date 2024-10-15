
const toggleButton = document.getElementById('toggleSkillsButton') as HTMLButtonElement;
const skillsList = document.getElementById('skillsList') as HTMLElement;

toggleButton.addEventListener('click', () => {
  if (skillsList.style.display === 'none') {
    skillsList.style.display = 'block';
    toggleButton.textContent = 'Click to Hide Skills';
  } else {
    skillsList.style.display = 'none';
    toggleButton.textContent = 'Click to Show Skills';
  }
});