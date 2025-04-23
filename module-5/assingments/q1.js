// Create a validation class similar to ‘yup’ and add validations for required, min and max
// for strings. Expose an isValid method that returns true or false based on the argument
// passed


class Validator{
  
  min(min){
    this.min = min
    return this
  }

  max(max){
    this.max = max
    return this
  }

  required(){
    this.required = true
    return this
  }

  isValid(string){
    const strLength = string.length
    if (strLength < this.min || strLength < this.min || strLength === 0 ){
      return false;
    } else {
      return true;
    }
  };

}

const schema = new Validator()
  .required()
  .min(3)
  .max(10);

schema.isValid('') // false
schema.isValid('m') // false

schema.isValid('Prem') // true
