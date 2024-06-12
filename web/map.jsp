<%-- 
    Document   : map
    Created on : 7 Jun 2024, 10:21:36 pm
    Author     : User
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html class="h-100 m-0 p-0">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Map</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
        <script src="https://kit.fontawesome.com/e5d1e9c2bf.js" crossorigin="anonymous"></script>
        <style>
            .searchBorder{
                border-width: 2px;
                border-color: black;
                background-color: white;
            }
            .sidenav {
                height: 400px;
                width: 0;
                overflow-x: hidden;
                overflow: hidden;
                transition: 0.5s;
                border-style: solid;
                border-color: black;
                border-width: 2px;
                border-top-right-radius:10px;
                border-bottom-right-radius:10px;
            }
            .clsbutton{
                right: 20px;
            }
        </style>
    </head>
    <body class="h-100 m-0 p-0">
        <header><jsp:include page="header.jsp"/></header>
        <div style="margin-top: 100px; width: 35%" class="z-1 position-absolute ms-5">
            <div class="row">
                <div class="col-md-12 h-25">
                    <form class="ms-2 form-horizontal w-100">
                        <div id="origin" style="display:none" class="input-group align-items-center justify-content-center">
                            <i class="fa-solid fa-circle-dot me-3 mb-2"></i>
                            <input type="text" id="from" placeholder="Origin" class="form-control mb-3 searchBorder">
                        </div>

                        <div class="input-group d-flex align-items-center justify-content-center">
                            <i class="fa-solid fa-location-dot me-3"></i>
                            <input type="text" id="to" class="form-control searchBorder" placeholder="Get Location">
                            <div class="input-group-append">
                                <button id="searchButton" class="btn btn-outline-secondary searchBorder" type="button" style="border-top-left-radius: 0;border-bottom-left-radius: 0;" onClick="showPlace()">
                                    <i class="fa fa-search"></i>
                                </button>
                            </div>
                            <span class="ms-2" onclick="openOriginInput()">
                                <i class="fa-solid fa-location-arrow"></i>
                            </span> 
                        </div>
                    </form>          
                </div>
            </div>
        </div>
        <div class="z-1 position-absolute" style="margin-top:300px" id="expandButton">
        </div>
        <div class="z-2 position-absolute" style="margin-top:300px" id="displayDetail">
        </div>
        <div class="h-100" id="map"></div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
        <script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDDfFI68giTw1X5a77tigXlzKMMqrGLYyg&libraries=places,marker&loading=async&callback=initMap"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <script src="map.js"></script>
    </body>
</html>
