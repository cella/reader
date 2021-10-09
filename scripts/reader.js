window.onload = function() {
  document.body.addEventListener('mouseover', function(e) {
    $(e.srcElement).addClass('highlight');
  });

  document.body.addEventListener('mouseout', function(e) {
    $(e.srcElement).removeClass('highlight');
    e.stopPropagation();
  });

  document.body.addEventListener('click', function(e) {
    var el = e.srcElement;
    var text;
    var tagname = el.tagName;

    if(el.tagName == "IMG") {
      text = $(el).attr('alt') + " " + $(el).attr('title') + " " + $(el).attr('src');
    } else {
      text = $(el).text();
    }
    var utter = new window.SpeechSynthesisUtterance(text);
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utter);
    e.stopPropagation();
  });
}
