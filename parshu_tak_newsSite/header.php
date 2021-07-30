<?php
include 'config.php';

$title_name = basename(($_SERVER['PHP_SELF']));

switch($title_name){
case 'category.php';   
if(isset($_GET['cid'])){
$sql_title = "SELECT category_name FROM category WHERE category_id = {$_GET['cid']}";
$result_title = mysqli_query($conn,$sql_title) or die("Query Feild.");
$page_title = mysqli_fetch_assoc($result_title);
$title = $page_title['category_name'];
}else{
$title = 'News Site';
}
break;

case 'author.php';
if(isset($_GET['aid'])){
$sql_title = "SELECT username FROM user WHERE user_id = {$_GET['aid']}";
$result_title = mysqli_query($conn,$sql_title) or die("Query Feild.");
$page_title = mysqli_fetch_assoc($result_title);
$title = 'Post By ' . $page_title['username'];
}else{
$title = 'News Site';
}
break;

case 'single.php';
if(isset($_GET['id'])){
$sql_title = "SELECT title FROM post WHERE post_id = {$_GET['id']}";
$result_title = mysqli_query($conn,$sql_title) or die("Query Feild.");
$page_title = mysqli_fetch_assoc($result_title);
$title = $page_title['title'];
}else{
$title = 'News Site';
}
break;

case 'search.php';
if(isset($_GET['search'])){
$title = $_GET['search'];
}else{
$title = 'News Site';
}
break;

default;
$title = 'News Site';
break;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
<title><?php echo $title?></title>
<!-- Bootstrap -->
<link rel="stylesheet" href="css/bootstrap.min.css" />
<!-- Font Awesome Icon -->
<link rel="stylesheet" href="css/font-awesome.css">
<!-- Custom stlylesheet -->
<link rel="stylesheet" href="css/style.css">
</head>
<body>
<!-- HEADER -->
<div id="header">
<!-- container -->
<div class="container">
<!-- row -->
<div class="row">
<!-- LOGO -->
<div class=" col-md-offset-4 col-md-4">
<a href="index.php" id="logo"><img src="images/news.jpg"></a>
</div>
<!-- /LOGO -->
</div>
</div>
</div>
<!-- /HEADER -->
<!-- Menu Bar -->
<div id="menu-bar">
<div class="container">
<div class="row">
<div class="col-md-12">
<?php
include "config.php";

if(isset($_GET['cid'])){
$cid = $_GET['cid'];
}

$sql = "SELECT category_name,category_id FROM category WHERE post > 0 ";
$result = mysqli_query($conn,$sql) or die ("Query Feild.");

if(mysqli_num_rows($result)>0){
$active = "";
?>
<ul class='menu'>
<li><a href='<?php echo $hostname;?>'>HOME</a></li>
<?php
while($row = mysqli_fetch_assoc($result)){
if(isset($_GET['cid'])){
if($row['category_id']==$cid){
$active = "style='background:#1e90ff;'";
}else{
$active = "";
}
}
echo  "<li><a {$active} href='category.php?cid={$row['category_id']}'>{$row['category_name']}</a></li>";
}
?>
<li><a href='<?php echo $hostname."admin";?>'>LOGIN</a></li>
</ul>
<?php
}
?>
</div>
</div>
</div>
</div>
<!-- /Menu Bar -->
