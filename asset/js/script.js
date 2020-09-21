// "document.ready" makes sure that our JavaScript doesn't get run until the HTML document is finished loading.
$(document).ready(() => {

  // Initializing emailJS
  $("#contact-form").on("submit", function(event) {
      event.preventDefault();
      // generate the contact number value
      this.contact_number.value = Math.random() * 100000 | 0;
      emailjs.sendForm('contact_service', 'contact_form', this);
  });

  (function(){
    emailjs.init("user_D6Whn8ZWKEkuy23eNghGk");
  })();
});
