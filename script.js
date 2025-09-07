document
  .getElementById("calculadora-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const ope1 = parseFloat(document.getElementById("txt_operador1").value);
    const ope2 = parseFloat(document.getElementById("txt_operador2").value);

    const operacion = document.getElementById("sel_operacion").value;
    let calculo = 0.0;
    if (operacion == "+") {
      calculo = ope1 + ope2;
    } else if (operacion == "-") {
      calculo = ope1 - ope2;
    } else if (operacion == "*") {
      calculo = ope1 * ope2;
    } else if (operacion == "/") {
      if (ope2 != 0) calculo = ope1 / ope2;
    }

    document.getElementById("lb_resultado").textContent =
      "Resultado: " + calculo;
  });
