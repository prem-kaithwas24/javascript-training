document.addEventListener('DOMContentLoaded', function(){
  
  let weather;
  console.log("Let weather before assignment: ", weather); // Winter

  weather = "Winter";
  console.log("Let weather after assignment: ", weather); // Winter

  const heigth; // Uncaught SyntaxError: Missing initializer in const declaration 
  console.log("Const height before assignment", heigth);
  
  heigth = 6.0; 
  console.log("Const height after assignment", heigth);


})