<?php
$entEmail = $_GET['em'];
$entPassword = $_GET['pass'];
$entFname = $_GET["first"];
$entLName =$_GET["last"];
$mysqli = new mysqli("localhost", "User", "12345", "ass10");
if ($mysqli->connect_errno) {
  echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}
//ADDING NEW PERSON
$sql1 = "INSERT INTO `membership_table` (FName, LName, Email, Password) VALUES ('$entFName', '$entLName', '$entEmail', '$entPassword')";
if ($mysqli->query($sql1) === TRUE) {
    $check = "New record created successfully";
} else {
    $check = "Error: " . $sql1 . "<br>" . $mysqli->error;
}
//Pass to JSON
$json = array(
    "data" => "valid",
    "check" => $check
);
header("Contenttype:Application/json");
print(json_encode($json));
?>
