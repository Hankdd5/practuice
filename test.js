// Add your EmailJS user ID here
const EMAILJS_USER_ID = 'your_emailjs_user_id'; 
// Add your EmailJS service ID here
const EMAILJS_SERVICE_ID = 'your_email_service_id'; 
// Add your EmailJS template ID here
const EMAILJS_TEMPLATE_ID = 'your_template_id';

document.getElementById('userForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const state = document.getElementById('state').value;
    const time = new Date().toLocaleString();

    if (name && state) {
        // Prepare email content
        const templateParams = {
            name: name,
            state: state,
            time: time
        };

        emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_USER_ID)
            .then((response) => {
                alert('Your information has been submitted successfully!');
                document.getElementById('userForm').reset(); // Clear the form
            }, (error) => {
                alert('Oops! Something went wrong, please try again.');
                console.error('FAILED...', error);
            });
    }
});
