function distanceFromHqInBlocks(blocks) {
  if (blocks < 42){
  return (42 - blocks)
  }
  else {
  return (blocks - 42)
  }
}
console.log(distanceFromHqInBlocks(43))

function distanceFromHqInFeet(blocks){
  return distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet(start, destination){
    if (start > destination){
        return (start - destination) * 264
    }
    else {
        return (destination - start) * 264
    }
}
console.log(distanceTravelledInFeet(264));

function calculatesFarePrice(start, destination){
    if (distanceTravelledInFeet(start, destination) <= 400){
        return (0)
    }
    else if (distanceTravelledInFeet(start,destination) > 400 && distanceTravelledInFeet(start, destination) <= 2000){
        return (2.56)
    } 
    else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) <= 2499){
    return (25)
    }
    else if (distanceTravelledInFeet(start, destination) > 2500){
    return 'cannot travel that far'
    }
}