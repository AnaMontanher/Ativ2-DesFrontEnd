const countWordOccurrences = (string) => {
  string = string.replace(/[,.]/g, "");
  const vetor = string.split(" "); //vetor = [“Oi”,”meu”,”nome”, “é”,”Ana”,…]
  let ocorrencias = []; //vetor para armazenar letras c/ cap. invertida
  for (let i = 0; i < vetor.length; i++) {
    let count = 0;
    for (let j = 0; j < vetor.length; j++) {
      if (vetor[i] === vetor[j]) {
        count = count + 1;
      }
    }
    if (
      !ocorrencias.includes(`<tr><td>${vetor[i]}</td> <td> ${count}</td> </tr>`)
    ) {
      ocorrencias.push(`<tr><td>${vetor[i]}</td> <td> ${count}</td> </tr>`);
    }
  }
  ocorrencias = ocorrencias.join("");
  return `<table>
  <tr><th>Palavra</th><th> Número de ocorrências</th></tr>
          ${ocorrencias}
          </table>`;
};

const invertCapitalization = (str) => {
  //função que inverte a capitalização da palavra
  const allUpper = str.toUpperCase().split(""); //transformando a string toda em letra maiúscula
  const allLower = str.toLowerCase().split(""); //transformando a string toda em letra minúscula
  let newStr = []; //para armazenar a nova string
  for (let i = 0; i < str.length; i++) {
    //laço que percorre a palavra inserida
    if (allUpper.includes(str[i])) {
      // para verificar se a letra[i] é maiuscula
      let newLetter = str[i].toLowerCase();
      newStr.push(newLetter);
    } else if (allLower.includes(str[i])) {
      // para verificar se a letra[i] é minuscula
      let newLetter = str[i].toUpperCase();
      newStr.push(newLetter);
    } else {
      // se str[i]===espaços [" "]
      newStr.push(str[i]);
    }
  }
  newStr = newStr.join("");
  return newStr;
};

const generateAcronym = (str) => {
  //Função que gera um acrônimo
  const palavras = str.split(" "); //transformando a string em vetor com cada palavra sendo um elemento
  const acronimo = []; //para armazenar a primeira letra de cada palavra
  for (let i = 0; i < palavras.length; i++) {
    //laço que percorre os elementos do vetor
    let letra = palavras[i].slice(0, 1); //retirando apenas a primeira letra
    acronimo.push(letra.toUpperCase()); //colocando letra em maiúsculo e inserindo no vetor do acronimo
  }
  const acronimoFinal = acronimo.join(""); //unindo todos elementos sem espaço entre eles
  return acronimoFinal;
};

const areAnagrams = (str1, str2) => {
  str1 = str1.replace(/[,.]/g, "");
  str2 = str2.replace(/[,.]/g, "");
  let vetorStr1 = str1.toUpperCase().split(""); //colocando todas as palavras em
  let vetorStr2 = str2.toUpperCase().split("");
  vetorStr1.sort();
  vetorStr2.sort();
  let joinStr1 = vetorStr1.join("");
  let joinStr2 = vetorStr2.join("");

  if (joinStr1 == joinStr2) {
    return `"${str1}" e "${str2}" são anagramas`;
  } else {
    return `"${str1}" e "${str2}" NÃO são anagramas`;
  }
};

const activedResult = (nomeInput, nomeDiv, nomeFuncao) => {
  nomeDiv.setAttribute("class", "actived");
  nomeDiv.style = "display: flex;";
  nomeDiv.innerHTML = nomeFuncao(nomeInput);
};
