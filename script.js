function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
    .then(function(response) {
      console.log('Email sent!', response.status, response.text);
      alert('Email sent successfully!');
    }, function(error) {
      console.error('Error sending email:', error);
      alert('Oops! Something went wrong.');
    });
});