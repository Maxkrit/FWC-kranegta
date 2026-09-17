$(document).ready(function() {
  function isValidPositiveInt(str) {
    return /^[0-9]+$/.test($.trim(str));
  }

  function calc(a, b, operator) {
    if ((operator === "/" || operator === "%") && b === 0) {
      alert("It's over 9000!");
      console.log("It's over 9000!");
      return;
    }

    let result;
    if (operator === "+") result = a + b;
    else if (operator === "-") result = a - b;
    else if (operator === "*") result = a * b;
    else if (operator === "/") result = a / b;
    else if (operator === "%") result = a % b;

    alert(result);
    console.log(result);
  }


  $('#calc').on('submit', function(e) {
    e.preventDefault();

    const l = $('#left').val();
    const r = $('#right').val();
    const op = $('#op').val();

    if (!isValidPositiveInt(l) || !isValidPositiveInt(r)) {
      alert("Error :(");
      return;
    }

    const a = parseInt(l, 10);
    const b = parseInt(r, 10);

    calc(a, b, op);
  });

  // แจ้งเตือนทุกๆ 30 วินาที
  setInterval(function() {
    alert("Please, use me...");
  }, 30000);
});