$(document).ready(function(){
  console.log('JQ');
  $('#show').on('click', function(){
    $( '#outputDiv' ).toggle();
  });

  $('#addButton').on('click', function(){
    var objectToSend = {
      number1: $('#input').val(),
      number2: $('#input2').val()
    };
    console.log(objectToSend);
  $.ajax({
    type: 'POST',
    url: '/allData',
    data: objectToSend,
    success: function( response ){
      console.log( 'back from post: ', response);
      $('#outputDiv').append('<p id=number>' + response.result + '</p>');
    }
  });
  });
});
