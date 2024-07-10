/*Recibimos una matriz de cadenas de texto. Tenemos que localizar la posición de la palabra "JavaScript" 
en la matriz y devolver su posición como un array de dos elementos: el índice de la fila y el índice de la columna.*/ 

const matrix = [
    ['HTML', 'CSS', 'JavaScript'],
    ['Java', 'C++', 'Python'],
    ['Ruby', 'Go', 'Swift']
  ]

  function findJavaScript(matrix) {
    for(let i = 0; i < matrix.length; i++){
      for(let j = 0; j < matrix[i].length; j++){
        if(matrix[i][j] === 'JavaScript'){
            console.log(`La posición de la palabra JavaScript esta en la fila ${i} y la columna ${j}`);
        }
    }}}

    findJavaScript(matrix);