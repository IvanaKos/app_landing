// START Slider

const reviews = [
  {
    user: "Zoltan Nemeth",
    job: "CEO of Pixler Lab",
    title: "User friendly & Customizable",
    text: "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud",
    img: "assets/images/user-photo.jpg",
    stars: "",
  },
  {
    user: "Jassi Sheoran",
    job: "CEO of Sheoran",
    title: "Great User Experience",
    text: "Perfect strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud",
    img: "assets/images/user-photo2.jpg",
    stars: "",
  },
  {
    user: "Clever Programmer",
    job: "JavaScript Developer",
    title: "User friendly & Customizable",
    text: "You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the next level.",
    img: "assets/images/user-photo.jpg",
    stars: "",
  },
  {
    user: "Jessa Doe",
    job: "CEO of Doe",
    title: "Inovative, excellent solution",
    text: "Strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud",
    img: "assets/images/user-photo2.jpg",
    stars: "",
  },
];

// Creating variables to get elements from our DOM.
const userPhoto = document.getElementById("user_photo");
const myUser = document.getElementById("author");
const myJob = document.getElementById("job");
const myTitle = document.querySelector("div.slide > h3");
const myText = document.getElementById("text");
const prev = document.getElementById("previous");
const next = document.getElementById("next");

let indexNum = 0;
let length = reviews.length;

// Code for listening next button event
next.addEventListener("click", function () {
  this.classList.add("active_arrow_right");
  prev.classList.remove("active_arrow_left");
  indexNum++;
  if (indexNum > length - 1) {
    indexNum = 0;
    userPhoto.src = reviews[indexNum].img;
    myUser.innerHTML = reviews[indexNum].user;
    myJob.innerHTML = reviews[indexNum].job;
    myTitle.innerHTML = reviews[indexNum].title;
    myText.innerHTML = reviews[indexNum].text;
  } else {
    userPhoto.src = reviews[indexNum].img;
    myUser.innerHTML = reviews[indexNum].user;
    myJob.innerHTML = reviews[indexNum].job;
    myTitle.innerHTML = reviews[indexNum].title;
    myText.innerHTML = reviews[indexNum].text;
  }
});

// Code for listening previous button event
prev.addEventListener("click", function () {
  this.classList.add("active_arrow_left");
  next.classList.remove("active_arrow_right");
  indexNum--;
  if (indexNum < 0) {
    indexNum = 3;
    userPhoto.src = reviews[indexNum].img;
    myUser.innerHTML = reviews[indexNum].user;
    myJob.innerHTML = reviews[indexNum].job;
    myTitle.innerHTML = reviews[indexNum].title;
    myText.innerHTML = reviews[indexNum].text;
  } else {
    userPhoto.src = reviews[indexNum].img;
    myUser.innerHTML = reviews[indexNum].user;
    myJob.innerHTML = reviews[indexNum].job;
    myTitle.innerHTML = reviews[indexNum].title;
    myText.innerHTML = reviews[indexNum].text;
  }
});

// END Slider

// START PriceCards

const monthly = document.getElementById("monthly");
const annually = document.getElementById("annually");
const monthlyCard = document.getElementById("monthly_card");
const annuallyCard = document.getElementById("annually_card");

function addLink(card) {
  var a = document.createElement("a");
  a.setAttribute("href", "");
  a.innerHTML = "Or Start 14 Days Trial";
  card.appendChild(a);
}

function removeLink(removeLinkCard) {
  const trialLinkAnnually = document.querySelector("#annually_card a");
  const trialLinkMonthly = document.querySelector("#monthly_card a");

  if (removeLinkCard === annuallyCard) {
    trialLinkAnnually.remove();
  } else {
    trialLinkMonthly.remove();
  }
}

function disbleEnableButton(removeLinkCard) {
  if (removeLinkCard === annually) {
    period.disabled = true;
    document.getElementById("annually").disabled = false;
  } else {
    period.disabled = true;
    document.getElementById("monthly").disabled = false;
  }
}

function moveLink(card, removeLinkCard) {
  addLink(card);
  removeLink(removeLinkCard);
  disbleEnableButton(removeLinkCard);
}

monthly.addEventListener("click", function () {
  annually.classList.add("ghost_button");
  monthly.classList.remove("ghost_button");
  monthlyCard.classList.add("active_card");
  annuallyCard.classList.remove("active_card");

  moveLink(monthlyCard, annuallyCard);
});

annually.addEventListener("click", function () {
  monthly.classList.add("ghost_button");
  annually.classList.remove("ghost_button");
  annuallyCard.classList.add("active_card");
  monthlyCard.classList.remove("active_card");

  moveLink(annuallyCard, monthlyCard);
});

// END PriceCards
