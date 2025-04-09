// 4. What happens when you add a for loop/while loop/switch case block inside a function
//    and use return instead of break?  -> Execution stops at return statement in case of switch statment

//    Do statements after the loop run? -> No, when used return in a loop inside function, the statements after return statement won't run;

//    What is the return value? whatever we return with return statement;

//    Can we pass a return value from within a loop? -> Yes

//    Can you return from inside an if block? -> Yes

//    What impact does that have? -> It gives better code reusability and control over the code execution/stoppage.

let logit = function(message){
  console.log(message);
};

let ageCategory = function (age) {
  switch(true){
    case(age <= 12): {
      return logit('child');
    }
    case(age >= 13 && age <= 18): {
      return logit('teen');
    }
    case(age > 18): {
      return logit('adult');
    }
  };
};

let ageCategory2 = function (age) {
  if (age <= 12){
    return logit('child');
  }else if (13 <= age && age <= 18){
    return logit('teen');
  }else {
    return logit('adult');
  };
};

let countTill = function(count){
  
  for(let i=1; i<=count; i++){ 
    
    if (i === 12){
      return logit('Reach count 12, returning here.')
    };
    
    logit(i); 
  };
  logit('End of countTill execution');

};

countTill();