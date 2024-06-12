<%-- 
    Document   : main
    Created on : 5 Jun 2024, 8:55:49 pm
    Author     : User
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

    <head>
        <title>Forecast</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            .weaBg{
                background-color: #BEBEBE;
                height: 90%;
            }
        </style>
    </head>

    <body id="gifBack">
        
        <div style="width: 100%;">
            <div style="height: 50vh;"></div>
            <div class="container-fluid">
                <div class="ps-5 pe-5 row">
                    <div class="col-lg-5">
                        <div class="h-100 container-fluid">
                            <div style="height: 10%">
                                Kuala Terengganu
                            </div>
                            <div class="ps-5 pe-5 weaBg pt-5 pb-5 d-flex align-items-center justify-content-center border rounded" id="currentWeather"></div>
                        </div>
                    </div>
                    <div class="col-lg-7">
                        <div class="container h-100 weaBg border rounded" >
                            <div class="row h-100" id="forecastWeather"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer>
        </footer>

    </body>

</html>
