'use strict';

const tasks = [
    { 
        name: 'Recoger setas en el campo', 
        completed: true 
    },
    { 
        name: 'Comprar pilas', 
        completed: true 
    },
    { 
        name: 'Poner una lavadora de blancos', 
        completed: true 
    },
    {
        name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
        completed: false,
    },
];

    const listContainer = document.querySelector('.list__container');

    /* console.log(tasks[1].name); */

    // Mostrar una frase que muestre cuantas tareas hay
    /* Primero vamos a pintar una tarea, solo una, en una lista de HTML. A continuación vamos a preparar una clase que la modifique, de manera que si fuera una tarea completada completed: true, el texto aparezca tachado. */

    const list = `
                <ul>
                    <li>
                        ${tasks[1].name}
                    </li>
                </ul>
                `;

    listContainer.innerHTML = list;

    if (tasks[1].completed === true) {
        listContainer.classList.add('cross-out');
    } 

    // Pintar todas las tareas en pantalla
    /* for (let item of tasks) {
        const list = `
                <ul>
                    <li>
                        ${item.name}
                    </li>
                </ul>
                `;
        listContainer.innerHTML = list;
    } */

    // Tachar las ya realizadas

    // Permitir marcar una tarea como completa o incompleta