<?php
$data = json_decode(file_get_contents("php://input"));
if ($data)
{
    include_once ("../database/connection.php");
    $conn = connectData();
    $uType = $conn -> real_escape_string($data->type);
    $uName = $conn -> real_escape_string($data->username);
    $uNamefamily = $conn -> real_escape_string($data->namefamily);
    $uPass = $conn -> real_escape_string($data->pass);
    $uRepass = $conn -> real_escape_string($data->repass);
    $uEmail = $conn -> real_escape_string($data->email);
    $uPhone = $conn -> real_escape_string($data->phone);
    $uTel = $conn -> real_escape_string($data->tel);

    $code = 200;
    $message = "";
    $info = "";
    $special = 0;
    if ($uName == "")
    {
        $code = 400;
        $message = "لطفا نام کاربری را وارد کنید";
    }elseif (strlen($uName) <= 3){
        $code = 400;
        $message = "نام کاربری باید بیشتر از 3 کارکتر باشد";
    }else{
        $query = "SELECT * FROM users WHERE username = '$uName'";
        $queryres = mysqli_query($conn,$query);
        $n = mysqli_num_rows($queryres);
        if ($n > 0)
        {
            $code = 400;
            $special = 1;
            $message = "این نام کاربری قبلا استفاده شده است";
        }
        elseif ($uNamefamily == "")
        {
            $special = 0;
            $code = 400;
            $message = "لطفا نام و نام خانوادگی را وارد کنید";
        }elseif (strlen($uNamefamily) <= 7)
        {
            $code = 400;
            $message = "لطفا نام و نام خانوادگی کاربر را به طور کامل و صحیح وارد کنید";
        }
        elseif ($uPass == "")
        {
            $code = 400;
            $message = "لطفا رمز ورود را وارد کنید";
        }
        elseif (strlen($uPass) <= 8)
        {
            $code = 400;
            $message = "رمز ورود باید بیشتر از 8 کارکتر باشد";
        }
        elseif ($uRepass == "")
        {
            $code = 400;
            $message = "لطفا رمز ورود را تکرار کنید";
        }
        elseif ($uRepass != $uPass){
            $code = 400;
            $message = "لطفا رمز ورود را به درستی تکرار کنید";
        }
        elseif ($uEmail == "")
        {
            $code = 400;
            $message = "لطفا آدرس ایمیل کاربر را وارد کنید";
        }
        elseif ($uPhone =="")
        {
            $code = 400;
            $message = "لطفا شماره موبایل کاربر را وارد کنید";
        }
        elseif (strlen($uPhone) != 11){
            $code = 400;
            $message = "شماره موبایل صحیح نمی باشد";
        }
        else
        {
            $uPass = md5(sha1($uPass));
            $sql = "INSERT INTO users (userType,username,namefamily,password,email,mobile,tel) VALUES ('$uType','$uName','$uNamefamily','$uPass','$uEmail','$uPhone','$uTel')";
            $result = mysqli_query($conn,$sql);
            if ($result)
            {
                $message = "ثبت شد";
                $code = 200;
            }
            else{
                $message = "ثبت کاربر با مشکل مواجه شد";
            }
        }
    }
    echo json_encode(array("code"=>$code,"special"=>$special,"message"=>$message,"data"=>$info));
}
else{
    echo "not response";
}