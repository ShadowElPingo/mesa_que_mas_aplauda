
export function btnMesa(mesitas){     
    const mesa = 12
    for(let i=1;i<=mesa;i++){
        const boton = //html
                    `
                    <button class="col-3 rounded-5  btn btn-primary  fs-3 d-flex align-items-center justify-content-center gap-2  mesas__boton" data-bs-target="#exampleModal" data-bs-toggle="modal" id="m${i}">
                        <i class="fa-solid fa-bowl-food"></i>
                        <p class="m-0">
                            M <span>${i}</span>
                        </p>
                    </button>
                    `
        mesitas.insertAdjacentHTML("beforeend",boton)   
    }    
}

export function modalciton(numMesita){
    console.log(numMesita);
    const pausita = document.getElementById("pausa")
    const modalcito = //html
                    `
                    <div class="modal fade  " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog  ">
                            <div class="modal-content modalcito ">
                                
                                <div class="modal-header d-flex flex-column  colorsitoModal ">
                                    <div class="botoncitoCierre w-100   ">
                                        <button type="button" id="cierresito" class="   btn-close d-flex btnX  " data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    
                                    <div class="heaModa w-100  d-flex justify-content-around   ">
                                        <h2 class="modal-title fs-5  "  id="numeroMesa">Mesa ${numMesita}</h2>
                                        <h3 class="fs-5 "><i class="fa-solid fa-user me-1 usuarito"></i>Juan</h3>
                                    </div>
                                    <div class="col-12  tomaPedidito w-100 d-flex  justify-content-around  ">
                                        <select class="col-5 escojeComidita" name="" id="" placeholder="Item">
                                            <option selected >Platillo</option>
                                            <option value="pizza">Pizza</option>
                                            <option value="hamburguesa">Hamburguesa</option>
                                            <option value="calson">Calzon</option>
                                            <option value="lasagna">Lasagna</option>
                                            <option value="juguito">Juguito</option>
                                            <option value="350ml">Coca-Cola 350ml</option>
                                            <option value="litron">Coca-Cola Litro</option>
                                            <option value="3lt">Coca-Cola 3Lt</option>
                                        </select>
                                        <div class="cantidadComidita col-4 d-flex ">
                                            <button class="masMenos bg-danger-subtle ">-</button>
                                            <input class="col-3 " type="number" name="" id="">
                                            <button class="masMenos bg-success-subtle  ">+</button>
                                        </div>
                                        <button class="bg-success">Agregar</button>
                                        
                                    </div>
                                    
                                    
                                </div>
                                <div class="modal-body cuerpesitoModal " id="cuerpesitoModal">
                                    
                                </div>
                                <div class="modal-footer colorsitoModal">
                                    <button type="button" class="btn btn-primary " data-bs-dismiss="modal">Espera</button>
                                    <button type="button" class="btn btn-success ">Crear Pedido</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    `
    pausita.insertAdjacentHTML("beforeend",modalcito)
}