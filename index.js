const scuberHq = 42;
function distanceFromHqInBlocks(location) {
  const a = location - scuberHq;
  const b = scuberHq - location;
  if (location > scuberHq) {
    // console.log(a);
    return a;
  } else if (scuberHq > location) {
    // console.log(b);
    return b;
  } else {
    return 0;
  }
}
// distanceFromHqInBlocks(location);

function distanceFromHqInFeet(location) {
    const c = distanceFromHqInBlocks(location)*264;
    return c;
}
function distanceTravelledInFeet(start, destination){
    const startingBlockInFeet = start * 264;;
    const endingBlockInFeet = destination * 264;
    const totalDistance = endingBlockInFeet - startingBlockInFeet;
    const totalDistance2 = startingBlockInFeet-endingBlockInFeet;
    if(start>destination){
        return totalDistance2;
    }
    return totalDistance;
}
function calculatesFarePrice(start, destination){
    const dist = distanceTravelledInFeet(start, destination);
    let fare;
    if (dist<400){
        fare = 0;
        return fare;
    }
    else if (dist>400 && dist<2000){
       fare = (dist-400)*0.02;
       return fare;
    }
    else if(dist>2000 && dist<2500){
        fare = 25;
        return fare;
    }
    else if(dist>2500){
        return 'cannot travel that far';
    }
}

