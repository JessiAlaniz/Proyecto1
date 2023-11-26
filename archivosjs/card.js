
export const cardComp = (image,titulo,texto,precio,id) =>{ 

return ` 
    <div class="col">
        <div class="card my-2" id="cards">
            <img src="${image}" alt="item">
            <div class="card-body" >
                <h5 class="card-title" id="titleC">${titulo} </h5>
                <p class="card-text textC" id="textC">${texto}</p>
            </div>   
            <div class="card-footer">
                <div class="row text-center">
                    <div class="col">
                        <p class="price" id="priceC">$${precio}</p>
                    </div>
                    <div class="col">
                        <input type="number" class="form-control numericUpDown" id="cantidadC" value="0" placeholder="0" min="0" max="10" step="1" id="cantidadC">
                    </div>
                    <div class="col-6 carritobtn">
                    <button class="btn btn-success" data-number="agregar" id="${id}">Agregar al carrito</button>                                  
                    </div>                   
                </div>                      
            </div>
        </div>
    </div>
`}


