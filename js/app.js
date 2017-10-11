var app = angular.module('movieApp',[]);
var apiKey = 'd688c5883026c231c9967198900b57bf';

app.controller('movieGetInfo', function($scope, $http) {

    $http.get("https://api.themoviedb.org/3/genre/movie/list?api_key="+apiKey)
        .then(function(response) {
            $scope.genres = response.data;
            console.log($scope.genres);
        });

    $scope.getMovies = function(id){
       var url = 'https://api.themoviedb.org/3/genre/'+id+'/movies?api_key='+apiKey+'&language=en-US';
    $http.get(url)
            .then(function(response) {
                $scope.listByGenre = response.data;
                console.log($scope.listByGenre);
            });
    }
})
