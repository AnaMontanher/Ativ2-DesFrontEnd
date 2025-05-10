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

  btn_count.addEventListener("click", function () {
    const input_count = document.getElementById("input-count").value;
    activedResult(input_count, resultado, countWordOccurrences);
  });

  btn_invert.addEventListener("click", function () {
    const input_invert = document.getElementById("input-invert").value;
    activedResult(input_invert, invertido, invertCapitalization);
  });

  btn_acron.addEventListener("click", function () {
    const input_acron = document.getElementById("input-acron").value;
    activedResult(input_acron, acronym, generateAcronym);
  });

  btn_anag.addEventListener("click", function () {
    const input_first = document.getElementById("first-word").value;
    const input_second = document.getElementById("second-word").value;
    anagram.setAttribute("class", "actived");
    anagram.style = "display: flex;";
    anagram.innerHTML = areAnagrams(input_first, input_second);
  });

  const vetorDivs = document.getElementsByClassName("actived");

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("click", function () {
      for (let j = 0; j < vetorDivs.length; j++) {
        if (
          vetorDivs[j] !== undefined &&
          vetorDivs[j].getAttribute("class") === "actived"
        ) {
          vetorDivs[j].style = "display: none";
          inputs[i].value = "";
        }
      }
    });
  }
});
