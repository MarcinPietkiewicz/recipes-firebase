< !DOCTYPE html >
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <title>Databases (Firebase)</title>
        </head>
        <body>
            <h1>Databases (Firebase)</h1>



            <!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/6.6.0/firebase-app.js"></script>

            <!-- TODO: Add SDKs for Firebase products that you want to use
                 https://firebase.google.com/docs/web/setup#config-web-app -->
            
<script>
                // Your web app's Firebase configuration
                var firebaseConfig = {
                    apiKey: "AIzaSyA-Q8nt7tP95AIqfnWCdApAI7WN-pi_Lbg",
                authDomain: "chat1-f0f01.firebaseapp.com",
                databaseURL: "https://chat1-f0f01.firebaseio.com",
                projectId: "chat1-f0f01",
                storageBucket: "chat1-f0f01.appspot.com",
                messagingSenderId: "490904671393",
                appId: "1:490904671393:web:d63430e6959e02ef90cce0"
              };
              // Initialize Firebase
              firebase.initializeApp(firebaseConfig);
</script>

            <script src="sandbox.js"></script>
        </body>
    </html>