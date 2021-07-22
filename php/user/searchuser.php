<?php

    include_once ("../database/connection.php");
    $conn = connectData();
    $sql = "SELECT * FROM users";
    $result = mysqli_query($conn,$sql);
    $perArray = array();
    if ($result)
    {
        while($row = mysqli_fetch_assoc($result))
        {
            $perArray[] = $row;
        }
            $user_json = json_encode($perArray);
            echo $user_json;
    }
    else{
        echo "";
    }
