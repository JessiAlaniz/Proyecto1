const url = 'http://127.0.0.1:5500/'
const datos = [
    {titulo:'Home', link: `${url}../home.html`},
    {titulo:'Mouse', link: `${url}../Mouse.html`},
    {titulo:'Tablet', link:`${url}../Tablet.html`},
    {titulo:'Notebook', link:`${url}../notebook.html`},
    {titulo:'Carrito de compras', link:`${url}../carrito.html`}     
]

export const navbarCmp = `
<nav class="navbar navbar-expand-lg bg-body-tertiary">
<i class="fa-solid fa-shop mx-2"></i>
<div class="container-fluid">
    <a href="../home.html" class="navbar-brand">MiE</a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollpase" aria-controls="navbarCollpase" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarCollpase">

        <ul class="navbar-nav">
            ${datos.map(e =>{
                return `
                <li class="nav-item">
                <a href="${e.link}" class="nav-link active">${e.titulo}</a>
               </li>`            
            }).join('')}
            <li class="nav-item">
            <a href="../index.html" class="position-absolute top-50 end-0 mx-3 translate-middle-y" role="button">
            <button  class="btn btn-danger ms-auto"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z"/>
                <path fill-rule="evenodd" d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
              </svg>
             </button>
             </a>
             </li>
        </ul>


    </div>

</div>

</nav>`