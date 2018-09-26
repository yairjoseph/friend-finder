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
            6,
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
            8,
            4,
            1,
            5,
            7,
            6
        ]
    }
    
];

module.exports = friends;

for(let i = 0; i < friends.length; i++){
    console.log(friends[i].scores)
}