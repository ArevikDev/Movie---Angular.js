app.service('dataService', function($http) {
    this.getData = function(method, url) {
        return $http({
            method: method,
            url: url,
            params: 'limit=10, sort_by=created:desc',
            headers: {'Authorization': '34a3e2ab5a032c7e4ede7b8c9f36b0af'}
        }).then(function success(response) {
            return response;
        }, function error(response) {
            console.log(response);
            return null ;
        })
    }
});
