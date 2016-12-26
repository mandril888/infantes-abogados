
#Starting the project

**1.** Make a HTML document and insert Angular CDN, 'ng-app' to <html> tag and check that it works with a mathematical operation in the body (save it in the root):

~~~
    <!DOCTYPE html>
    <html lang="en" ng-app>
    <head>
        <meta charset="UTF-8">
        <title>Angular Web</title>
    </head>
    <body>
        {{ 3 + 3 }} <!-- must be 6 -->
        <script src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.6/angular.js'></script>
    </body>
    </html>
~~~


**2.** Think about the project and make folders to convert your project modular, then make different folders for:
>a. the differents pages of the web (modules)
    b. general JS
    c. SASS
    d. and a dist folder to compile with grunt the JSs and CSSs


**3.** Create a Git and GitHub folder to save your project.


**4.** Add the Gruntfile.js and package.json files in the root directory:
> a. You must init the package.json, insert the dependencies and the devDependencies.
> b.After create the Gruntfile.js and insert all the pluguins that you need. Then you must install all the dependences (pluguins) in the root directory with the cmd:

 ~~~
 npm init   // to create the package.json
 npm install // to install the dependencies
 grunt  //in cmd ruby to start whatching
 ~~~


**5.** Insert jQuery CDN, bootsrtap CDN and the js and css files created with grunt:

*[X] Be carefull with the order, always first the jQuery CDN!!*
~~~
<head>
    <script   src="https://code.jquery.com/jquery-3.1.0.min.js"   integrity="sha256-cCueBR6CsyA4/9szpPfrX3s49M9vUU5BgtiJj06wt/s="   crossorigin="anonymous"></script>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

    <link rel="stylesheet" href="dist/styles.css">
</head>
<body>
    <script src="dist/scripts.min.js"></script>
</body>
~~~

**6.** Add the meta info to take care the view ponit of small devices

~~~
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
~~~

#SASS

**1.** Create a main file (styles.scss) to @import "xxx"; all the .scss files.
**2.** The .scss files imported must start whith `_` to don't take care in the grunt compiling.


#HTML

Make an html document for every page that you want to create and save it in the related module folder.



#JS

###ANGULAR MODULES

**1.** Create a main module (app.js) to insert all the dependences in JS folder, and related with the ng-app;

~~~
<!DOCTYPE html>
<html lang="en" ng-app="myAngularWeb">
~~~

~~~
angular.module( 'myAngularWeb', [ ] )
~~~


**2.** Then add the dependences of the main module (app.ja), that are the differents controllers, configurations and services.

*[X] Be carefull with the order of the dependences!!*
~~~
angular.module( 'myAngularWeb', [ 'ngRoute', 'controllers', 'config', 'ngStorage', 'services' ] )
~~~

~~~
<script src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.6/angular-route.js'></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/ngStorage/0.3.6/ngStorage.min.js"></script>
~~~

>I add ngRoute to aply the routes of the config, and the ngStorage to aply $localStorage.

and create respective files in the JS folder :

- controllers.js
~~~
angular.module( 'controllers', [ 'homeModule', 'aboutModule' ] )
~~~

- config.js
~~~
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
~~~

- services
~~~
angular.module( 'services', [ 'homeService', 'aboutService' ] );
~~~


**3.** Now create the differents controller modules related with the different pages:

- homeModule.js
~~~
angular.module( 'homeModule', [ ] )
    .controller( 'homeController' , function ( $scope, $http, $localStorage, $routeParams, homeServices) {
    })
~~~

- aboutModule.js
~~~
angular.module( 'aboutModule', [ ] )
    .controller( 'aboutController' , function ( $scope, $http, $localStorage, $routeParams, aboutServices) {
    })
~~~


**4.** Now create the differents services related with the different pages:

- homeService.js
~~~
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
~~~

- aboutService.js
~~~
angular.module( 'aboutService', [ ] )
    .factory('aboutService', function($http) {
    })
~~~
