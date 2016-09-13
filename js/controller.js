"use strict"
console.log('controller connected')
app.controller('flowerCtrl', function($scope, flowerFact) {
    flowerFact.getFlowers()
    .then(function(flowers){
        console.log(flowers)
        $scope.flowers = flowers;

    })

})

