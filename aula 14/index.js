const num = Number(prompt(`Digite o seu número:`));
const numeroTitulo = document.getElementById(`numero-titulo`);
const texto = document.getElementById(`texto`);
numeroTitulo.innerHTML = num;
texto.innerHTML = '';
texto.innerHTML +=`<p>Raiz: ${num ** 0.5} </p>`;
texto.innerHTML +=`<p>${num} é inteiro: ${Number.isInteger(num)} </p> `;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(num)} </p>`;
texto.innerHTML += `<p>Arredondando pra baixo ${Math.floor(num)}</p> `;
texto.innerHTML += `<p>Arredondando pra cima ${Math.ceil(num)}</p> `;
texto.innerHTML += `<p>Com duas casas decimais  ${(num.toFixed(2))}</p> `;

