let a:number[]=new Array(1,2,5,7,9)
let result:number[]=new Array();


function mbl (b : number[]){

    for (let i = 0; i < b.length; i++) {

        result.push(b[i]*b.length)
    
    }

    console.log(result);

}

        

mbl(a);