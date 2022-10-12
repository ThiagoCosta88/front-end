
  function mostrarmenu() {
    let nav =document.getElementById("nav")

    if (getComputedStyle(nav).display ==("none")) {
       nav.style.display = "flex"; 
    } else {
        nav.style.display ="none";
    }
  }