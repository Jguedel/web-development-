<?php
$mysqli = new mysqli("localhost", "User", "12345", "ass10pt2");
if ($mysqli->connect_errno) {
  echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}
$group = $_GET['name'];
$sql = "SELECT * FROM `excercise_table` WHERE Name = '$group'";
$result = $mysqli->query($sql);
//DISPLAY EVERYTHING IN SELECTED $GROUPS ROW
if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
   $ans = $ans."<br>". $row["Name"]. ": ". $row["Exercise"]. "<br>";
  }
} else {
  $ans = "0 results";
}
echo $ans;
?>
