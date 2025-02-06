const bars = document.getElementById("bars")
const nav = document.getElementById("nav")
const items = document.querySelector("#items")
const card = document.getElementById("serviceCard")

document.getElementById('current_date').innerText ='©'+new Date().getFullYear();

const services = [
    {
        id: "01",
        title: "PERSONAL LOANS",
        description: "Take control of your finances, our personal loan services are designed to help you meet your financial goals, whether you're consolidating debt, covering unexpected expenses, or planning a special purchase. With flexible repayment options, fast approvals, and competitive rates, we make borrowing simple and stress-free. We are here to provide personalized support, ensuring you get the best solution for your needs. Get the financial freedom you deserve because your dreams shouldn’t wait!",
        foot: "0973-002-312"
    }, {
        id: "02",
        title: "BUSINESS LOANS",
        description: "Fuel your business growth with a Loan! Our business loan services provide the capital you need to expand, invest, or streamline operations. With flexible terms, competitive interest rates, and quick approvals, we tailor financing solutions to meet your unique business needs. Whether you’re a startup or a growing enterprise, our expertise will guide you through the process, helping you secure the funds that drive success. Get the financial boost your business deserves because growth starts with the right support!",
        foot: "0973-002-312"
    }, {
        id: "03",
        title: "HOME LOANS",
        description: "Unlock the door to your dream home with one click. Our expertise make home ownership easier with personalized home loan solutions tailored to your needs. Whether you're a first-time buyer or looking to refinance, we offer competitive rates and flexible terms to suit your financial goals. Benefit from a seamless process, fast approvals, and professional guidance every step of the way. Let us help you get the keys to your future because your dream home shouldn’t wait!",

        foot: "0973-002-312"
    },
]

var clicked = true;
bars.addEventListener("click", () => {
    if (clicked) {
        bars.innerText = "×"
        nav.style.height = "120px";
        nav.style.padding = "1rem";
        clicked = false
    } else {
        bars.innerText = "≡"
        nav.style.height = "0";
        nav.style.padding = "0";
        clicked = true;
    }
})
services.forEach((service) => {
    const div = document.createElement("div")
    div.setAttribute("class", "serviceCard");
    div.innerHTML = `
    <div class="head">
        <span class="num">${service.id}</span>
        <p class="title">${service.title}</p>
    </div>
    <div class="body">
        <p>${service.description}</p>
    </div>`;

    // <div class="foot">
    //     <span>Call: 0977-675-885</span>
    // </div>`;
    items.appendChild(div)
})