<?php

$country = $_GET['country'];
$ja = $_GET['Jamaica'];
$all = $_GET['all'];
$host = getenv('IP');
$username = getenv('C9_USER');
$password = '';
$dbname = 'world';

$conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);

$stmt = $conn->query("SELECT * FROM countries");

$results = $stmt->fetchAll(PDO::FETCH_ASSOC);

if($ja == "true"){
    $qstring = "SELECT * FROM countries where name = '".$Jamaica."'";
}
if($all == "true"){
        $qstring = "SELECT * FROM countries";
    }
    else{
        $qstring = "SELECT * FROM countries where name LIKE '%".$country."%'";
    }
    
    if(empty($results)){
    
        echo "FALSE";
    }
    else{
    
        echo '<ul>';
        foreach ($results as $row) {
                echo '<li>' . $row['name'] . ' is ruled by ' . $row['head_of_state'] . '</li>';
                }
    echo '</ul>';
    }

