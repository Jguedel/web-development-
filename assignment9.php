<?php
$file = file("culinaryQuizText.txt");
$category = $_REQUEST['part'];
do{
    list($word, $name, $fileinition)= preg_split("/[\t]/",trim($file[array_rand($file)]));
} while($category != $name);
$correct = array(
    "definition"=>$fileinition,
    "correct"=>true
);
do{
$one=preg_split("/[\t]/",trim($file[array_rand($file)]));
}while($one[2] == $correctdefintion || $one[2] == $two[2]);
$Q1= array(
    "definition" => $one[2],
    "correct" => false
);
do{
$two=preg_split("/[\t]/",trim($file[array_rand($file)]));
}while($two[2] == $correctdefintion || $two[2] == $one[2]);
$Q2=array(
    "definition" => $two[2],
    "correct" => false
);
$choices = array($correct, $Q1, $Q2);
$json = array(
    "name" => $name,
    "word" => $word,
    "choices" => $choices
);

header("Contenttype:Application/json");
print(json_encode($json));
?>
