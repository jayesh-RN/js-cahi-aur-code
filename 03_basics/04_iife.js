// Immediately invoked function executed

(function chai(){
    console.log(`DB CONNECTED`)
})();

// for writing two iife we have to write ";" to specify execution context 

// usess - for iife and also to avoid global scope pollution and etc
// () () // one is for declaration and other is for execution

((name)=>{
    console.log(`DB connected TWo ${name}`)
})('jayesh')