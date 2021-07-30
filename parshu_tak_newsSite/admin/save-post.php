<?php
  if(isset($_FILES['fileToUpload'])){
  $errors = array();

  $file_name = $_FILES['fileToUpload']['name'];
  $file_size = $_FILES['fileToUpload']['size'];
  $file_tmp = $_FILES['fileToUpload']['tmp_name'];
  $file_type = $_FILES['fileToUpload']['type'];
  $file_ext = end(explode('.',$file_name));   
  $file_extentions = array("jpg","png","jpeg");
 
  if(in_array($file_ext,$file_extentions) == false){
      $errors[] = "This Extentions File Is Not Allowed , Please chooes a JPG or PNG";
  }
  if($file_size > 2097152){
      $errors[] = "File size must be 2mb or lower.";
  }
  if(empty($errors)==true){
      move_uploaded_file($file_tmp,"upload/".$file_name);
  }else{
      print_r($errors);
      die();
  }

  }
  include "config.php";
  session_start();
  $post_title = mysqli_real_escape_string($conn,$_POST['post_title']);
  $postdecs = mysqli_real_escape_string($conn,$_POST['postdesc']);
  $category = mysqli_real_escape_string($conn,$_POST['category']);
  $date = date("D M,Y");
  $auther = $_SESSION['user_id'];
  

  $sql = "INSERT INTO post(title,description,category,post_date,author,post_img) VALUE('{$post_title}','{$postdecs}',{$category},'{$date}','{$auther}','{$file_name}');";
  $sql .= "UPDATE category SET post = post + 1 WHERE category_id = {$category}";
  if(mysqli_multi_query($conn, $sql)){
      header("location: {$hostname}admin/post.php");
}else{
    echo "<div class='alert alert-danger'>Query Failed.</div>";
  }
?>