const batteryBatches = [4, 5, 3, 4, 4, 6, 5];


let totalBatteries = batteryBatches.reduce(function redd(total, currentValue){
    const newSum = total + currentValue ;
    return newSum
}, 0);


