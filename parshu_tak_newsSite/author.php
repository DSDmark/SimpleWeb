<?php include 'header.php'; ?>
<div id="main-content">
<div class="container">
<div class="row">
<div class="col-md-8">
<!-- post-container -->
<div class="post-container">
<?php
include "config.php";
$aid = $_GET['aid'];
$limit = 3;
if (isset($_GET['page'])) {
$page = $_GET['page'];
} else {
$page = 1;
}
$offset = ($page - 1) * $limit;

$sql1 = "SELECT * FROM post LEFT JOIN user ON post.author = user.user_id   WHERE user_id = {$aid} ";
$result1 = mysqli_query($conn, $sql1) or die("Couldn't connect to'");
$row1 = mysqli_fetch_assoc($result1);
?>
<h2 class="page-heading"><?php echo $row1['username']; ?></h2>
<?php

$sql = "SELECT * FROM post LEFT JOIN category ON post.category = category_id LEFT JOIN user ON post.author = user_id WHERE post.author = {$aid} ORDER BY post.post_id DESC LIMIT {$offset},{$limit}";
$result = mysqli_query($conn, $sql) or die("Query Feild");

if (mysqli_num_rows($result) > 0) {
while ($row = mysqli_fetch_assoc($result)) {
?>
<div class="post-content">
<div class="row">
<div class="col-md-4">
<a class="post-img" href="single.php?id=<?php echo $row['post_id']; ?>"><img src="admin/upload/<?php echo $row['post_img']; ?>" alt="" /></a>
</div>
<div class="col-md-8">
<div class="inner-content clearfix">
<h3><a href='single.php?id=<?php echo $row['post_id']; ?>'><?php echo $row['title']; ?></a></h3>
<div class="post-information">
<span>
<i class="fa fa-tags" aria-hidden="true"></i>
<a href='category.php?cid=<?php echo $row['category_id']; ?>'><?php echo $row['category_name']; ?></a>
</span>
<span>
<i class="fa fa-user" aria-hidden="true"></i>
<a href='author.php?aid=<?php echo $row['author']; ?>'><?php echo $row['username']; ?></a>
</span>
<span>
<i class="fa fa-calendar" aria-hidden="true"></i>
<?php echo $row['post_date']; ?>
</span>
</div>
<p class="description">
<?php echo substr($row['description'], 0, 100) . "..."; ?>
</p>
<a class='read-more pull-right' href='single.php?id=<?php echo $row['post_id']; ?>'>read more</a>
</div>
</div>
</div>
</div>
<?php
}
} else {
echo "<p style='color:red;font-size:2rem;text-align:center;'>Record Not Found</p>";
}
?>

<?php
if (mysqli_num_rows($result1) > 0) {
$totle_record = mysqli_num_rows($result1);
$totle_page = ceil($totle_record / $limit);

echo "<ul class='pagination'>";
if ($page > 1) {
echo "<li><a href='author.php?page=" . ($page - 1) . "&aid=$aid'>prev</a><li>";
}

for ($i = 1; $i <= $totle_page; $i++) {
if ($page == $i) {
$active = 'style="background:#14558d;"';
} else {
$active = "";
}
echo "<li><a $active href='author.php?page=$i&aid=$aid'>$i</a></li>";
}
if ($page < $totle_page) {
echo "<li><a href='author.php?page=" . ($page + 1) . "&aid=$aid'>next</a><li>";
}
}
?>
</ul>
</div><!-- /post-container -->
</div>
<?php include 'sidebar.php'; ?>
</div>
</div>
</div>
<?php include 'footer.php'; ?>