export function btnMesa(mesitas){     
    const mesa = 12
    for(let i=1;i<=mesa;i++){
        const boton = //html
                    `
                    <button class="col-3 rounded-5  btn btn-primary  fs-3 d-flex align-items-center justify-content-center gap-2  mesas__boton" data-bs-target="#exampleModal" data-bs-toggle="modal">
                        <i class="fa-solid fa-bowl-food"></i>
                        <p class="m-0">
                            M${i}
                        </p>
                    </button>
                    `
        mesitas.insertAdjacentHTML("beforeend",boton)   
    }    
}