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

            //this.toDoList.splice(position, 1);
            this.toDoList = this.toDoList.filter((_, index) => index !== position);
 
        },

        //MILESTONE 3
        addElement() {

            if (this.addedItem !== '') {

                const plusItem = {
                    text: this.addedItem,
                    done: false,
                }
    
                this.toDoList.push(plusItem);
                this.addedItem = '';

            }

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