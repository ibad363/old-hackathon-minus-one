// get reference
var form = document.getElementById("resumeForm");
var resumeDisplay = document.getElementById("resume-display");
// handle form submission
form.addEventListener("submit", function (e) {
    e.preventDefault();
    // collect input values
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
    // Generate the resume content dynamically
    var resumeContent = "\n    <div class=\"resume-section\">\n        <h1>Name</h1>\n        <p>".concat(name, "</p>\n    </div>\n\n    <div class=\"resume-section\">\n        <h1>Email</h1>\n        <p>").concat(email, "</p>\n    </div>\n\n    <div class=\"resume-section\">\n        <h1>Phone Number</h1>\n        <p>").concat(phoneNumber, "</p>\n    </div>\n    \n    <div class=\"resume-section\">\n        <h1>Education</h1>\n        <div class=\"list\">").concat(education.split("\n").map(function (edu) { return "<li>".concat(edu, "</li>"); }).join(""), "</div>\n    </div>\n    \n    <div class=\"resume-section\">\n        <h1>Experience</h1>\n        <div class=\"list\">").concat(experience.split("\n").map(function (exp) { return "<li>".concat(exp, "</li>"); }).join(""), "</div>\n    </div>\n    \n    <div class=\"resume-section\">\n        <h1>Skills</h1>\n        <div class=\"list\">").concat(skills.split("\n").map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(""), "</div>\n    </div>\n    ");
    // display the resume content
    resumeDisplay.innerHTML = resumeContent;
    resumeDisplay.style.display = "block";
    // REMOVE the form
    form.style.display = "none";
});
