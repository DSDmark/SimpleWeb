<?php include 'header.php'; ?>
<div id="main-content">
<div class="container">
<div class="row">
<div class="col-md-8">
<!-- post-container -->
<div class="post-container">
<?php 
include "config.php";
if(isset($_GET['search'])&!empty($_GET['search'])){
$search_item = mysqli_real_escape_string($conn,$_GET['search']);
?> 
<h2 class="page-heading">Search : <?php echo $search_item?></h2>
<div class="post-content">
<?php
if(isset($_GET['page'])){
$page = $_GET['page'];
}else{
$page = 1;
}
$limit = 3;
$offset = ($page - 1)*$limit;
$sql = "SELECT * FROM post LEFT JOIN user ON post.author = user_id LEFT JOIN category ON post.category = category.category_id WHERE post.title LIKE '%{$search_item}%' OR post.description LIKE '%{$search_item}%' LIMIT {$offset},{$limit}";

$result = mysqli_query($conn,$sql) or die("Query Feild.");

if(mysqli_num_rows($result)>0){
while($row = mysqli_fetch_assoc($result)){
?>
<div class="row">
<div class="col-md-4">
<a class="post-img" href="single.php?id=<?php echo $row['post_id'];?>"><img src="admin/upload/<?php echo $row['post_img'];?>" alt=""/></a>
</div>
<div class="col-md-8">
<div class="inner-content clearfix">
<h3><a href='single.php?id=<?php echo $row['post_id'];?>'><?php echo $row['title'];?></a></h3>
<div class="post-information"> 
<span>
<i class="fa fa-tags" aria-hidden="true"></i>
<a href='category.php?cid=<?php echo $row['category_id'];?>'><?php echo $row['category_name'];?></a>
</span>
<span>
<i class="fa fa-user" aria-hidden="true"></i>
<a href='author.php?aid=<?php echo $row['author'];?>'><?php echo $row['username'];?></a>
</span>
<span>
<i class="fa fa-calendar" aria-hidden="true"></i>
<?php echo $row['post_date'];?>
</span>
</div>
<p class="description">
<?php echo $row['description'];?>
</p>
<a class='read-more pull-right' href='single.php?id=<?php echo $row['post_id'];?>'>read more</a>
</div>
</div>
</div>
<?php
}
}else{
    echo "<p style='color:red;font-size:20px;text-align:center;'>Search not found.</p>";
}
?>
<?php
$sql1 = "SELECT * FROM post WHERE post.title LIKE '%{$search_item}%' OR post.description LIKE '%{$search_item}%'";
$result1 = mysqli_query($conn,$sql1) or die("Connot Connect.");
if(mysqli_num_rows($result1)>0){
$totle_record = mysqli_num_rows($result1);
$totle_page = ceil($totle_record/$limit);
echo " <ul class='pagination'>";
for($i=1;$i<=$totle_page;$i++){
if($page == $i){
$active = "style='background:#337ab7;'";
}else{
$active = "";
}
echo "<li><a $active href='search.php?search=".$search_item."&page=".$i."'>".$i."</a></li>";       
}
}
?>
</ul>
</div>
<?php
}else{
echo "<p style='font-size:20px;color:red;text-align:center;'>Record Not Found</p>";
}
?>
</div>
<!-- /post-container -->
</div>
<?php include 'sidebar.php'; ?>
</div>
</div>
</div>
<?php include 'footer.php'; ?>
