var params;
$(document).ready(function () {
  $("footer").hide();
  $("n-header").hide();
  $("p-signin").hide();
  $("p-daftar").hide();
  $("p-success").hide();
  $("p-login").hide();
  $("p-tkami").hide();

  getParams();
  params = getParams();
  if (params == "daftar") {
    $("footer").hide();
    $("n-header").hide();
    $("p-daftar").show();
  } else if (params == "sign_in") {
    $("footer").hide();
    $("n-header").hide();
    $("p-signin").show();
  } else if (params == "login") {
    $("footer").hide();
    $("n-header").hide();
    $("p-login").show();
  } else if (params == "success") {
    $("footer").hide();
    $("n-header").hide();
    $("p-success").show();
  } else {
    $("footer").show();
    $("n-header").show();
    $("p-tkami").show();
  }
});
window.addEventListener("scroll", () => {
  const verticalScrollPx = window.scrollY || window.pageYOffset;
  if (params == "") {
    if (verticalScrollPx > 650) {
      document.getElementById("nav").style.backgroundColor = "white";
    } else {
      document.getElementById("nav").style.backgroundColor = "transparent";
    }
  } else {
    if (verticalScrollPx > 50) {
      document.getElementById("nav").style.backgroundColor = "white";
    } else {
      document.getElementById("nav").style.backgroundColor = "transparent";
    }
  }
});

function getParams() {
  var idx = document.URL.indexOf("?");
  var params = "";
  if (idx != -1) {
    var pairs = document.URL.substring(idx + 1, document.URL.length).split("&");
    params = pairs[0];
  }
  console.log(params);
  return params;
}
