// Shrink Navbar on Scroll
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    const logo = this.document.getElementById('logo');
    const header = this.document.querySelector('header');
    if (window.scrollY > 200) {
      navbar.classList.add('shrink');
      logo.style.position = 'static';
    } else {
      navbar.classList.remove('shrink');
      logo.style.position = 'absolute'

    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    const chatHeader = document.getElementById("chat-header");
    const chatBody = document.getElementById("chat-body");
    const chatToggle = document.getElementById("chat-toggle");
    const selectMenu = document.getElementById("chat-select");
    const sendButton = document.getElementById("send-btn");
    const responseArea = document.getElementById("chat-response");
  
    // Toggle chat widget open/close
    chatHeader.addEventListener("click", function () {
      if (chatBody.style.display === "none" || chatBody.style.display === "") {
        chatBody.style.display = "block";
        chatToggle.style.transform = "rotate(180deg)";
      } else {
        chatBody.style.display = "none";
        chatToggle.style.transform = "rotate(0deg)";
      }
    });
  
    // Predefined responses for business-related FAQs
    const responses = {
      services: "We offer web design, digital marketing, and e-learning solutions. Visit our <a href='/services'>Services</a> page for more details.",
      pricing: "You can find our pricing plans on our <a href='/pricing'>Pricing</a> page.",
      sales: "To request a quote, please visit our <a href='/quote'>Request a Quote</a> page.",
      support: "For customer support, check our <a href='/support'>Support</a> page or email us at support@example.com.",
      payment: "We accept credit/debit cards, PayPal, and bank transfers. Learn more on our <a href='/payment'>Payments</a> page.",
      refund: "Our refund policy is available at <a href='/refund-policy'>Refund Policy</a>.",
      location: "We are located in Zambia. Visit our <a href='/contact'>Contact</a> page for directions.",
      hours: "Our business hours are Monday - Friday: 9 AM - 6 PM, Saturday: 10 AM - 4 PM.",
      custom: "Yes! We offer custom solutions. Contact us via our <a href='/custom-services'>Custom Services</a> page.",
      unknown: "Sorry, I don't have information on that right now."
    };
  
    // Display response when "Ask" is clicked
    sendButton.addEventListener("click", function () {
      const selectedValue = selectMenu.value;
      if (selectedValue) {
        responseArea.innerHTML = responses[selectedValue] || "I'm not sure about that.";
      } else {
        responseArea.innerHTML = "Please select a question first.";
      }
    });
  });