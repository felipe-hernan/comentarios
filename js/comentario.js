let texto = document.getElementById('texto');
let form = document.getElementById('entrada');
let mensajerror=document.getElementById('mensajeerror')

form.addEventListener('submit',ponertexto);

function ponertexto(event){
    
        event.preventDefault()
        let persona = document.getElementById('nombre').value;
        let mensaje = document.getElementById('mens').value;
        const fechaActual = new Date();
        let mes = fechaActual.getMonth()+1;
        let year = fechaActual.getFullYear();
        let dia = fechaActual.getDate();
        if (persona.trim()!="" && mensaje.trim()) {
            texto.innerHTML+=`<article id="mensajefinal"> <p class="text-white"> de <strong>${persona}</strong>
            </p>
            <p>${mensaje}</p>
            <p id="fechacreacion">${year} - ${mes} - ${dia}</p> </article>`;
            mensajerror.innerText="";
        }else if(persona.trim()!=""&&mensaje.trim()===""){
            mensajerror.innerText="Escribe un comentario";
        }else if(persona.trim()===""&&mensaje.trim()!=""){
            mensajerror.innerText="Escribe un nombre";
        }else{
            mensajerror.innerText="Escribe un comentario y nombre";
        }
}






