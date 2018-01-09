$(document).ready(function() {
  first_quote()
  change_all()
})


function change_all() {
  $('#new-quote').on('click', change_color)
  $('#new-quote').on('click', change_quote)
}


function change_color() {
  var color = Math.floor(Math.random()*16777215).toString(16);
  $('.entire_page').css('background-color', color)
  $('.quote_container').find('p').css('color', color)
  $('.the_quotes').css('color', color)
  $('.quote_button').css('background-color', color)
}


function change_quote() {
  $.ajaxSetup ({cache:false})
  $.getJSON('https://api.forismatic.com/api/1.0/?method=getQuote&key=XXXXX&format=jsonp&jsonp=?&lang=en', function(json) {
    $('#quote_text').html("\"" + json.quoteText + "\"")
    $('#quote_author').html(json.quoteAuthor)
  })
}


function first_quote() {
  $.ajaxSetup ({cache:false})
  $.getJSON('https://api.forismatic.com/api/1.0/?method=getQuote&key=XXXXX&format=jsonp&jsonp=?&lang=en', function(json) {
    $('#quote_text').html("\"" + json.quoteText + "\"")
    $('#quote_author').html(json.quoteAuthor)
    $('.quote_text').show('slow')
  })
}
