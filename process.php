<?php
include "db_connect.php";
$val = $_POST['selectedText'];
$select = "select meaning from words where word = '$val' ";
$row = mysql_query($select) or die(mysql_error());	
$result = mysql_fetch_array($row);
	echo 	$result['meaning']; 



?>
