var contentData = [
    'http://d196kgo02410lt.cloudfront.net/Dekorate-Business/Carousel/a55ac2bb8dfffe521a1dde3c41f1e86b.jpg',
    'http://d196kgo02410lt.cloudfront.net/Dekorate-Business/Carousel/b202fe8abb7fba3f6c2cba567c2ab385.jpg',
    'http://d196kgo02410lt.cloudfront.net/Dekorate-Business/Carousel/9976eec892caeaefc15990feb7b3e5c2.jpg',
    'http://d196kgo02410lt.cloudfront.net/Dekorate-Business/Carousel/333c4be70f6588698c15c9aa899ab0bc.jpg',
    'https://d196kgo02410lt.cloudfront.net/Dekorate-Business/Carousel/04883ff71ae2446aba24cee456c928df.jpg',
    'http://d196kgo02410lt.cloudfront.net/Dekorate-Business/Carousel/92fa3a72b2cc6bdbd96d98ea654ac9c2.jpg',
    'http://d196kgo02410lt.cloudfront.net/Dekorate-Business/Carousel/8d5cd75e2dfcdcf369f85c6961fa9355.jpg',
    'http://d196kgo02410lt.cloudfront.net/Dekorate-Business/Carousel/69a7cc7e4b4bcc3b3ba09398df9c1fd2.jpg',
    'http://d196kgo02410lt.cloudfront.net/Dekorate-Business/Carousel/96827cd7f165799cc86de77f03153acb.jpg',
    'http://d196kgo02410lt.cloudfront.net/Dekorate-Business/Carousel/fc80725e1e55003004bee74a32bebe9d.jpg',
    'http://d196kgo02410lt.cloudfront.net/Dekorate-Business/Carousel/5bc20d5b8ac0c550869aa21cece7998f.jpg',
    'http://d196kgo02410lt.cloudfront.net/Dekorate-Business/Carousel/a79b9c4fca9cb6cfaff96e7f20d1477f.jpg',
    'http://d196kgo02410lt.cloudfront.net/Dekorate-Business/Carousel/790a6b86cd19d2911f7a21086e46e991.jpg',
    'http://d196kgo02410lt.cloudfront.net/Dekorate-Business/Carousel/174c1bdfa2ccb100e695d7d006a18b49.jpg',
    'http://d196kgo02410lt.cloudfront.net/Dekorate-Business/Carousel/a573aa3ccf0f2205c7e04cd394572284.jpg',
    'http://d196kgo02410lt.cloudfront.net/Dekorate-Business/Carousel/08b87d9b2f47daa27326644a0788cdad.jpg',
    'http://d196kgo02410lt.cloudfront.net/Dekorate-Business/Carousel/8ddabf6ff562c028ea15ab3f2b572ed4.jpg',
    'http://d196kgo02410lt.cloudfront.net/Dekorate-Business/Carousel/c6bf706a0a03770495d6ed9bfc9a7388.jpg',
    'http://d196kgo02410lt.cloudfront.net/Dekorate-Business/Carousel/c41e4b6f0675fc0637716cdb62c2739d.jpg',
    'http://d196kgo02410lt.cloudfront.net/Dekorate-Business/Carousel/ebe557e5d5d5bc9b65912ca3498b8fd2.jpg',
    'http://d196kgo02410lt.cloudfront.net/Dekorate-Business/Carousel/f36d83b6382608c52b2c877ce92b735a.jpg',
    'http://d196kgo02410lt.cloudfront.net/Dekorate-Business/Carousel/9a0b8120ee26dc964cb8281c56a064b1.jpg',
    'http://d196kgo02410lt.cloudfront.net/Dekorate-Business/Carousel/92599601c58bcbf3712c01a95fe2265f.jpg',
    'http://d196kgo02410lt.cloudfront.net/Dekorate-Business/Carousel/a5d11eaebbc48f53b33687e0894f18bf.jpg'];

var totalPages = Math.ceil(contentData.length/6);
var presentIndex = 0, presentPage = 0;

$( window ).resize(function() {
  renderVersion();
});
function renderVersion(){
  if(window.innerWidth>=768)
    renderImages(presentPage);
  else {
    renderSingleImage(presentIndex);
  }
};
$( document ).ready(function() {
  renderVersion();
  $('.left.PreviousDesigns-navigations-button').click(function(){ // left navigation
    if(window.innerWidth>=768){
      if(presentPage!=0)
        presentPage--;
      else
        presentPage = totalPages - 1;
    }
    else{
      if(presentIndex!=0)
        presentIndex--;
      else
        presentIndex = contentData.length - 1;
    }
    $('.PreviousDesigns-designWrapper').fadeOut(300, function(){
      renderVersion();
    });
  });
  $('.right.PreviousDesigns-navigations-button').click(function(){ // right navigation
    if(window.innerWidth>=768){
      if(presentPage==totalPages-1)
        presentPage=0;
      else
        presentPage++;
    }
    else{
      if(presentIndex==contentData.length-1)
        presentIndex=0;
      else
        presentIndex++;
    }
    $('.PreviousDesigns-designWrapper').fadeOut(300, function(){
      renderVersion();
    });
  });

  $('.PreviousDesigns-designWrapper-image').click(function(e){ //fullScreen
    e.preventDefault();
    e.stopPropagation();
    var tobeselected = e.currentTarget.className.split(' ')[0];
    var selectedIndex = tobeselected.charAt(tobeselected.length-1);
    console.log(6*presentPage+parseInt(selectedIndex));
    fullScreen(6*presentPage+parseInt(selectedIndex));
  });
});


function renderSingleImage(presentIndex){
  $('.singleDesign').attr("src",contentData[presentIndex]);
  $('.PreviousDesigns-designWrapper').fadeIn('slow');
};


function renderImages(){
  var index = 0;
  for(var i=presentPage*6;i<6*presentPage+6;i++){
    $('.design'+index).attr("src",contentData[i]);
    index++;
  };
  $('.PreviousDesigns-designWrapper').fadeIn('slow');
};


function fullScreen(ind){
  document.documentElement.style.overflow = 'hidden';
  $('.fullscreen-image').attr("src",contentData[ind]);
  $('.Modal').css("display","block");
  $('.fullscreen-image').fadeIn('slow');
  $('.mask').click(function(){
    closeFullScreen();
  });
  $('.fullscreen-button.right').click(function(){
    if(ind==contentData.length-1)
      ind=0;
    else
      ind++;
    $('.fullscreen-image').fadeOut(300, function(){
      fullScreen(ind);
    });
  });
  $('.fullscreen-button.left').click(function(){
    if(ind!=0)
      ind--;
    else
      ind = contentData.length - 1;
    $('.fullscreen-image').fadeOut(300, function(){
      fullScreen(ind);
    });
  });
};


function closeFullScreen(){
  console.log('closeFullScreen');
  document.documentElement.style.overflow = 'scroll';
  $('.Modal').css("display","none");
  renderVersion();
}
