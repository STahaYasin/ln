<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
        
        <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
        <link type="text/css" rel="stylesheet" href="css/default.css"/>
        
        <script>
            function goToPhotography(){
                window.location.pathname = "/askim/photograpy";
            }
            function goToGraphics(){
                window.location.pathname = "/askim/graphics";
            }
        </script>
        
    </head>
    <body>
        <centerbox>
           <h3>NAAM</h3>
            <button onclick="goToPhotography()">PHOTOGRAPHY</button>
            <button onclick="goToGraphics()">GRAPHICS</button>
        </centerbox>
    </body>
</html>