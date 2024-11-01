// get reference to DOM elements
var form = document.getElementById("resumeForm");
var resumeDisplay = document.getElementById("resume-display");
var shareableLinkContainer = document.getElementById('shareable-link-container');
var shareableLinkElement = document.getElementById('shareable-link');
var downloadPdfButton = document.getElementById('download-pdf');
// handle form submission
form.addEventListener("submit", function (e) {
    e.preventDefault();
    // collect form input values
    var username = document.getElementById("username").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phone-number").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    if (experience) {
        experience = document.getElementById("experience").value;
    }
    else {
        experience = "No Experience";
    }
    // Save data to localStorage
    var resumeData = {
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        education: education,
        experience: experience,
        skills: skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData));
    // Generate and display resume content
    var resumeContent = "\n    <div id=\"heading2\">\n        <h1>Shareable Resume</h1>\n    </div>\n    <div class=\"resume-section\">\n        <h1>Name</h1>\n        <p contenteditable=\"true\">".concat(name, "</p>\n    </div>\n\n    <div class=\"resume-section\">\n        <h1>Email</h1>\n        <p contenteditable=\"true\"   >").concat(email, "</p>\n    </div>\n\n    <div class=\"resume-section\">\n        <h1>Phone Number</h1>\n        <p contenteditable=\"true\">").concat(phoneNumber, "</p>\n    </div>\n    \n    <div class=\"resume-section\">\n        <h1>Education</h1>\n        <div class=\"list\" contenteditable=\"true\">").concat(education.split("\n").map(function (edu) { return "<li>".concat(edu, "</li>"); }).join(""), "</div>\n    </div>\n    \n    <div class=\"resume-section\">\n        <h1>Experience</h1>\n        <div class=\"list\" contenteditable=\"true\">").concat(experience.split("\n").map(function (exp) { return "<li>".concat(exp, "</li>"); }).join(""), "</div>\n    </div>\n    \n    <div class=\"resume-section\">\n        <h1>Skills</h1>\n        <div class=\"list\" contenteditable=\"true\">").concat(skills.split("\n").map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(""), "</div>\n    </div>\n    ");
    // Generate a shareable URL with the username only
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
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
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            // Form ko hide karein
            form.style.display = "none";
            // Resume content generate karein
            var resumeContent = "\n                <div id=\"heading2\">\n                    <h1>Shareable Resume</h1>\n                </div>\n                <div class=\"resume-section\">\n                    <h1>Name</h1>\n                    <p contenteditable=\"true\">".concat(resumeData.name, "</p>\n                </div>\n                <div class=\"resume-section\">\n                    <h1>Email</h1>\n                    <p contenteditable=\"true\">").concat(resumeData.email, "</p>\n                </div>\n                <div class=\"resume-section\">\n                    <h1>Phone Number</h1>\n                    <p contenteditable=\"true\">").concat(resumeData.phoneNumber, "</p>\n                </div>\n                <div class=\"resume-section\">\n                    <h1>Education</h1>\n                    <div class=\"list\" contenteditable=\"true\">").concat(resumeData.education.split("\n").map(function (edu) { return "<li>".concat(edu, "</li>"); }).join(""), "</div>\n                </div>\n                <div class=\"resume-section\">\n                    <h1>Experience</h1>\n                    <div class=\"list\" contenteditable=\"true\">").concat(resumeData.experience.split("\n").map(function (exp) { return "<li>".concat(exp, "</li>"); }).join(""), "</div>\n                </div>\n                <div class=\"resume-section\">\n                    <h1>Skills</h1>\n                    <div class=\"list\" contenteditable=\"true\">").concat(resumeData.skills.split("\n").map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(""), "</div>\n                </div>\n            ");
            // Resume display karein
            resumeDisplay.innerHTML = resumeContent;
            resumeDisplay.style.display = "block";
            // Download button show karein
            shareableLinkContainer.style.display = 'block';
        }
    }
});
// Handle PDF download functionality
downloadPdfButton.addEventListener('click', function () {
    // Hide shareable link before printing
    shareableLinkContainer.style.display = 'none';
    window.print();
    // Show shareable link after printing
    shareableLinkContainer.style.display = 'block';
});
