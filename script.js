function calc() {
  let taxa_juros;

  let valor_devida = document.getElementById("valor_devida").value;
  //let valor_divida = entraDados.question("Informe o valor devido: R$ ");

  let origem = "";
  let dias = "";
  let porcen = "";
  let resultado = "";

  if (valor_devida > 0) {
    let dias_atraso = document.getElementById("dias_atraso").value;
    //let dias_atraso = entraDados.question("Informe quantos dias de atraso: ");

    if (dias_atraso > 0) {
      if (dias_atraso > 15) {
        taxa_juros = 10;
      } else if (dias_atraso >= 5 && dias_atraso <= 15) {
        taxa_juros = 5;
      } else {
        taxa_juros = 3;
      }

      let valor_juros = (valor_devida / 100) * taxa_juros;
      let total_divida = Number(valor_devida) + Number(valor_juros);

      origem = `\n\nValor original da dívida: R$ ${valor_devida}`;
      //console.log("\n\nValor original da dívida: R$ " + valor_devida);
      dias = `Dias atrasados: ${dias_atraso}`;
      //console.log("Dias atrasados: " + dias_atraso);
      porcen = `Taxa de Juros:  ${taxa_juros}%`;
      //console.log("Taxa de Juros: " + taxa_juros + "%");
      resultado = `Valor total com juros: R$ ${total_divida.toFixed(2)}`;
      // console.log("Valor total com juros: R$ " + total_divida);
    } else {
      resultado = "Você está em dia!";
      //console.log("Você está em dia!");
    }
  } else {
    resultado = "O valor da dívida deve ser maior que zero!";
    //console.log("O valor da dívida deve ser maior que zero!");
  }
  document.getElementById("origem").innerHTML = origem;
  document.getElementById("dias").innerHTML = dias;
  document.getElementById("porcen").innerHTML = porcen;
  document.getElementById("resultado").innerHTML = resultado;
}