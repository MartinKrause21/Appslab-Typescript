let a:number[] = new Array ( 2, 8, 7, 5);

let oddSum = 0;
let evenSum = 0; 

function warOddEven (a:number[]) {


    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 != 0) {
            oddSum = evenSum + a[i];
        }

        else {
            evenSum = evenSum + a[i];
        }

    }
    if (evenSum > oddSum) {
        console.log(oddSum);
    }
    else {
        console.log(evenSum);
    }
}

warOddEven (a);
