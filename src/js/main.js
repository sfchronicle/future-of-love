require("./lib/social"); //Do not delete

["healthcare","environment","immigration","education","guncontrol","transportation","labor","energy"].forEach(function(section){
  // set up clicking to update map interactive on mobile
  document.getElementById("button"+section).addEventListener("click", function() {
    var sectionElements = document.getElementsByClassName("section-emma");
    var buttonElements = document.getElementsByClassName("button");
    for(var i = 0; i < sectionElements.length; i++){
      sectionElements[i].className = "section-emma";
      buttonElements[i].className = "button";
    };
    document.getElementById("section"+section).className += " selected";
    document.getElementById("button"+section).className += " selected";
  });
});

// WHAT I ACTUALLY ENDED UP USING ON WCM

document.getElementById("scroll").addEventListener("click", function() {
    $('html, body').animate({
        // scrollTop: $("#scroll-to-top").offset().top
        scrollTop: $("#top").offset().top
    }, 600);
});
