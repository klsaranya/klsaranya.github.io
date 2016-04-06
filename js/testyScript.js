var testimonials = [
{
  imageUrl: 'Gokul_Shodhan.jpg',
  author: 'Gokul Shodhan, Director of Design, Ahmedabad',
  text:'I am very satisfied with the office layout suggested by Dekorate and I got the insight of how my office will look before I bought any furniture. It also helped me in taking the decision to my liking.'
},
{
  imageUrl: 'Rekha_Singh.jpg',
  author: 'Rekha Singh, Housewife, New Delhi',
  text:'A perfect bedroom within a budget. It was really easy having the room designed by Dekorate as it avoided all the hassle of finding an interior designer and dealing with him.'
},
{
  imageUrl: 'Anubhav_Jain.jpg',
  author: 'Anubhav Jain, Entrepreneur, Gurgaon',
  text:'The team at Dekorate works like no other, they captured the true essence of what I had imagined, took it to another level and made my space a reality.'
}];
var currentIndex = 0;
$( document ).ready(function() {

  populateData(currentIndex);
});

function populateData(index){
  $('.TestimonialsPage-testy').text('"'+testimonials[index].text+'"');
  $('.TestimonialsPage-author').text('-'+testimonials[index].author);
  $('.TestimonialsPage-testy').fadeIn('slow');
	$('.TestimonialsPage-author').fadeIn('slow');
  $('.TestimonialsPage-image.image'+currentIndex).css("opacity","1");
  $('.TestimonialsPage-image').on('click', function(e){
		$('.TestimonialsPage-testy').fadeOut(300);
  	$('.TestimonialsPage-author').fadeOut(300, function(){
  		var lastclass = e.currentTarget.className.split(' ')[0];
			currentIndex = lastclass.charAt(lastclass.length-1);
      $('.TestimonialsPage-image').css("opacity","0.5");
      $(e.currentTarget.className).css("opacity","1");
			populateData(currentIndex);
  	});
	});
}
