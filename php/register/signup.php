<?php
$data = json_decode(file_get_contents("php://input"));
if ($data)
{
    $userName = $data->uname;
    $passWord = $data->upass;
    $rePassWord = $data->urepass;
    $nameFamily = $data->nnamefamily;

    include_once ("../database/connection.php");
    $conn = connectData();
    $sql = "SELECT * FROM users WHERE username = '$userName'";
    $result = mysqli_query($conn,$sql);
    $n= mysqli_num_rows($result);

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
    elseif ($n > 0){
        $code = 400;
        $message = "نام کاربری قبلا توسط شحص دیگری استفاده شده است";
    }
    else{
        $code = 200;
        $message = "ثبت نام انجام شد خوش آمدید";
    }
    echo json_encode(array("message"=>$message,"code"=>$code,"data"=>$info));
}
else{
    echo "";
}
?>
