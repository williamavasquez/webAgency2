$('document').ready( function(){
  var count = 1;
  setInterval(function(){
    if (count<3) {
      count++;
      $('#testBG').css('background-image','url("./img/bgimage'+count+'.jpg")');
    }else {
      count = 0;
    }
  },5000) //carousel ending

$('#contactmebtn').on('click',function(){
document.getElementById("contactrow").scrollIntoView()
  }) // contact me scroll ending


})
