window.addEventListener('load',()=>{
     var lat,lon;
     navigator.geolocation.getCurrentPosition((position)=>{
       lat=position['coords']['longitude'];
       lon=position['coords']['latitude'];
       console.log(lat + " " + lon);
     })
})

$(document).ready(function() {
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } 
  });
});