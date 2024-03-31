let decInp = document.getElementById("decimalInp");

function decToBin(decInp) {
  let y = parseInt(decInp.value);
  let x = y.toString(2);
  x = isNaN(x) ? 0 : x;
  document.getElementById('dispbin').innerHTML = x;
}

function decToOct(decInp) {
  let y = parseInt(decInp.value);
  let x = y.toString(8);
  x = isNaN(x) ? 0 : x;
  document.getElementById('dispoct').innerHTML = x;
}

function decToHex(decInp) {
  let y = parseInt(decInp.value);
  let x = y.toString(16);
  x = isNaN(x) ? 0 : x;
  document.getElementById('disphex').innerHTML = x;
}
