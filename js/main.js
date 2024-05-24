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
        addedItem: '',

      }

    },

    methods: {
        
        //MILESTONE 2
        removeElement(position) {
            this.toDoList.splice(position, 1);
        },

        //MILESTONE 3
        addElement(addedItem) {

            const plusItem = {
                text: addedItem,
                done: false,
            }

            this.toDoList.push(plusItem);

        },

        //BONUS 2
        checkItem(position) {

            if(this.toDoList[position].done === false) {
                this.toDoList[position].done = true;
            } else {
                this.toDoList[position].done = false;
            }
            
        }

    }
  }).mount('#app')