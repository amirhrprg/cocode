<?php
$data = json_decode(file_get_contents("php://input"));
if ($data)
{
    include_once ("../database/connection.php");
    $conn = connectData();
    $userName = $conn -> real_escape_string(strip_tags($data->uname));
    $passWord = $conn -> real_escape_string(md5(sha1(strip_tags($data->upass))));
    $sql = "SELECT * FROM users WHERE username = '$userName' and password = '$passWord'";
    $result = mysqli_query($conn,$sql);
    $n = mysqli_num_rows($result);

    $message = "123";
    $code = 200;
    $info = "";
    if ($userName == "")
    {
        $code = 400;
        $message = "لطفا نام کاربری خود را وارد کنید";
    }
    elseif($passWord === "")
    {
        $code = 400;
        $message = "لطفا رمز ورود را واردکنید";
    }
    elseif ($n == 0){
        $code = 400;
        $message = "نام کاربری و یا رمز ورود صحیح نمی باشد";
    }
    else{
        $code = 200;
        $message = "خوش آمدید";
    }
    echo json_encode(array("message"=>$message,"code"=>$code,"data"=>$info));
}
else{
    echo "";
}
?>