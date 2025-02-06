document.addEventListener("DOMContentLoaded", function () {
    /*===== Sidebar Navigation =====*/ 
    const hamburger = document.getElementById("hamburger");
      const sidebar = document.getElementById("sidebar");
      const closeSidebar = document.getElementById("close-sidebar");
      const pyrusToggleNav = document.getElementById("pyrus-toggle");
      const chatWidget = document.getElementById("chat-widget");

      // Open sidebar when hamburger clicked
      hamburger.addEventListener("click", function(e) {
        e.stopPropagation();
        sidebar.classList.add("open");
      });
      // Close sidebar when close button clicked
      closeSidebar.addEventListener("click", function() {
        sidebar.classList.remove("open");
      });
      // Close sidebar if clicked outside of it
      document.addEventListener("click", function(e) {
        if (!sidebar.contains(e.target) && !hamburger.contains(e.target)) {
          sidebar.classList.remove("open");
        }
      });
      // Toggle chat widget when Pyrus.ai option is selected
      pyrusToggleNav.addEventListener("click", function(e) {
        e.preventDefault();
        // Close sidebar after selection
        sidebar.classList.remove("open");
        // Toggle chat widget visibility
        if (chatWidget.classList.contains("active")) {
          chatWidget.classList.remove("active");
        } else {
          chatWidget.classList.add("active");
        }
      });

      /* ===== Chat Widget Functionality ===== */
      const chatHeader = document.getElementById("chat-header");
      const chatBody = document.getElementById("chat-body");
      const chatToggle = document.getElementById("chat-toggle");
      const selectMenu = document.getElementById("chat-select");
      const sendButton = document.getElementById("send-btn");
      const clearButton = document.getElementById("clear-btn");
      const responseArea = document.getElementById("chat-response");

      // Toggle chat body open/close with smooth transition
      chatHeader.addEventListener("click", toggleChat);
      chatHeader.addEventListener("keydown", function(e) {
        if (e.key === "Enter" || e.key === " ") {
          toggleChat();
          e.preventDefault();
        }
      });
      
      function toggleChat() {
        if (chatBody.classList.contains("open")) {
          chatBody.classList.remove("open");
          chatHeader.setAttribute("aria-expanded", "false");
          chatToggle.style.transform = "rotate(0deg)";
        } else {
          chatBody.classList.add("open");
          chatHeader.setAttribute("aria-expanded", "true");
          chatToggle.style.transform = "rotate(180deg)";
        }
      }
      
      // Enable "Ask" button only when a valid option is selected.
      selectMenu.addEventListener("change", function () {
        sendButton.disabled = !selectMenu.value;
      });
      
      // Predefined responses for FAQs.
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
      
      // "Ask" button: append response with scrolling enabled.
      sendButton.addEventListener("click", function () {
        const selectedValue = selectMenu.value;
        if (selectedValue) {
          const newResponse = document.createElement("div");
          newResponse.className = "chat-response-item";
          newResponse.innerHTML = responses[selectedValue] || "I'm not sure about that.";
          responseArea.appendChild(newResponse);
          // Auto-scroll to the latest response
          responseArea.scrollTop = responseArea.scrollHeight;
        } else {
          const errorResponse = document.createElement("div");
          errorResponse.className = "chat-response-item";
          errorResponse.innerHTML = "Please select a question first.";
          responseArea.appendChild(errorResponse);
        }
      });
      
      // "Clear" button clears the conversation history.
      clearButton.addEventListener("click", function () {
        responseArea.innerHTML = "";
      });
    })
