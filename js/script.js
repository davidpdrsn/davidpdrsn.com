$(function(){

  var text = "waitforit...".split('');

  text.forEach(function(letter, i){
    var className = "char-" + i,
        markup = "<span class=\"" + className + "\">" + letter + "</span>";

    $('h1').append(markup);
  });

});
