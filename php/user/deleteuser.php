<?php
$data = json_decode(file_get_contents("php://input"));
if ($data) {
    $selected = $data;
    $tf = false;
    include_once ("../database/connection.php");
    $conn = connectData();
    $sql = "";
    for ($i = 0; $i < count($selected); $i++){
        $sql = "DELETE FROM users WHERE userID = '$selected[$i]'";
        $result = mysqli_query($conn,$sql);
        if ($result){
            $tf = true;
        }else{
            $tf = false;
            break;
        }
    }
    $message = "";
    $tf ? $message="کاربران با موفقیت حذف شدند" : $message="حذف کاربران با مشکل مواجه شد";
    echo $message;
}
else{
    echo "not response";
}
