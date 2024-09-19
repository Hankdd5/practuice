document.getElementById("conconreview").style.top = '-100%'





function addReview() {
    const revCon = document.createElement('div');
    revCon.className = 'revCon';

    const profileCon = document.createElement('div');
    profileCon.className = 'profilecon';

    const imgCircle = document.createElement('div');
    imgCircle.className = 'imgcircle';
    const profileImg = document.createElement('img');
    profileImg.src = 'image/profile.png';
    profileImg.alt = '#';
    imgCircle.appendChild(profileImg);

    const nameHeading = document.createElement('h4');
    nameHeading.textContent = 'Name';

    profileCon.appendChild(imgCircle);
    profileCon.appendChild(nameHeading);

    const starBox = document.createElement('div');
    starBox.className = 'starBox';
    for (let i = 0; i < 5; i++) {
        const starImg = document.createElement('img');
        starImg.src = 'image/star.png';
        starImg.alt = 'star';
        starBox.appendChild(starImg);
    }

    const locationDiv = document.createElement('div');
    locationDiv.className = 'location';
    const locationHeading = document.createElement('h5');
    locationHeading.textContent = 'Date, Locatiohghqgwgwgwn and time';
    locationDiv.appendChild(locationHeading);

    const reviewDiv = document.createElement('div');
    reviewDiv.className = 'reviews';
    const reviewText = document.createElement('p');
    reviewText.textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, quidem.';
    reviewDiv.appendChild(reviewText);

    revCon.appendChild(profileCon);
    revCon.appendChild(starBox);
    revCon.appendChild(locationDiv);
    revCon.appendChild(reviewDiv);

    document.getElementById('conconreview').appendChild(revCon);
}

// addReview();

console.log("help")


// Function to count and log the number of divs with the class 'revCon'
function countRevConDivs() {
    // Get the container element by its ID
    const container = document.getElementById('conconreview');
    
    // Get all div elements inside the container with the class 'revCon'
    const revConDivs = container.getElementsByClassName('revCon');
    
    // Log the number of divs found
    console.log('Number of divs with class "revCon":', revConDivs.length);
    number = document.getElementById("NumberRev")
    number.innerHTML = `Total Number of Reviews:  ${revConDivs.length}`
}

// Call the function to log the count
countRevConDivs();

