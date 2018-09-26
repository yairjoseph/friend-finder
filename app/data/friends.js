var friends = [
    {
        name: "Ahmed",
        photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        scores: [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    },
    {
        name: "yair",
        photo: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjcqKumvtfdAhUdHzQIHbxmDXQQjRx6BAgBEAU&url=https%3A%2F%2Fmilkandeggs.com%2Fproducts%2Fbanana-dole&psig=AOvVaw14sFTw4LP2Rv3UtCNRY5xe&ust=1538010640850703",
        scores: [
            2,
            1,
            4,
            4,
            3,
            1,
            1,
            5,
            2,
            1
        ]
    },
    {
        name: "kevin",
        photo: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwi57cu8vtfdAhVcCDQIHasSBrUQjRx6BAgBEAU&url=https%3A%2F%2Fwww.adagio.com%2Fflavors%2Fmango.html&psig=AOvVaw1R-pNrVlsT8JMOXzjJ4ydz&ust=1538010698330215",
        scores: [
            2,
            1,
            4,
            3,
            1,
            4,
            1,
            5,
            3,
            2
        ]
    }

];

var currentInput = [
    {
        name: "vernie",
        photo: "www.vernie.com",
        scores: [
            1,
            5,
            3,
            4,
            2,
            1,
            2,
            1,
            5,
            2
        ]
    }
]
var friendArr = [];
module.exports = friends;
for (var i = 0; i < friends.length; i++) {
    //   console.log(friends[i].scores);
    var friendsScore = friends[i].scores;
    // console.log(friendsScore);
    var total = 0;
    for (var g = 0; g < friendsScore.length; g++) {
        // console.log(friendsScore[g]);
        total += Math.abs(currentInput[0].scores[g] - friendsScore[g]);
    }
    // console.log(total);
    friendArr.push(total);
}
// console.log(friendArr)
var currentInput = [
    {
        name: "",
        photo: "",
        scores: [],
    }
]
var p = indexOfSmallest(friendArr);

function indexOfSmallest(a) {
    var lowest = 0;
    for (var i = 1; i < a.length; i++) {
        if (a[i] < a[lowest]) lowest = i;
    }
    return lowest;
}

friends[p].photo
