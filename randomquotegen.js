$(document).ready(function() {
  $("#newQuote").on("click", function(){
      $.getJSON("http://api.icndb.com/jokes/random", function(json) {
        var joke = json.value.joke;
        $(".message").html(joke);
        $("a").attr("href", 'https://twitter.com/intent/tweet?text=' + joke)
      });
    });
});
