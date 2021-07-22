<?php
$data = json_decode(file_get_contents("php://input"));
if ($data)
{
    $reportPack = $data->note;
    $code = 200;
    $message = "ثبت شد";
    $info = $reportPack;
    echo json_encode(array("code"=>$code,"message"=>$message,"data"=>$info));
}
else{
    echo "not response";
}
