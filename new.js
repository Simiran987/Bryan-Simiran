function findDigits(n){
    
    let s = (n+"").split('');
    let counter = 0;
    
    for(let i = 0;i<s.length;i++){
      if(n%s[i]===0){
        counter++;
       
      }
    }
      return counter;
}

   console.log(findDigits(10))
 

   function utopianTree(n) {
    // Write your code here
let height = 1
let cycle = 1
while(cycle<=n){
    if(cycle%2!==0){
        height*=2
    }
    else{
        height++
    }
    cycle++
}
return height
}