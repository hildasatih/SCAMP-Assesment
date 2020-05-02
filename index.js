

let fibSequence=(num=>{
    if(num===1){
        return 0
    }
     else if(num ===2){
        return 1
    
    }
    
    return fibSequence(num -1) + fibSequence(num -2);

   

});

console.log(fibSequence(9));
