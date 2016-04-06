$( document ).ready(function() {
	$('form.FrontPage-form').on('submit', function (e) {
      e.preventDefault();
      var data = {};
      data.name = e.currentTarget[0].value;
      data.email = e.currentTarget[1].value;
      data.post = e.currentTarget[2].value;
      console.log( data, e);
      $('.submitMessage').css('display','none');
      $.post('https://deko-backend-staging-server.herokuapp.com/business/new', data, function (response) {
      	console.log(response);
        $('.submitMessage').text(response);
        $('.submitMessage').fadeIn('fast');
        $('.FrontPage-form-item').val('');
        setTimeout(function() {
              $('.submitMessage').fadeOut('slow');
        }, 4000);

      });
    });
});
