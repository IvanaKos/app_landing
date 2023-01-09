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
const trialLinkMonthly = pricing.querySelector("#monthly_card .trial_link");
const trialLinkAnnually = pricing.querySelector("#annually_card .trial_link");

function moveLink(trialLinkHide, trialLinkDisplay) {
  trialLinkHide.style.display = "none";
  trialLinkDisplay.style.display = "block";
}

function changeButtonStyle(activeButton, inactiveButton) {
  activeButton.classList.remove("ghost_button");
  inactiveButton.classList.add("ghost_button");
}

function changeCardStyle(activeCard, inactiveCard) {
  activeCard.classList.add("active_card");
  inactiveCard.classList.remove("active_card");
}

trialLinkMonthly.style.display = "none";

monthly.addEventListener("click", function () {
  changeButtonStyle(monthly, annually);
  changeCardStyle(monthlyCard, annuallyCard);
  moveLink(trialLinkAnnually, trialLinkMonthly);
});

annually.addEventListener("click", function () {
  changeButtonStyle(annually, monthly);
  changeCardStyle(annuallyCard, monthlyCard);
  moveLink(trialLinkMonthly, trialLinkAnnually);
});

// END PriceCards
