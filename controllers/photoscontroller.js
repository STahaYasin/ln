var app = angular.module("myApp", []);

app.controller("photocontroller", function($scope, $http, $location){
    var data = [
        {
            url: "_1.jpg",
            width: 350,
            height: 233,
            top: 0,
            left: 0
        },
        {
            url: "_2.jpg",
            width: 350,
            height: 228,
            top: 0,
            left: 0
        },
        {
            url: "_3.jpg",
            width: 350,
            height: 234,
            top: 0,
            left: 0
        },
        {
            url: "_4.jpg",
            width: 350,
            height: 232,
            top: 0,
            left: 0
        },
        {
            url: "_5.jpg",
            width: 350,
            height: 279,
            top: 0,
            left: 0
        },
        {
            url: "_6.jpg",
            width: 350,
            height: 233,
            top: 0,
            left: 0
        },
        {
            url: "_7.jpg",
            width: 350,
            height: 232,
            top: 0,
            left: 0
        },
        {
            url: "_8.jpg",
            width: 350,
            height: 234,
            top: 0,
            left: 0
        },
        {
            url: "_4.jpg",
            width: 350,
            height: 232,
            top: 0,
            left: 0
        },
        {
            url: "_10.jpg",
            width: 350,
            height: 274,
            top: 0,
            left: 0
        },
        {
            url: "_11.jpg",
            width: 350,
            height: 278,
            top: 0,
            left: 0
        },
        {
            url: "_12.jpg",
            width: 2040,
            height: 1408,
            top: 0,
            left: 0
        },
        {
            url: "_1.jpg",
            width: 350,
            height: 233,
            top: 0,
            left: 0
        },
        {
            url: "_2.jpg",
            width: 350,
            height: 228,
            top: 0,
            left: 0
        },
        {
            url: "_3.jpg",
            width: 350,
            height: 234,
            top: 0,
            left: 0
        },
        {
            url: "_4.jpg",
            width: 350,
            height: 232,
            top: 0,
            left: 0
        },
        {
            url: "_5.jpg",
            width: 350,
            height: 279,
            top: 0,
            left: 0
        },
        {
            url: "_6.jpg",
            width: 350,
            height: 233,
            top: 0,
            left: 0
        },
        {
            url: "_7.jpg",
            width: 350,
            height: 232,
            top: 0,
            left: 0
        },
        {
            url: "_8.jpg",
            width: 350,
            height: 234,
            top: 0,
            left: 0
        },
        {
            url: "_4.jpg",
            width: 350,
            height: 232,
            top: 0,
            left: 0
        },
        {
            url: "_10.jpg",
            width: 350,
            height: 274,
            top: 0,
            left: 0
        },
        {
            url: "_11.jpg",
            width: 350,
            height: 278,
            top: 0,
            left: 0
        },
        {
            url: "_12.jpg",
            width: 2040,
            height: 1408,
            top: 0,
            left: 0
        },
        {
            url: "_1.jpg",
            width: 350,
            height: 233,
            top: 0,
            left: 0
        },
        {
            url: "_2.jpg",
            width: 350,
            height: 228,
            top: 0,
            left: 0
        },
        {
            url: "_3.jpg",
            width: 350,
            height: 234,
            top: 0,
            left: 0
        },
        {
            url: "_4.jpg",
            width: 350,
            height: 232,
            top: 0,
            left: 0
        },
        {
            url: "_5.jpg",
            width: 350,
            height: 279,
            top: 0,
            left: 0
        },
        {
            url: "_6.jpg",
            width: 350,
            height: 233,
            top: 0,
            left: 0
        },
        {
            url: "_7.jpg",
            width: 350,
            height: 232,
            top: 0,
            left: 0
        },
        {
            url: "_8.jpg",
            width: 350,
            height: 234,
            top: 0,
            left: 0
        },
        {
            url: "_6.jpg",
            width: 350,
            height: 233,
            top: 0,
            left: 0
        },
        {
            url: "_10.jpg",
            width: 350,
            height: 274,
            top: 0,
            left: 0
        },
        {
            url: "_11.jpg",
            width: 350,
            height: 278,
            top: 0,
            left: 0
        },
        {
            url: "_12.jpg",
            width: 2040,
            height: 1408,
            top: 0,
            left: 0
        },
        {
            url: "_1.jpg",
            width: 350,
            height: 233,
            top: 0,
            left: 0
        },
        {
            url: "_2.jpg",
            width: 350,
            height: 228,
            top: 0,
            left: 0
        },
        {
            url: "_3.jpg",
            width: 350,
            height: 234,
            top: 0,
            left: 0
        },
        {
            url: "_4.jpg",
            width: 350,
            height: 232,
            top: 0,
            left: 0
        },
        {
            url: "_5.jpg",
            width: 350,
            height: 279,
            top: 0,
            left: 0
        },
        {
            url: "_6.jpg",
            width: 350,
            height: 233,
            top: 0,
            left: 0
        },
        {
            url: "_7.jpg",
            width: 350,
            height: 232,
            top: 0,
            left: 0
        },
        {
            url: "_8.jpg",
            width: 350,
            height: 234,
            top: 0,
            left: 0
        },
        {
            url: "_6.jpg",
            width: 350,
            height: 233,
            top: 0,
            left: 0
        },
        {
            url: "_10.jpg",
            width: 350,
            height: 274,
            top: 0,
            left: 0
        },
        {
            url: "_11.jpg",
            width: 350,
            height: 278,
            top: 0,
            left: 0
        },
        {
            url: "_12.jpg",
            width: 2040,
            height: 1408,
            top: 0,
            left: 0
        }
    ];
    $scope.photos = [];
    
    $scope.getPhotos = function(){        
        var arr = [0, 0, 0, 0, 0, 0];
        var rowwidth = document.getElementById("container").clientWidth / arr.length;
        
        for(var i = 0; i < data.length; i ++){
            var xpos = -1;
            var xposv = -1;
            for(var x = 0; x < arr.length; x ++){
                if(xposv == -1 || arr[x] < xposv){
                    xposv = arr[x];
                    xpos = x;
                }
            }
            var w = data[i].width;
            var h = data[i].height;
            
            h = (rowwidth / w) * h;
            w = rowwidth;
            
            var obj = {
                url: data[i].url,
                width: w,
                height: h,
                top: arr[xpos],
                left: (rowwidth * xpos)
            };
            
            $scope.photos.push(obj);
                
            arr[xpos] += (h + 5);
        }
        console.log($scope.photos);
        console.log("array na for loop " + arr);
    }
    $scope.getPhotos();
});