$(document).ready(function(){
  console.log('JQ');
  $('#clear').on('click', clear);
  $('.math').on('click', math);
  $('#inputfieldfor1').on('click', '.calc', numberSelectInput1);
  $('#inputfieldfor2').on('click', '.calc', numberSelectInput2);
  $('#switch').on('click', fade1);
  $('#switch2').on('click', fade2);
});

function math(){
  var objectToSend = {
    number1: $('#input').val(),
    number2: $('#input2').val(),
  };
  console.log($(this).val());
  console.log($('#addButton'));
  if ($(this).val().toLowerCase() == 'add') {
      objectToSend.type = 'add';
      console.log('yay');
    }
  else if ($(this).val().toLowerCase() == 'sub') {
      objectToSend.type = 'sub';
      console.log('yay');
    }
  else if ($(this).val().toLowerCase() == 'mult') {
      objectToSend.type = 'mult';
      console.log('yay');
    }
  else if ($(this).val().toLowerCase() == 'div') {
      objectToSend.type = 'div';
      console.log('yay');
    }
    console.log(objectToSend);
  $.ajax({
    type: 'POST',
    url: '/math',
    data: objectToSend,
    success: function( response ){
      console.log( 'back from post: ', response);
      $('#outputDiv').empty();
      $('#outputDiv').append('<p id=number>' + response.result + '</p>');
    }
  });
  }

function numberSelectInput1(){
      var number = $(this).val();
      console.log(number);
      var input = $('#input').val();
      console.log(input);
      var resultOf = input + number;
      $('#input').val(resultOf);
  }

  function numberSelectInput2(){
        var number = $(this).val();
        console.log(number);
        var input = $('#input2').val();
        console.log(input);
        var resultOf = input + number;
        $('#input2').val(resultOf);
    }

function fade1(){
  $('#inputfieldfor1').fadeOut('slow', function(){
    $('#inputfieldfor2').fadeIn('slow');
  });
  }

function fade2(){
  $('#inputfieldfor2').fadeOut('slow', function(){
    $('#inputfieldfor1').fadeIn('slow');
  });
  }

function clear(){
    $( '#outputDiv' ).empty();
    $('#input').val('');
    $('#input2').val('');
    if( $('#inputfieldfor1').css('display').toLowerCase() == 'none') {
      console.log('switch');
      fade2();
    }
    else {
      fade1();
    }
}
