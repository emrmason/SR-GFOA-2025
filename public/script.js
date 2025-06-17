document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#q1 li").forEach((item) => {
    item.addEventListener("click", function () {
      document.querySelectorAll("#q1 li").forEach((el) => {
        el.classList.remove("selected");
        el.style.backgroundColor = "";
        el.style.color = "";
      });

      this.style.backgroundColor = "#0b45bb";
      this.style.color = "white";
      this.classList.add("selected");

      const label = this.querySelector("label");
      if (label) {
        const systemName = label.getAttribute("name");
        document.querySelector("#erp-selected").value = systemName;
      }
    });
  });

  document.querySelectorAll(".q2-btn").forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelectorAll(".q2-btn").forEach((btn) => {
        btn.classList.remove("selected");
        btn.style.backgroundColor = "";
        btn.style.color = "";
      });

      this.style.backgroundColor = "#0b45bb";
      this.style.color = "white";
      this.classList.add("selected");

      document.querySelector("#like-selected").value = this.value;
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  if (params.get("submitted") === "1") {
    const banner = document.getElementById("thank-you-banner");
    if (banner) banner.style.display = "block";
  }
});
