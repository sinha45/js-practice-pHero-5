// function publicBusFare(total) {
//     const bus = 50;
//     const microBus = 11;

//     const publicBus = total - (bus + microBus);

//     const taka = publicBus * 250;

//     return taka;


// }

// const total = publicBusFare(63);
// console.log(total);

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