// get reference to DOM elements
const form = document.getElementById("resumeForm") as HTMLFormElement;
const resumeDisplay = document.getElementById("resume-display") as HTMLDivElement;
const shareableLinkContainer = document.getElementById('shareable-link-container') as HTMLDivElement;
const shareableLinkElement = document.getElementById('shareable-link') as HTMLAnchorElement;
const downloadPdfButton = document.getElementById('download-pdf') as HTMLButtonElement;

// handle form submission
form.addEventListener("submit", (e) => {
    e.preventDefault();

    // collect form input values
    const username = (document.getElementById("username") as HTMLInputElement).value
    const name = (document.getElementById("name") as HTMLInputElement).value
    const email = (document.getElementById("email") as HTMLInputElement).value
    const phoneNumber = (document.getElementById("phone-number") as HTMLInputElement).value
    const education = (document.getElementById("education") as HTMLTextAreaElement).value
    let experience = (document.getElementById("experience") as HTMLTextAreaElement).value
    const skills = (document.getElementById("skills") as HTMLTextAreaElement).value


    if (experience) {
        experience = (document.getElementById("experience") as HTMLTextAreaElement).value
    } else {
        experience = "No Experience"
    }

    // Save data to localStorage
    const resumeData = {
        name,
        email,
        phoneNumber,
        education,
        experience,
        skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData));

    // Generate and display resume content
    const resumeContent = `
    <div id="heading2">
        <h1>Shareable Resume</h1>
    </div>
    <div class="resume-section">
        <h1>Name</h1>
        <p contenteditable="true">${name}</p>
    </div>

    <div class="resume-section">
        <h1>Email</h1>
        <p contenteditable="true"   >${email}</p>
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

    // Generate a shareable URL with the username only
    const shareableURL = `${window.location.origin}?username=${encodeURIComponent(username)}`;

    // Display the shareable link
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;

    // display the resume content
    resumeDisplay.innerHTML = resumeContent;
    resumeDisplay.style.display = "block";

    // Hide the form after submission
    form.style.display = "none";
});

// Check for shared resume URL on page load
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');

    if (username) {
        const savedResumeData = localStorage.getItem(username);

        if (savedResumeData) {
            const resumeData = JSON.parse(savedResumeData);
            
            // Form ko hide karein
            form.style.display = "none";
            
            // Resume content generate karein
            const resumeContent = `
                <div id="heading2">
                    <h1>Shareable Resume</h1>
                </div>
                <div class="resume-section">
                    <h1>Name</h1>
                    <p contenteditable="true">${resumeData.name}</p>
                </div>
                <div class="resume-section">
                    <h1>Email</h1>
                    <p contenteditable="true">${resumeData.email}</p>
                </div>
                <div class="resume-section">
                    <h1>Phone Number</h1>
                    <p contenteditable="true">${resumeData.phoneNumber}</p>
                </div>
                <div class="resume-section">
                    <h1>Education</h1>
                    <div class="list" contenteditable="true">${resumeData.education.split("\n").map(edu => `<li>${edu}</li>`).join("")}</div>
                </div>
                <div class="resume-section">
                    <h1>Experience</h1>
                    <div class="list" contenteditable="true">${resumeData.experience.split("\n").map(exp => `<li>${exp}</li>`).join("")}</div>
                </div>
                <div class="resume-section">
                    <h1>Skills</h1>
                    <div class="list" contenteditable="true">${resumeData.skills.split("\n").map(skill => `<li>${skill}</li>`).join("")}</div>
                </div>
            `;
            
            // Resume display karein
            resumeDisplay.innerHTML = resumeContent;
            resumeDisplay.style.display = "block";
            
            // Download button show karein
            shareableLinkContainer.style.display = 'block';
        }
    }
});

// Handle PDF download functionality
downloadPdfButton.addEventListener('click', () => {
    // Hide shareable link before printing
    shareableLinkContainer.style.display = 'none';
    
    window.print();
    
    // Show shareable link after printing
    shareableLinkContainer.style.display = 'block';
});