/*
TODO
====
1. monospace font, please?
3. addZed.
4. Then, buildMundaneWords

Done
====
you never made sure the special char is at col 8.
buildSpecialWords =
  1. insertEightLeft,
  2. insertLettersRight,
*/

$(document).ready(function(){
  $('button').on('click', function(){
    $input = $('input').val().toUpperCase();
    var numberOfWords = $input.length * 2;
    var wordLength = 22;
    $input = $input.split('');
    $input = addEightLeft($input);
    $input = insertLettersRight($input, wordLength);
    //$input = addZed($input);

    getWords($input, numberOfWords);
    lengthenWords($input, wordLength);
    $input = getVerticle($input);
    $('.output').html($input);
  });
});

var insertLettersRight = function(list, len){
  for (var i = 0; i < list.length; i++){
    for (var j = 0; j < len; j++){
      list[i] += getRandomChar();
    }
  }
  return list;
}

var addEightLeft = function(list) {
  for (var i = 0; i < list.length; i++){
    for (var j = 0; j < 8; j++){
      list[i] = getRandomChar() + list[i];
    }
  }
  return list;
};

var lengthenWords = function(list, len) {
  for (var i = 0; i < list.length; i++) {
    while (list[i].length < len) {
      list[i] += getRandomChar();
    }
  }
}

var getWords = function(list, num) {
  console.log(list);
  console.log(num);
  for (var i = list.length; i < num; i++){
    list.push("");
  }
}

var getVerticle = function(i){
  var myText = "";
  while (i.length) {
    myText = myText + i[0] + "<br>";
    i = i.slice(1);
  }
  return myText;
};

var getRandomChar = function(){
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXY";
  return chars.charAt(Math.floor(Math.random() * chars.length));
};

var addZed = function(x){
  for (var i = 0; i < x.length; i++){
    x[i] += 'Z';
  }
  return x;
};
