function distanceFromHqInBlocks(block){
    let result = block - 42;
    if(result > 0){
        return result;
    }else{
        return result * -1;
    }
}
function distanceFromHqInFeet(block){
    let result = distanceFromHqInBlocks(block) * 264;
    if (result > 0){
        return result;
    }else{
        return result * -1;
    }
}
function distanceTravelledInFeet(start, stop){
    let result = (start - stop)  * 264;
    if(result > 0){
        return result;
    }else{
        return result * -1;
    }
}
function  calculatesFarePrice(start, destination){
    let result = Math.abs((start - destination) * 264);
    
    //let result = ((start - destination) * 264) -400;
    if (result < 400){
        return 0;
    }else if(result > 400 && result <= 2000){
        return (result - 400) * 0.02;
        //return result * 0.02;
    }else if(result > 2000 && result <= 2500){    
        return 25;
    }else if(result > 2500){        
        return 'cannot travel that far';
    }
}
