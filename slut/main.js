(function() {
  var a, b, calc;

  a = 5;

  b = 6;

  if (a === 5) {
    console.log('ebat nax ' + a);
  }

  calc = function(a, b) {
    var c;
    c = a + b;
    return console.log(c);
  };

}).call(this);

