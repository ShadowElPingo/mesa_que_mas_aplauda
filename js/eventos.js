import {modalciton} from "./template.js"

export function capturetable(botoncitoCompritas){
    botoncitoCompritas.forEach(aliasBotoncito=>{
        aliasBotoncito.addEventListener('click',(eventocito)=>{
            let numMesita = aliasBotoncito.querySelector("span").textContent;
            modalciton(numMesita);
            
            const cierreson = document.getElementById("cierresito");
            cierreson.addEventListener('click',()=>{
                const modalModal = document.getElementById("exampleModal");
                modalModal.remove();
            })
             
         });
    })
}

