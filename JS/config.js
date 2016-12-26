angular.module( 'config', [ ] )
    .config( function( $routeProvider ){
            $routeProvider
                .when('/',{
                    templateUrl: 'modules/home/home.html',
                    controller: 'homeController'
                })
                .when('/home',{
                    templateUrl: 'modules/home/home.html',
                    controller: 'homeController'
                })
                .when('/about',{
                    templateUrl: 'modules/about/about.html',
                    controller: 'aboutController'
                })
                .otherwise({ redirectTo: '/' }); ;
    })