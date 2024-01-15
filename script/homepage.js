document.addEventListener("DOMContentLoaded", function () {
  // Load the header content
  fetch("/header_footer/header.html")
    .then((response) => response.text())
    .then((data) => {
      document.querySelector("body").insertAdjacentHTML("afterbegin", data);
    });
});

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    //   document.getElementById("navbar").style.padding = "10px 0px 20px 0px";
    document.getElementById("logo").style.width = "15%";
    document.getElementById("logo").style.margin = "0 0 0 530px";
  } else {
    //   document.getElementById("navbar").style.padding = "10px 0px 20px 0px";
    document.getElementById("logo").style.margin = "0 0 0 440px";
    document.getElementById("logo").style.width = "30%";
  }
}
