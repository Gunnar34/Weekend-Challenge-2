$(document).ready(function(){
  console.log('JQ');
  $('#clear').on('click', function(){
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
  });

  $('#addButton').on('click', mathAdd);
  $('#subButton').on('click', mathSub);
  $('#multButton').on('click', mathMult);
  $('#divButton').on('click', mathDiv);
  $('#inputfieldfor1').on('click', '.calc', numberSelectInput1);
  $('#inputfieldfor2').on('click', '.calc', numberSelectInput2);
  $('#switch').on('click', fade1);
  $('#switch2').on('click', fade2);
});

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

function mathAdd(){
    var objectToSend = {
      number1: $('#input').val(),
      number2: $('#input2').val()
    };
    console.log(objectToSend);
  $.ajax({
    type: 'POST',
    url: '/mathAdd',
    data: objectToSend,
    success: function( response ){
      console.log( 'back from post: ', response);
      $('#outputDiv').empty();
      $('#outputDiv').append('<p id=number>' + response.result + '</p>');
    }
  });
  }

function mathSub(){
      var objectToSend = {
        number1: $('#input').val(),
        number2: $('#input2').val()
      };
      console.log(objectToSend);
    $.ajax({
      type: 'POST',
      url: '/mathSub',
      data: objectToSend,
      success: function( response ){
        console.log( 'back from post: ', response);
        $('#outputDiv').empty();
        $('#outputDiv').append('<p id=number>' + response.result + '</p>');
      }
    });
    }

function mathMult(){
    var objectToSend = {
      number1: $('#input').val(),
      number2: $('#input2').val()
    };
    console.log(objectToSend);
  $.ajax({
    type: 'POST',
    url: '/mathMult',
    data: objectToSend,
    success: function( response ){
      console.log( 'back from post: ', response);
      $('#outputDiv').empty();
      $('#outputDiv').append('<p id=number>' + response.result + '</p>');
    }
  });
  }

function mathDiv(){
    var objectToSend = {
      number1: $('#input').val(),
      number2: $('#input2').val()
    };
    console.log(objectToSend);
  $.ajax({
    type: 'POST',
    url: '/mathDiv',
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
