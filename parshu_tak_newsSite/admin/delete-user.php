<?php 
if($_SESSION['role'] == 0){
    include "config.php";
header("Location: {$hostname}admin/post.php");
}
 include "config.php";
 $user_id = $_GET['id'];
 $sql = "DELETE FROM user WHERE user_id = {$user_id}";
 if(mysqli_query($conn,$sql)){
     header("Location: {$hostname}admin/users.php");
 }
?>