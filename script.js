document.getElementById('resumeForm').addEventListener('submit', generateResume);

function generateResume(event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve form values
    let name = document.getElementById('fname').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let education = document.getElementById('education').value.split('\n').join('<br>');
    let skills = document.getElementById('skills').value.split('\n').join('<br>');
    let experience = document.getElementById('experiance').value.split('\n').join('<br>');
    let profilePicture = document.getElementById('profile').files[0];

    // Display name, email, and phone in the resume
    document.getElementById('name').innerText = name;
    document.getElementById('contactBox').innerHTML = `Email: ${email} | Phone: ${phone}`;
    document.getElementById('eduList').innerHTML = education;
    document.getElementById('skillsList').innerHTML = skills;
    document.getElementById('expList').innerHTML = experience;

    // Display profile picture if uploaded
    if (profilePicture) {
        let reader = new FileReader();
        reader.onload = function (e) {
            let imgDiv = document.getElementById('imgdiv');
            imgDiv.innerHTML = `<img src="${e.target.result}" alt="Profile Picture">`;
        };
        reader.readAsDataURL(profilePicture);
    }

    // Hide the heading and the form, then show the resume output
    document.getElementById('dynamicHeading').style.display = 'none'; // Hide the heading
    document.querySelector('form').style.display = 'none'; // Hide the form
    document.getElementById('resumePut').style.display = 'flex'; // Show the resume output
}

let btn1 = document.getElementById('btn01');
let btn2 = document.getElementById('btn02');
let btn3 = document.getElementById('btn03');

let eduList = document.getElementById('eduList'); // Fixed: Added document. prefix
let skillsList = document.getElementById('skillsList'); // Fixed: Added document. prefix
let expList = document.getElementById('expList'); // Fixed: Added document. prefix

let conditionEdu = 0;
let conditionSkill = 0;
let conditionExp = 0;

btn1.addEventListener('click', function() {
    if (conditionEdu == 0) {
        conditionEdu++;
        eduList.style.display = 'none';
        btn1.innerHTML = 'Show Education';
    } else {
        conditionEdu--;
        eduList.style.display = 'block';
        btn1.innerHTML = 'Hide Education';
    }
});

btn2.addEventListener('click', function() {
    if (conditionSkill == 0) {
        conditionSkill++;
        skillsList.style.display = 'none'; // Fixed: Changed to skillsList
        btn2.innerHTML = 'Show Skills';
    } else {
        conditionSkill--;
        skillsList.style.display = 'block'; // Fixed: Changed to skillsList
        btn2.innerHTML = 'Hide Skills';
    }
});

btn3.addEventListener('click', function() {
    if (conditionExp == 0) {
        conditionExp++;
        expList.style.display = 'none';
        btn3.innerHTML = 'Show Experience'; // Fixed spelling
    } else {
        conditionExp--;
        expList.style.display = 'block';
        btn3.innerHTML = 'Hide Experience'; // Fixed spelling
    }
});
