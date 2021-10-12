window.onload = function() {
  var el = null;
  document.body.addEventListener('mouseover', function(e) {
      if(e.target.tagName !== 'BODY' && (e.target.innerText.trim() !== '' || e.target.tagName == "IMG")) {
        el = e.target;
        $(e.target).addClass('highlight');
      }
  });

  document.body.addEventListener('mouseout', function(e) {
    el = null;
    $(e.target).removeClass('highlight');
    e.stopPropagation();
  });

  document.body.addEventListener('keydown', function(e) {
    e.preventDefault();
    var text;
    var tagname = el.tagName;

    if(el.tagName == "IMG") {
      text = $(el).attr('alt') + " " + $(el).attr('title') + " " + $(el).attr('src');
    } else {
      text = $(el).text();
    }
    if (e.code === "Space") {
      var utter = new window.SpeechSynthesisUtterance(text);
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utter);
    }
    e.stopPropagation();
  });
}
