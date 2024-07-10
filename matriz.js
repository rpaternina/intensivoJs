/*Recibimos una matriz de cadenas de texto. Tenemos que localizar la posición de la palabra "JavaScript" 
en la matriz y devolver su posición como un array de dos elementos: el índice de la fila y el índice de la columna.*/ 

const matrix = [
    ['HTML', 'CSS', 'JavaScript'],
    ['Java', 'C++', 'Python'],
    ['Ruby', 'Go', 'Swift']
  ]

  function findJavaScript(matrix) {

    //Con los bucles anidados puedo recorrer matrices
    for(let i = 0; i < matrix.length; i++){ //primero recorro las filas

      for(let j = 0; j < matrix[i].length; j++){ // Y despues las columnas

        if(matrix[i][j] === 'JavaScript'){ //pregunto si en la fila[i] columna [j] esta javascrip
            
            // por ultimo muestro la posición en la que este se encuentra
            console.log(`La posición de la palabra JavaScript esta en la fila ${i} y la columna ${j}`);
        }
    }}}

    findJavaScript(matrix);