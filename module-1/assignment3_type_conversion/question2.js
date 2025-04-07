// 2. Do the same using switch case.

let age = 25;

switch(true){
  case (age <= 12): {
    console.log('child');
    break;
  }
  case (13 <= age && age <= 18): {
    console.log('teen')
    break;
  }
  default: {
    console.log('adult');
  }
}