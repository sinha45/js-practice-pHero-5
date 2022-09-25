

function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity) {

    const dieselPerLitre = 114;
    const petrolPerLitre = 130;
    const octanePerLitre = 135;

    const dieselPrice = dieselPerLitre * dieselQuantity;
    const petrolPrice = petrolPerLitre * petrolQuantity;
    const octanePrice = octanePerLitre * octaneQuantity;

    const sumOfAll = dieselPrice + petrolPrice + octanePrice;

    return sumOfAll;

}


// const allPrice = oilPrice(2, 4, 6);
// console.log(allPrice);

