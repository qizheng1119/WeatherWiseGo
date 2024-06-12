<%-- 
    Document   : setting
    Created on : 12 Jun 2024, 9:04:08 pm
    Author     : User
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
        <title>User Profile</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    </head>
    <body class="bg-gray-100 min-h-screen flex flex-col">
        <header><jsp:include page="header.jsp"/></header>
        <div class="bg-gray-800 text-white flex justify-between items-center p-4">
            <span>User 12344</span>
            <span><img src="profile-icon.png" alt="Profile Icon" class="w-10 h-10 rounded-full"></span>
        </div>
        <div class="w-auto h-auto flex flex-grow items-center justify-center">
            <div class="bg-white w-4/5 rounded-lg shadow-lg flex overflow-hidden mt-4">
                <!-- Left Container -->
                <div class="bg-blue-200 w-1/5 m-4 p-6 flex flex-col justify-between rounded-lg">
                    <div>
                        <h1 class="text-2xl font-bold mb-4">Profile</h1>
                        <div class="flex items-center justify-between mb-4">
                            <button class="w-3/4 bg-blue-500 text-white py-2 px-4 rounded-lg">
                                Setting
                            </button>
                            <span class="material-icons ml-2">settings</span>
                        </div>
                        <div class="flex items-center justify-between mb-4">
                            <button class="w-3/4 bg-blue-500 text-white py-2 px-4 rounded-lg">
                                Notification
                            </button>
                            <span class="material-icons ml-2">notifications</span>
                        </div>
                    </div>
                    <button class="w-full bg-red-500 text-white py-2 rounded-lg">Log out</button>
                </div>
                <!-- Right Container -->
                <div class="w-4/5 p-6 flex flex-col items-center">
                    <img src="profile-icon.png" alt="User Image" class="w-20 h-20 rounded-full mb-4">
                    <h2 class="text-2xl font-bold mb-6">User 12344</h2>
                    <div class="bg-blue-100 p-4 rounded-lg w-full">
                        <p class="mb-2"><strong>Email:</strong> yowoo.gmail.com</p>
                        <p><strong>Phone No.:</strong> 0192817777</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center mt-6 text-sm text-gray-600">
            &copy; 2024 Dragon team
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
        <script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
        <script src="setting.js"></script>
    </body>
</html>
