var quote = $("h2").html();
var author = $("em").html();
$("#tweet-link").attr("href", "https://twitter.com/intent/tweet?text=" + quote + " " + author);

function randomColor() {
	var red = Math.floor(Math.random() * 255);
	var green = Math.floor(Math.random() * 255);
	var blue = Math.floor(Math.random() * 255);

	var rgbColor = [red, green, blue];

	return rgbColor.join(", ");
}

function buttonClick() { 
  
  randomColor();
  
  var newColor = "rgb(" + randomColor() + ")";
  
  //Body background
  $("html body").animate({
        backgroundColor: newColor,
        color: newColor
      }, 1000);
  
  //Quote Button bgColor and Border color
  $(".quote-button").animate({
        backgroundColor: newColor
   }, 1000);
  $(".quote-button").animate({
        borderColor: newColor
   }, 1000);
  
  // Font Awesome Icons Change Color
  $(".twitter-icon").animate({
     color: newColor
   }, 1000);

  $(".fa-quote-left").animate({
      color: newColor
   }, 1000);

  $(".fa-quote-right").animate({
      color: newColor
   }, 1000);
  
 // Quote Generator through API 
 $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?", function(data){
   $("#quote").fadeIn();
   $("#quote").html("<h2>" + data.quoteText + "</h2>");
   $("#quote").css("color", newColor);
   
   $("#author").fadeIn();
   $("#author").html("<h4><em>-" + data.quoteAuthor + "</em></h4>");
   $("#author").css("color", newColor);
   
   $("#tweet-link").attr("href", "https://twitter.com/intent/tweet?text=" + $("h2").html() + " " + $("em").html()); 
   
  });
    
}
