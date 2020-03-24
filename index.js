let cars = [
    {
        model: "mercedez",
        price: "Expensive",
    },
    {
        model: "probox",
        price: "Cheap",
    }
];
// create a map helper
let priceArray = cars.map(function(car){
    return car.price;
});
console.log(priceArray);