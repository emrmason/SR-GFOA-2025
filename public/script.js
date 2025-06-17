// document.addEventListener("DOMContentLoaded", () => {
//   document.querySelectorAll("#q1 li").forEach((item) => {
//     item.addEventListener("click", function () {
//       document.querySelectorAll("#q1 li").forEach((el) => {
//         el.classList.remove("selected");
//         el.style.backgroundColor = "";
//         el.style.color = "";
//       });

//       this.style.backgroundColor = "#0b45bb";
//       this.style.color = "white";
//       this.classList.add("selected");

//       const sysLabel = document.querySelector("#sys-name").value;
//       const otherName = document.querySelector("#other-input");
//       let systemName = "";
//       if (sysLabel) {
//         systemName = sysLabel;
//       }
//       if (otherName) {
//         systemName = otherName;
//       }
//       document.querySelector("#erp-selected").value = systemName;
//     });

//     document.querySelectorAll(".q2-btn").forEach((button) => {
//       button.addEventListener("click", function () {
//         document.querySelectorAll(".q2-btn").forEach((btn) => {
//           btn.classList.remove("selected");
//           btn.style.backgroundColor = "";
//           btn.style.color = "";
//         });

//         this.style.backgroundColor = "#0b45bb";
//         this.style.color = "white";
//         this.classList.add("selected");

//         document.querySelector("#like-selected").value = this.value;
//       });
//     });
//   });
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const params = new URLSearchParams(window.location.search);
//   if (params.get("submitted") === "1") {
//     const banner = document.getElementById("thank-you-banner");
//     if (banner) banner.style.display = "block";
//   }
// });
// END OF ORIGINAL CODE

// COMMENCE GPT CODE
document.addEventListener("DOMContentLoaded", () => {
  const erpHiddenInput = document.getElementById("erp-selected");
  const likeHiddenInput = document.getElementById("like-selected");
  const otherInput = document.getElementById("other-input");

  // Q1: ERP system selection
  document.querySelectorAll("#q1 li").forEach((item) => {
    item.addEventListener("click", function () {
      // Reset all selections
      document.querySelectorAll("#q1 li").forEach((el) => {
        el.classList.remove("selected");
        el.style.backgroundColor = "";
        el.style.color = "";
      });

      // Style this selected item
      this.classList.add("selected");
      this.style.backgroundColor = "#0b45bb";
      this.style.color = "white";

      const label = this.querySelector("label");

      if (label && label.getAttribute("name") !== "other-sys-name") {
        const systemName = label.getAttribute("name");
        erpHiddenInput.value = systemName;

        // Clear other input when a system is clicked
        if (otherInput) otherInput.value = "";
      }
    });
  });

  // Q1: Other input field typed
  if (otherInput) {
    otherInput.addEventListener("input", () => {
      const val = otherInput.value.trim();
      if (val.length > 0) {
        erpHiddenInput.value = val;

        // Clear selected styles from ERP list
        document.querySelectorAll("#q1 li").forEach((el) => {
          el.classList.remove("selected");
          el.style.backgroundColor = "";
          el.style.color = "";
        });
      }
    });
  }

  // Q2: Feedback button selection
  document.querySelectorAll(".q2-btn").forEach((button) => {
    button.addEventListener("click", function () {
      // Reset Q2 buttons
      document.querySelectorAll(".q2-btn").forEach((btn) => {
        btn.classList.remove("selected");
        btn.style.backgroundColor = "";
        btn.style.color = "";
      });

      // Style this button
      this.classList.add("selected");
      this.style.backgroundColor = "#0b45bb";
      this.style.color = "white";

      // Set hidden input
      likeHiddenInput.value = this.value;
    });
  });

  // Q3: Show thank-you banner on redirect
  const params = new URLSearchParams(window.location.search);
  if (params.get("submitted") === "1") {
    const banner = document.getElementById("thank-you-banner");
    if (banner) banner.style.display = "block";
  }
});
