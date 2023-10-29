<?php
session_start();

include("db_connect.php");
$msg = false;

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
   $user_name = $_POST['user_name'];
   $user_email = $_POST['user_email'];
   $user_password = $_POST['user_password'];
   $confirm_p = $_POST['confirm_p'];

  if (!empty($user_name)&& !empty($user_email) && !empty($user_password) && !is_numeric($user_name)) {
    if($user_password === $confirm_p){
        $query = "insert into user (user, email,password) VALUES ('$user_name','$user_email','$confirm_p')";
    mysqli_query($con, $query);
    header("Location: login.php");
    }else{
       $msg = "Password Not Matched"; 
    }
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
    <title>SignUp</title>
</head>
<body>
    <header>
        <div class="left_b1">
            <div class="content">
                <form method="post">
                    <h3>SignUp</h3>
                    <div class="card">
                    <label for="name">Name:</label>
                    <input type="text" name="user_name" placeholder="enter username" required>
                </div>
                <div class="card">
                    <label for="email">Email:</label>
                    <input type="email" name="user_email" placeholder="enter your email" required>
                </div>
                <div class="card">
                    <label for="password">Password:</label>
                    <input type="password" name="user_password" placeholder="enter password" required>
                </div>
                <div class="card">
                    <label for="confirm">Confirm Password:</label>
                    <input type="password" name="confirm_p" placeholder="enter password again" required>
                </div>
                <input type="submit" value="Sign Up" class="submit">
                <div class="check">
                    <input type="checkbox" name="" id=""><span>Remember Me</span>
                </div>
                <p>Have A Account ?<a href="login.php">Login</a></p>
            </form>
            </div>
        </div>
        <div class="right_b2">
            <img src="" alt="">
            <!-- <h3>Incorrect Password</h3> -->
            <?php
            echo ('<h3>'.$msg.'</h3>');
            ?>
        </div>
    </header>
</body>
</html>
