document.querySelectorAll("#q1 li").forEach((item) => {
  item.addEventListener("click", function () {
    document.querySelectorAll("#q1 li").forEach((el) => {
      el.style.backgroundColor = "gray";
    });
    this.style.backgroundColor = "#0b45bb";
    this.style.color = "white";
  });
});

document.querySelectorAll("#q2 .q2-btn").forEach((button) => {
  button.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission on button click

    // Remove active state from other buttons
    document.querySelectorAll("#q2 .q2-btn").forEach((btn) => {
      btn.style.backgroundColor = "gray";
    });

    // Highlight selected button
    this.style.backgroundColor = "#0b45bb";
  });
});

document
  .getElementById("survey-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page refresh

    alert("Thanks for participating!"); // Feedback to user

    // Reset styling for q1 items
    document.querySelectorAll("#q1 li").forEach((el) => {
      el.style.backgroundColor = ""; // Reset to default
    });

    // Reset styling for q2 buttons
    document.querySelectorAll("#q2 .q2-btn").forEach((btn) => {
      btn.style.backgroundColor = ""; // Reset to default
    });

    // Clear input field (optional)
    document.getElementById("survey_email").value = "";

    // Actually reset form fields
    this.reset();
  });
