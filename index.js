// Code your solution in this file!

//const hqblock=42

//const distanceFromHqInBlocks = function (pickupblock) {
    //return Math.abs(pickupblock-42)
//}
const hqblock=42
function distanceFromHqInBlocks(pickupblock){
return Math.abs(pickupblock-hqblock)
}

function distanceFromHqInFeet(pickupblock){
    let totalDistanceInfeet = distanceFromHqInBlocks(pickupblock)*264
    return totalDistanceInfeet
}

function distanceTravelledInFeet(startblock,endblock){
    return Math.abs(endblock-startblock)*264
}
function calculatesFarePrice(startblock, endblock) {
    let distanceInFeet = distanceTravelledInFeet(startblock,endblock)
    if (distanceInFeet<=400){
return 0
    }
    else if(distanceInFeet >400 && distanceInFeet<=2000){
return (distanceInFeet-400)*2/100
    }
    else if (distanceInFeet>2000 && distanceInFeet<2500){
        return 25
    }
    else 
    return 'cannot travel that far'
}

  // if (pickupblock<42){
        //return hqblock-pickupblock;}
        //else if (pickupblock>42){
           // return pickupblock-hqblock
           //returns the number of blocks given a value
 // }
 // distanceFromHqInBlocks(42,10)
 // let coveredDistanceInBlocks = distanceFromHqInBlocks(42,32)