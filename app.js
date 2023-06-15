const contenedor = document.querySelector('#contentphp');


// document.querySelectorAll('.enlaces').forEach((val, id) => {
//  val.addEventListener('click', (e) => {
//     cargarPagina(e.target.dataset.urldestino);
//  });
// });

enlaces.forEach ((val, id) => {

    val.removeEventListener('click',cargarPagina);
    val.addEventListener('click', cargarPagina);
});



function cargarPagina(urldestino) { 
  var url = urldestino;


   fetch (url)
 .then(function(response) {
 if (response.ok){
    return response.text(); //respuesta convertida a texto plano
 }
 throw new Error('Error en la solicitud http');

 })

 .then(function(data) {
    contenedor.innerHTML = '';


    let html = new DOMParser().parseFromString (data, 'text/html');
    let js = document.createElement ('script');
    if (html.head.children.length > 0){
        js.src = html.head.children[0].src;
        js.defer
        document.head.appendChild(js);
    }
    contenedor.append(...html.body.children);
    
})

.catch(function(error) {
 console.log ('error: '+ error.message);

});

}

