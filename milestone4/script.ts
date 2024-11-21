// get reference
const form = document.getElementById("resumeForm") as HTMLFormElement;
const resumeDisplay = document.getElementById("resume-display") as HTMLDivElement;

// handle form submission
form.addEventListener("submit", (e) =>{
    e.preventDefault();

    // collect input values
    const name = (document.getElementById("name") as HTMLInputElement).value
    const email = (document.getElementById("email") as HTMLInputElement).value
    const phoneNumber = (document.getElementById("phone-number") as HTMLInputElement).value
    const education = (document.getElementById("education") as HTMLTextAreaElement).value
    let experience = (document.getElementById("experience") as HTMLTextAreaElement).value
    const skills = (document.getElementById("skills") as HTMLTextAreaElement).value


    if (experience){
        experience = (document.getElementById("experience") as HTMLTextAreaElement).value
    }else{
        experience = "No Experience"
    }

    // Generate the resume content dynamically
    const resumeContent = `
    <div id="heading2">
        <h1>Editable Resume</h1>
    </div>
    <div class="resume-section">
        <h1>Name</h1>
        <p contenteditable="true">${name}</p>
    </div>

    <div class="resume-section">
        <h1>Email</h1>
        <p contenteditable="true">${email}</p>
    </div>

    <div class="resume-section">
        <h1>Phone Number</h1>
        <p contenteditable="true">${phoneNumber}</p>
    </div>
    
    <div class="resume-section">
        <h1>Education</h1>
        <div class="list" contenteditable="true">${education.split("\n").map(edu => `<li>${edu}</li>`).join("")}</div>
    </div>
    
    <div class="resume-section">
        <h1>Experience</h1>
        <div class="list" contenteditable="true">${experience.split("\n").map(exp => `<li>${exp}</li>`).join("")}</div>
    </div>
    
    <div class="resume-section">
        <h1>Skills</h1>
        <div class="list" contenteditable="true">${skills.split("\n").map(skill => `<li>${skill}</li>`).join("")}</div>
    </div>
    `

    // display the resume content
    resumeDisplay.innerHTML = resumeContent;
    resumeDisplay.style.display = "block";

    // REMOVE the form
    form.style.display = "none";
})
