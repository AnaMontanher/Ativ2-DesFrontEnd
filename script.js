document.addEventListener("DOMContentLoaded", function () {
  //para garantir que o script irá rodar depois que todo o HTML esteja carregado
  const btn_count = document.getElementById("btn-count");
  const btn_invert = document.getElementById("btn-invert");
  const btn_acron = document.getElementById("btn-acron");
  const btn_anag = document.getElementById("btn-anag");

  const resultado = document.getElementById("result-1");
  const invertido = document.getElementById("result-2");
  const acronym = document.getElementById("result-3");
  const anagram = document.getElementById("result-4");
  const inputs = document.getElementsByClassName("form-control");

  const verifyEmptyValue = (input, nomeDiv, nomeFuncao) => {
    if (input == "") {
      return;
    } else {
      activedResult(input, nomeDiv, nomeFuncao);
    }
  };

  btn_count.addEventListener("click", function () {
    const input_count = document.getElementById("input-count").value;
    verifyEmptyValue(input_count, resultado, countWordOccurrences);
  });

  btn_invert.addEventListener("click", function () {
    const input_invert = document.getElementById("input-invert").value;
    verifyEmptyValue(input_invert, invertido, invertCapitalization);
  });

  btn_acron.addEventListener("click", function () {
    const input_acron = document.getElementById("input-acron").value;
    verifyEmptyValue(input_acron, acronym, generateAcronym);
  });

  btn_anag.addEventListener("click", function () {
    let input_first = document.getElementById("first-word").value;
    let input_second = document.getElementById("second-word").value;
    if (input_first == "" || input_second == "") {
      return;
    } else {
      anagram.setAttribute("class", "actived");
      anagram.style = "display: flex;";
      anagram.innerHTML = areAnagrams(input_first, input_second);
    }
  });

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("focus", function () {
      switch (i) {
        case 0:
          resultado.style = "display: none";
          inputs[i].value = "";
          break;
        case 1:
          invertido.style = "display: none";
          inputs[i].value = "";
          break;
        case 2:
          acronym.style = "display: none";
          inputs[i].value = "";
          break;
        case 3:
          anagram.style = "display: none";
          inputs[i].value = "";
          break;
        case 4:
          anagram.style = "display: none";
          inputs[i].value = "";
          break;
        default:
      }
    });
  }
});
