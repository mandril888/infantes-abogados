angular.module( 'homeService', [ ] )
    .factory('homeService', function($http) {
        var urlOne = 'https://xxxxxxxx<SEARCH>';
        function getInfo ( objToSearch ) {
            var urlTwo = urlOne.replace('<SEARCH>', objToSearch)
            return $http.get(urlTwo);
        }
        return {
            getInfoBeer : getInfoBeer
        }
    })