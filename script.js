// START Slider

const reviews = [
  {
    user: "Zoltan Nemeth",
    job: "CEO of Pixler Lab",
    title: "User friendly & Customizable",
    text: "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud",
    img: "assets/images/user_photo.jpg",
  },
  {
    user: "Jassi Sheoran",
    job: "CEO of Sheoran",
    title: "Great User Experience",
    text: "Perfect strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud",
    img: "assets/images/user_photo_2.jpg",
  },
  {
    user: "Clever Programmer",
    job: "JavaScript Developer",
    title: "User friendly & Customizable",
    text: "You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the next level.",
    img: "assets/images/user_photo.jpg",
  },
  {
    user: "Jessa Doe",
    job: "CEO of Doe",
    title: "Inovative, excellent solution",
    text: "Strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud",
    img: "assets/images/user_photo_2.jpg",
  },
];

// Creating variables to get elements from our DOM.
const slide = document.getElementById("slide");
const userPhoto = slide.querySelector("#user_photo");
const myUser = slide.querySelector("#author");
const myJob = slide.querySelector("#job");
const myTitle = slide.querySelector("#slide_title");
const myText = slide.querySelector("#text");
const prev = slide.querySelector("#previous");
const next = slide.querySelector("#next");

let indexNum = 0;
const length = reviews.length;

function changeSlideContent(indexNum) {
  userPhoto.src = reviews[indexNum].img;
  myUser.innerHTML = reviews[indexNum].user;
  myJob.innerHTML = reviews[indexNum].job;
  myTitle.innerHTML = reviews[indexNum].title;
  myText.innerHTML = reviews[indexNum].text;
}

// Code for listening next button event
next.addEventListener("click", function () {
  indexNum++;
  if (indexNum > length - 1) {
    indexNum = 0;
    changeSlideContent(indexNum);
  } else {
    changeSlideContent(indexNum);
  }
});

// Code for listening previous button event
prev.addEventListener("click", function () {
  indexNum--;
  if (indexNum < 0) {
    indexNum = length - 1;
    changeSlideContent(indexNum);
  } else {
    changeSlideContent(indexNum);
  }
});

// END Slider

// START PriceCards

const pricingSection = document.getElementById("pricing");
const monthly = pricing.querySelector("#monthly");
const annually = pricing.querySelector("#annually");
const monthlyCard = pricing.querySelector("#monthly_card");
const annuallyCard = pricing.querySelector("#annually_card");
const trialLinkMonthly = pricing.querySelector("#monthly_card .hide");
const trialLinkAnnually = pricing.querySelector("#annually_card .trial_link");
const hideLink = "hide";
const fadeOutAnimation = "fade-out";
const ghostButtonStyle = "ghost_button";
const activeCardStyle = "active_card";
var monthlyButtonClicked = false;

function moveLink(trialLinkHide, trialLinkDisplay) {
  trialLinkHide.classList.add(fadeOutAnimation);

  setTimeout(function () {
    trialLinkHide.classList.add(hideLink);
  }, 200);

  trialLinkDisplay.classList.remove(hideLink, fadeOutAnimation);
}

function changeButtonStyle(activeButton, inactiveButton) {
  activeButton.classList.remove(ghostButtonStyle);
  inactiveButton.classList.add(ghostButtonStyle);
}

function changeCardStyle(activeCard, inactiveCard) {
  activeCard.classList.add(activeCardStyle);
  inactiveCard.classList.remove(activeCardStyle);
}

function selectCard(period) {
  if (period === monthly) {
    changeButtonStyle(monthly, annually);
    changeCardStyle(monthlyCard, annuallyCard);
    moveLink(trialLinkAnnually, trialLinkMonthly);
  } else {
    changeButtonStyle(annually, monthly);
    changeCardStyle(annuallyCard, monthlyCard);
    moveLink(trialLinkMonthly, trialLinkAnnually);
  }
}

monthly.addEventListener("click", function () {
  selectCard(monthly);
  monthlyButtonClicked = true;
});

annually.addEventListener("click", function () {
  selectCard(annually);
  monthlyButtonClicked = false;
});

//@media only screen and (max-width: 768px)

const mediaQuery = "only screen and (max-width: 768px)";
const mediaQueryList = window.matchMedia(mediaQuery);

function showMonthlyCard() {
  annuallyCard.style.display = "none";
  monthlyCard.style.display = "block";
}

function showAnnuallyCard() {
  annuallyCard.style.display = "block";
  monthlyCard.style.display = "none";
}

function switchToMonthly() {
  monthlyCard.style.display = "block";
  annuallyCard.style.display = "none";
  monthly.addEventListener("click", showMonthlyCard);
  annually.addEventListener("click", showAnnuallyCard);
}

function switchToAnnually() {
  monthlyCard.style.display = "none";
  annuallyCard.style.display = "block";
  monthly.addEventListener("click", showMonthlyCard);
  annually.addEventListener("click", showAnnuallyCard);
}

function showAllCards() {
  monthlyCard.style.display = "block";
  annuallyCard.style.display = "block";
  monthly.removeEventListener("click", showMonthlyCard);
  annually.removeEventListener("click", showAnnuallyCard);
}

function handleChange(event) {
  if (event.matches) {
    if (monthlyButtonClicked === false) {
      switchToAnnually();
    } else {
      switchToMonthly();
    }
  } else {
    showAllCards();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  mediaQueryList.addEventListener("change", handleChange);

  handleChange(mediaQueryList);
});

// END PriceCards

//Responsive Menu

const overlayMenu = document.getElementById("my_nav");
const headerNav = document.getElementById("header_nav");
const menuIcon = headerNav.querySelector(".menu_icon");
const linksToClose = overlayMenu.querySelectorAll(".close");

menuIcon.addEventListener("click", openNav);

linksToClose.forEach((link) => {
  link.addEventListener("click", closeNav);
});

function openNav() {
  document.getElementById("my_nav").style.height = "100%";
}

function closeNav() {
  document.getElementById("my_nav").style.height = "0";
}

//END Responsive Menu

//START Accordion animation

const detailsElements = document.querySelectorAll("details");

detailsElements.forEach((details) => {
  details.addEventListener("click", (e) => {
    if (details.hasAttribute("open")) {
      e.preventDefault();
      details.classList.add("closing");
    }
  });
});

detailsElements.forEach((details) => {
  details.addEventListener("animationend", (e) => {
    if (e.animationName === "close-details") {
      details.removeAttribute("open");
      details.classList.remove("closing");
    }
  });
});
