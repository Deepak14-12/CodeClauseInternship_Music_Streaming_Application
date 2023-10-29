<?php

session_start();

include("db_connect.php");
$msg = false;

if (isset($_POST['user_name'])) {
    $user_name = $_POST['user_name'];
    $user_password =$_POST['user_password'];
     
    $query = "select * from user where user = '".$user_name."'  AND password = '".$user_password."' limit 1";
    $result = mysqli_query($con,$query);

    if (mysqli_num_rows($result) == 1) {
        header('location: index.html');
    } else {
        $msg= "Incorrect Password Or Username";
    }
    
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
    <link rel="stylesheet"  href="style1.css">
    <title>login</title>
</head>
<body>
    <header>
        <div class="left_b1">
            <div class="content">
                <form method="post">
                    <h3>Login</h3>
                    <div class="card">
                    <label for="name">Name:</label>
                    <input type="text" name="user_name" placeholder="enter username" required>
                </div>
                <div class="card">
                    <label for="password">Password:</label>
                    <input type="password" name="user_password" placeholder="enter password" required>
                </div>
                <input type="submit" value="login" class="submit">
                <div class="check">
                    <input type="checkbox" name="" id=""><span>Remember Me</span>
                </div>
                <p>Don't have a account ? <a href="signup.php">SignUp</a></p>
            </form>
            </div>
        </div>
        <div class="right_b2">
            <img src="" alt="">
            <!-- <h3>Incorrect Password</h3> -->
        <?php
         echo ('<h3>'.$msg.'</h3>')
        ?>
        </div>
    </header>
</body>
</html>