"use strict";
const faqElem = document.querySelector(".faq");
const details = faqElem.querySelectorAll("details");

details.forEach((detail) => {
  const summary = detail.querySelector("summary");
  if (detail.open) {
    summary.classList.add("summary-close");
  } else {
    summary.classList.add("summary-open");
  }
  detail.addEventListener("toggle", (e) => {
    if (detail.open) {
      summary.classList.add("summary-close");
      summary.classList.remove("summary-open");
    } else {
      summary.classList.remove("summary-close");
      summary.classList.add("summary-open");
    }
  });
});
