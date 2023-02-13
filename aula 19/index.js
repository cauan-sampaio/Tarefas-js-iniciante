function meuEscopo () {
    const form = document.querySelector('.form ');
    const resultado = document.querySelector('.resultado');
    const pessoas = [];
    //form.onsubmit = function (evento) {
      //  evento.preventDefault ();
        //alert(1);
        //console.log(`Foi enviado.`);
    //};
    //let contador = 1;
    function recebeEventoForm (evento){
        evento.preventDefault();
        
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const alt = form.querySelector('.alt');
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            alt: alt.value 
        });
        console.log(pessoas);        
        resultado.innerHTML += `<p> ${nome.value} ${sobrenome.value} ${peso.value} ${alt.value}</p>`;
  
    }

    
       
        // evento.preventDefault();
        //console.log(`Form não foi enviado ${contador}`);
        //contador++;
    
    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();