import { getData } from "../localStorage/localStorage.js";
import { setData } from "../localStorage/localStorage.js";
import { deleteData } from "../localStorage/localStorage.js";

let body = document.getElementById("c-container")
let body1 = document.getElementById("idDatos")

const compras = (titulo, precio, cantidad, id) => {

return `
<tr>
<td scope="row">${titulo}</td>
<td>${precio}</td>
<td>${cantidad}</td>
<td style="display: flex;
align-items: center;
justify-content: center;"><button type="submit" class="btn btn-danger" data-number="eliminar" id="${id}">Eliminar</button></td>

</tr>

`}

const datos = (total) => {

    return `

    <div class="card text-bg-dark mb-3 mt-5">
    <div class="card-header">Datos para la entrega</div>
    <div class="card-body">
        <form class="row g-3">
            <div class="col-md-6">
              <label for="inputLDireccion" class="form-label">Direccion</label>
              <input type="text" class="form-control" id="inputDireccion" placeholder="Direccion" required>
            </div>
            <div class="col-md-3">
              <label for="inputLTelefono" class="form-label">Numero de telefono</label>
              <input type="text" class="form-control" id="inputTelefono" placeholder="Numero de telefono" required>
            </div>
            <div class="col-md-4">
              <label for="inputLCategoria" class="form-label">Provincia</label>
              <select id="inputCategoria" class="form-select" required>
                <option selected>Cordoba</option>
                <option>Buenos aires</option>
                <option>Mendoza</option>
              </select>
            </div>
            <div class="col-md-3">
              <label for="inputLLocalidad" class="form-label">Localidad</label>
              <input type="text" class="form-control" id="inputLocalidad" placeholder="Localidad" required>
            </div>
            <div class="col-md-10">
              <label for="inputLObservaciones" class="form-label">Observaciones</label>
              <textarea cols="60" rows="2" type="text" class="form-control" placeholder="Escribe aqui una observacion" ></textarea>
            </div>
            <div class="col-md-3">
              <label for="inputLTotal" class="form-label">Monto total a pagar</label>
              <input type="price" class="form-control" id="inputTotal" value="$${total}" placeholder="Monto total a pagar" >
            </div>
            <div class="col-12">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="gridCheck" required>
                <label class="form-check-label" for="gridCheck">
                  Acepto terminos y condiciones.
                </label>
              </div>
            </div>
            <div class="col-12 d-flex justify-content-start">
              <button type="submit" class="btn btn-success p-3" data-number="comprar">Comprar</button>
            </div>
          </form>
      </div>
    </div>
    `}


    
    
    
    window.addEventListener('load', event =>{
        const prod = getData('Productos')
        
        let total = 0;
        const eProd = prod.map(e=>{

            let subtotal = e.cantidad * e.price
            
            total= total + subtotal
    
            
            return compras(e.title, e.price, e.cantidad, e.id)
            
            
        }).join('')
        body1.innerHTML= datos(total.toLocaleString())
        body.innerHTML = eProd
        
    })
    
    
    window.addEventListener('click', event => {
    
        const items = getData('Productos')
    
        if(event.target.dataset.number == "eliminar")
        {
            const res = items.findIndex(e => e.id == event.target.id)
            items.splice(res, 1)
         
            setData('Productos', items)
            window.location.href ='../carrito.html'
        }
    
    })
    
    
    window.addEventListener('click', event => {
    
        console.dir(event.target.dataset.number)
    
        if(event.target.dataset.number == "comprar")
        {
            deleteData('Productos')
        }
    
    })
    