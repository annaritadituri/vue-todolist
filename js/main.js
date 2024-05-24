'use strict';

//////////////////////////////////////////////////////////

const { createApp } = Vue

  createApp({
    data() {
      return {

        toDoList: [
            {
                text: 'Comprare il pane',
                done: true,
            },

            {
                text: 'Spolverare',
                done: false,
            },

            {
                text: 'Leggere 10 pag',
                done: true,
            },
        ],

      }
    }
  }).mount('#app')