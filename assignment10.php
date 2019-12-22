<?php
//TASK 1: MAKE A CONNECTION TO THE DATABASE, DISPLAY ERROR FOR FAILED CONNECTIONS
//(FOR GODADDY) NOTE: $mysqli = new mysqli("127.0.0.1", "username", "password", "database", 3306);

$mysqli = new mysqli("localhost", "User", "12345", "ass10");
if ($mysqli->connect_errno) {
  echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}
//CHECK IF EMAIL AND ENTERED PASSWORD VALID (LOGIN PAGE [first part of open workout checks login password])
$entEmail = $_GET['em'];
$entPassword = $_GET['pass'];
//DONT HAVE IT WITH THE PASSWORD ONLY EMAIL
$sql = "SELECT * FROM `membership_table` WHERE Email = '$entEmail'";
$result = $mysqli->query($sql);
if($result->num_rows == 0) {
     $data = "invalid";
} else {
    $data = "valid";
}
//Pass to JSON
$json = array(
    "data" => $data,
    "Email" => $entEmail,
    "Password" => $entPassword,
    "results" => $result
);
header("Contenttype:Application/json");
print(json_encode($json));
?>
