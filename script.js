document.getElementById('resumeForm').addEventListener('submit', generateResume);

function generateResume(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Retrieve form values
    let name = document.getElementById('fname').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let profilePicture = document.getElementById('profile').files[0];
    let education = document.getElementById('education').value.split('\n');
    let skills = document.getElementById('skills').value.split('\n');
    let experience = document.getElementById('experiance').value.split('\n');
    
    // Hide the dynamic heading if needed (you may want to define dynamicHeading in HTML)
    let dynamicHeading = document.getElementById('dynamicHeading');
    if (dynamicHeading) {
        dynamicHeading.style.display = 'none';
    }

    // Display profile picture if uploaded
    if (profilePicture) {
        let reader = new FileReader();
        reader.onload = function (e) {
            let imgDiv = document.getElementById('imgdiv');
            imgDiv.innerHTML = `<img src="${e.target.result}" alt="Profile Picture">`;
        };
        reader.readAsDataURL(profilePicture);
    }

    // Display name, email, and phone in the resume
    document.getElementById('name').innerText = name;
    document.getElementById('contactBox').innerHTML = `Email: ${email} | Phone: ${phone}`;

    // Populate education, skills, and experience as divs
    let eduList = document.getElementById('eduList');
    eduList.innerHTML = education.map(item => `<div class="eduDiv"><p>${item}</p></div>`).join('');
    
    let skillsList = document.getElementById('skillsList');
    skillsList.innerHTML = skills.map(item => `<div class="skillDiv"><p>${item}</p></div>`).join('');

    let expList = document.getElementById('expList');
    expList.innerHTML = experience.map(item => `<div class="expDivs"><p>${item}</p></div>`).join('');

    // Hide the form and show the resume output
    document.querySelector('form').style.display = 'none';
    document.getElementById('resumePut').style.display = 'flex';

    // Show the Hide/Show buttons
    document.querySelectorAll('.buttons').forEach(button => button.style.display = 'inline-block');

    // Add toggle functionality for the Hide/Show buttons
    document.getElementById('btn01').addEventListener('click', function () {
        toggleSection('eduList', this, 'Education');
    });
    document.getElementById('btn02').addEventListener('click', function () {
        toggleSection('skillsList', this, 'Skills');
    });
    document.getElementById('btn03').addEventListener('click', function () {
        toggleSection('expList', this, 'Experience');
    });
}

// Helper function to toggle section visibility
function toggleSection(sectionId, button, label) {
    let section = document.getElementById(sectionId);
    if (section.style.display === 'none' || section.style.display === '') {
        section.style.display = 'block';
        button.innerText = `Hide ${label}`;
    } else {
        section.style.display = 'none';
        button.innerText = `Show ${label}`;
    }
}
