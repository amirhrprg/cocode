<?php
$data = json_decode(file_get_contents("php://input"));
if ($data){
    include_once ("../database/connection.php");
    $conn = connectData();
    $selected = $data->values;
    $tf = false;
    for ($i = 0; $i < count($selected); $i++){
        $userId = $conn -> real_escape_string($selected[$i]->id);
        $userName = $conn -> real_escape_string($selected[$i]->uname);
        $nameFamily = $conn -> real_escape_string($selected[$i]->name);
        $emailAdd = $conn -> real_escape_string($selected[$i]->email);
        $phoneNum = $conn -> real_escape_string($selected[$i]->phone);
        $telNum = $conn -> real_escape_string($selected[$i]->tel);
        $userType = $conn -> real_escape_string($selected[$i]->type);
        $sql = "UPDATE users SET username = '$userName', namefamily = '$nameFamily',email = '$emailAdd',mobile = '$phoneNum', tel = '$telNum', userType = '$userType' WHERE userID = '$userId' ";
        $result = mysqli_query($conn,$sql);
        if ($result){
            $tf = true;
        }
        else
        {
            $tf = false;
            break;
        }
    }
    $message = "";
    $tf ? $message = "تغییرات اعمال شد" : $message = "ویرایش کاربران با مشکل مواجه شد";
    echo $message;
}
else{
    echo "not response";
}