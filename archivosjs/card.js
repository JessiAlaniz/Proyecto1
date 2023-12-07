
export const cardComp = (image,titulo,texto,precio,id) =>{ 

return ` 

    <div class="card-group">
        <div class="card my-2" id="cards" >
            <img class="card-img-top" src="${image}" alt="Card image cap">
            <div class="card-body" >
                <h5 class="card-title" id="titleC">${titulo} </h5>
                <p class="card-text textC" id="textC">${texto}</p>
            </div>   
            <div class="card-footer">
                <div class="row text-left">
                    <div class="col-5">
                        <input type="number" class="form-control numericUpDown" id="cantidadC" value="0" placeholder="0" min="0" max="10" step="1" id="cantidadC">
                    </div>
                    <div class="col-7 carritobtn">
                        <button class="btn btn-success" data-number="agregar" id="${id}">Agregar al carrito</button>                                  
                    </div>               
                </div>
                <div class="row text-center mt-3">
                    <div class="col-12">
                    <h3 id="priceC">Precio: $${precio}</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>

`}


