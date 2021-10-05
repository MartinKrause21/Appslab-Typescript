        let a: number = 5;
        let b: number = 5;
        let c: number = 4;
        if (((a == b)  && (b == c))) {
            console.log(3);
        }
        else if (((a == b) || ((b == c) || (a == c)))) {
            console.log(2);
        }
        else {
            console.log(0);
        }
        
    
