// Share a minimum four differentiation between regular function and arrow
// functions with one examples


// 1. this Binding
// Regular Function: Has its own this context which depends on how the function is called.
// Arrow Function: Does not have its own this; it lexically binds this from the surrounding scope.

// 2. Syntax and Conciseness
// Regular Function: More verbose; uses function keyword.
// Arrow Function: Shorter syntax, especially for small functions.

// 3. arguments Object
// Regular Function: Has access to the built-in arguments object.
// Arrow Function: Does not have its own arguments; must use rest parameters (...args) instead

// 4. Constructor Usage
// Regular Function: Can be used as constructors with the new keyword.
// Arrow Function: Cannot be used as constructors; will throw an error if used with new.