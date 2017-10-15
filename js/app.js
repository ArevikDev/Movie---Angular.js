var app = angular.module('movieApp',["ngRoute"]);
var apiKey = 'd688c5883026c231c9967198900b57bf';

app.controller('movieGetInfo', function($scope, $http) {

    $http.get("https://api.themoviedb.org/3/movie/popular?api_key="+apiKey+'&language=en-US&page=1')
        .then(function(response) {
            $scope.movieList = response.data;
            console.log($scope.movieList);
        });
    $http.get("https://api.themoviedb.org/3/genre/movie/list?api_key="+apiKey)
        .then(function(response) {
            $scope.genres = response.data;
        });

    $scope.getMovies = function(id){
       var url = 'https://api.themoviedb.org/3/genre/'+id+'/movies?api_key='+apiKey+'&language=en-US';
        $http.get(url)
            .then(function(response) {
                $scope.movieDetails = null;
                $scope.movieList = response.data;
            });
    }

    $scope.deleteMovie = function(id, index){
        if($scope.movieList.results[index].id === id)
        $scope.movieList.results.splice(index, 1);

    }
    $scope.redirect = function(id){
        $http.get("https://api.themoviedb.org/3/movie/"+id+"?api_key="+apiKey)
            .then(function(response) {
                $scope.movieList = null;
                $scope.movieDetails = response.data;
                console.log($scope.movieDetails);
            });
        $http.get("https://api.themoviedb.org/3/movie/"+id+"/credits?api_key="+apiKey)
            .then(function(response) {
                $scope.movieCast = response.data.cast;
                console.log($scope.movieCast);
            });
        $http.get("https://api.themoviedb.org/3/movie/"+id+"/images?api_key="+apiKey)
            .then(function(response) {
                $scope.images = response.data;
                console.log($scope.images);
            });
    }
})

app.controller('movieDesc',["$scope", "$state", "$stateParams", function($scope, $state, $stateParams){
    $scope.id = $stateParams.id;
}])