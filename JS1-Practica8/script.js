const tareas = ['Práctica de Javascript', 'Ir al supermercado', 'Pasear al perro', 'Lavar los trastos'];

const lista = document.getElementById('lista-tareas');
// Creo ul y agrego al nav
const listaComiezo = document.createElement('ul');
lista.appendChild(listaComiezo);

for (let iterador = 0; iterador < tareas.length; iterador++) {
    // Creo li y los agregon al ul
    const listaElemento = document.createElement('li');
    listaComiezo.appendChild(listaElemento);

    // Creo input y agrego los atributos
    const botton = document.createElement('input');
    botton.setAttribute('type', 'checkbox');
    botton.setAttribute('id', `tarea-${iterador}`);

    // Creo label y agrego los atributos
    const tarea = document.createElement('label');
    tarea.setAttribute('for', `tarea-${iterador}`);
    tarea.innerHTML = tareas[iterador];

    // Agrego todo a los li
    listaElemento.appendChild(botton);
    listaElemento.appendChild(tarea);
}