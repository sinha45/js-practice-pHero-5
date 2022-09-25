
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



















