

let texto = document.getElementById('texto');
let form = document.getElementById('entrada');

form.addEventListener('submit',ponertexto);

function ponertexto(event){
    
        event.preventDefault()
        let persona = document.getElementById('nombre').value;
        let mensaje = document.getElementById('mens').value;
        const fechaActual = new Date();
        let mes = fechaActual.getMonth()+1;
        let year = fechaActual.getFullYear();
        let dia = fechaActual.getDate();
        texto.innerHTML+=`<article id="mensajefinal"> <p class="text-white"> de <strong>${persona}</strong>
            </p>
            <p>${mensaje}</p>
            <p id="fechacreacion">${year} - ${mes} - ${dia}</p> </article>`;
}






