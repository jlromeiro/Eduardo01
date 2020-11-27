function exec() {
    let t = 'This would have declared the storage space of five integers with the identifier name of ages but their initial values would have been unknown values or initialized as indicated, depending on the programming language. We could assign values later in our program by doing the following'
    let l = t.split(" ")
for (var c = 0; c < l.length; c++) {
  (function (c) {
    setTimeout(function() {
      document.getElementById('divprincipal').innerHTML += (`${l[c]} `)},
      2000*c);
      }
      )(c);
}
}