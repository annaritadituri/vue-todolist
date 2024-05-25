<!--
TRACCIA

Descrizione:
Rifare l'esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
3- creare un campo di testo per ricercare i task. la ricerca avviene ad ogni lettera inserita
-->

<!--
CREARE UN ARRAY LIST DI OGGETTI PER OGNI SINGOLA TODO
-->
-Creare un array "toDoList" di oggetti per ogni singola todo, con due proprietà: text, per il testo del todo; done, con valore true/false

<!--
MILESTONE 1
-->
-Creare un ul con all'interno un li nell'HTML
--Inserire un v-for per scorrere la toDoList nel li
---Usare il v-bind:class per aggiungere una classe "checked" nel caso in cui la proprietà "done" == true

<!--
MILESTONE 2
-->
-Aggiungere in methods removeElement(), che utilizza il metodo splice per rimuovere un elemento in una posizione precisa
--Aggiungere nell'HTML un button che richiama la funzione removeElement() al click

<!--
MILESTONE 3
-->
-Aggiungere nell'HTML un input sfruttando il v-model per salvare il testo digitato
--Creare un button con un evento click che scatena la funzione addElement()
---La funzione prende in input il testo scritto nel campo di input, crea un oggetto che andrà ad aggiungere all'array "toDoList" con il metodo push che avrà come valore della proprietà "text" l'input e come valore "done" di default false

<!--
BONUS 1
-->
-Aggiungere l'evento keyup che ascolta solo il tasto enter e scatena la stessa funzione del button "Aggiungi", addElement()

<!--
BONUS 2
-->
-Aggiungere all'elemento HTML span in cui è presente il testo del to-do, l'evento mousedown che scatena la funzione checkItem()
--La funzione controlla lo il valore della proprietà done dell'oggetto "item" e lo inverte

<!--
BONUS 3
-->
-Aggiungere all'elemento HTML input un v-model per l'elemento cercato
--Aggiungere l'evento keyup che passa in input l'e e scatena la funzione searchElement()
---La funzione crea un nuovo array di toDoList con il metodo filter e aggiunge solo gli elementi in cui c'è una corrispondenza con la lettera inserita
----Aggiungere l'evento keyup che ascolta solo il tasto enter e scatena la funzione clearInput() per svuotare il campo di input e concludere la ricerca
-----Aggiungere un button a cui diamo la stessa funzione dell'enter