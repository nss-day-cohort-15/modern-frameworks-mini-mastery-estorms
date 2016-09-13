"use strict"
console.log('factory connected')

app.factory("flowerFact", function($q, $http){
    let getFlowers = function() {
        return $q(function (resolve, reject){
            $http.get(`https://flower-power-angular.firebaseio.com/arrangements.json`)
            .success(function (flowers){
                resolve(flowers);
                console.log(flowers);
            })
            .error(function (error){
                reject(error);
            });
        });
    };
        return {getFlowers};

});
