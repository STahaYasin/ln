<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
        
        <link type="text/css" rel="stylesheet" href="../css/default.css"/>
        
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular-route.js"></script>
        
        <script src="../controllers/photoscontroller.js"></script>
    </head>
    <body ng-app="myApp" ng-controller="photocontroller" style="background-color:#fff">
        <header>
            <p>contact: +32 483 47 84 68      © 2017 Layla Naciri. All Rights Reserved.</p>
        </header>
        <navigation>
            <img src="../img/logotest.png"/>
            <nav>
                <button>test cat 1</button>
                <button>test cat 1</button>
                <button>test cat 1</button>
                <button>test cat 1</button>
                <button>test cat 1</button>
            </nav>
        </navigation>
        <main>
            <container id="container">
                <imagebox ng-repeat="photo in photos" style="left: {{photo.left}}px; top: {{photo.top}}px;">
                    <img src="../data/{{photo.url}}"/>
                </imagebox>
            </container>
        </main>
    </body>
</html>