//******radianToDegree******//

function radianToDegree(radian) {
    let degree = radian * (180 / 3.1416); //formula of radianToDegree
    return degree;
}

// let result = radianToDegree(10);
// console.log(result);



//***isJavaScriptFile***//



function isJavaScriptFile() {

    const javascript = 'script.js';
    const imageFile = 'image.png';

    console.log(javascript.endsWith('.js'));
    console.log(imageFile.endsWith('.img'));


}

// isJavaScriptFile();



//****oilPrice****//


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



//****publicBusFare****//


function publicBusFare(totalPerson) {
    const bus = 50;
    const microBus = 11;
    const forPublicBusFare = 250;

    const forPublicBus = totalPerson - (bus + microBus);

    const totalPublicBusFare = forPublicBus * forPublicBusFare;

    return totalPublicBusFare;


}

// const total = publicBusFare(63);
// console.log(total);




//****isBestFriend****//


const bestBuddy1 = [{ name: "abul", friend: "babul" },
{ name: "babul", friend: "abul" }];

const bestBuddy2 = [{ name: "abul", friend: "kabul" },
{ name: "kabul", friend: "sabul" }];

function isBestFriend(bestFriend1, bestFriend2) {
    const a = bestFriend1[0].name;
    const b = bestFriend1[0].friend;
    const c = bestFriend1[1].name;
    const d = bestFriend1[1].friend;

    const e = bestFriend2[0].name;
    const f = bestFriend2[0].friend;
    const g = bestFriend2[1].name;
    const h = bestFriend2[1].friend;

    let friend1 = '';
    let friend2 = '';

    if (a == d && b == c) {
        friend1 = 'true';
    }
    else {
        friend1 = 'false';
    }

    if (e == h && f == g) {
        friend2 = 'true';
    }
    else {
        friend2 = 'false';
    }
    const friend3 = friend1 + "\n" + friend2;
    return friend3;

}

const bestFriendOrEnemy = isBestFriend(bestBuddy1, bestBuddy2);
console.log(bestFriendOrEnemy);

