$(document).ready(function() {

  $("*:not(body)").hover(function (ev) {
    $(this).addClass('highlight');
    $(this).click(function(e) {
      console.log($(e.target).text());
      var utter = new window.SpeechSynthesisUtterance("cat");
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utter);
    });
  },function (ev) {
    $(this).removeClass('highlight');
    window.speechSynthesis.cancel();
  });
});
