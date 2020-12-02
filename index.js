// Since it is repetitive for all pages adding the contact div using script
const contactDiv = `
  <div class='row'>
    <div class='col-md-6'>
        <a name='contact' class='anchor'><h2>Get in touch!</h2></a>
        <p class='contact-text'>Feel free to send me an <a target='_blank' href='mailto:nivedita.rao87@gmail.com'>email</a> to nivedita.rao87@gmail.com, if you are looking for a developer.
        <br/>
        <br/>
        <a target='_blank' href='https://github.com/NiveditaRao87' class='social-links'> gitHub</a>
        <a target='_blank' href='https://www.linkedin.com/in/niveditarrao/' class='social-links'> LinkedIn</a>
    </div>
    <div class='col-md-4'>
      <figure>
        <img class='contact-img' 
        src='images/debby-hudson-DR31squbFoA-unsplash.jpg' alt='a letter'/>
        <figcaption class='attribution'>Photo by <a href='https://unsplash.com/@hudsoncrafted?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText'>Debby Hudson</a> on <a href='https://unsplash.com/s/photos/letter?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText'>Unsplash</a></figcaption>
      </figure>
    </div>
  </div>
`

$('.contact').append(contactDiv)

//Open modal with enlarged picture on click on image

$('.img-project-dets').on('click', function(e) {
  $('#imagepreview').attr('src', $(e.target).attr('src')); 
  $('.modal-title').html($(e.target).attr('alt'))
  $('#imagemodal').modal('show'); 
});


// Scroll progress bar

const docHeight = $(document).height()
const windowHeight = $(window).height()
var scrollPercent

$(window).scroll(function() {
  scrollPercent = $(window).scrollTop() / (docHeight - windowHeight) * 100;
  $('.scroll-progress').width(scrollPercent + '%');
});

// Hide scroll progress bar when the navbar is collapsed and open

$( "nav" ).click(function() {
  if($('.collapse').is(':hidden')){
     $('.progress-container').css('visibility', 'hidden')
  } else {
    $('.progress-container').css('visibility', 'visible')
  }
})

