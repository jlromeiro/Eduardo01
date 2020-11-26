function exec() {
    let divp = document.getElementById('divprincipal')
    let t = document.getElementById('txt')
    let j = String(t.value)
    let l = j.split(" ")
    divp.innerHTML = ''
 for (var c = 0; c < l.length; c++) {
  (function (c) {
    setTimeout(function () {
      divp.innerHTML += (`${l[c]} `)},
      2000*c);
      }
      )(c);
}
    }
