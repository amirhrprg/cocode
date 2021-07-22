<?php
$data = json_decode(file_get_contents("php://input"));
if ($data)
{
    $reportPack = $data->subject;
    $reportTitle = $data->title;
    $reportText = $data->text;
    $reportDate = $data->date;
    $reportSource = $data->source;

    $code = 200;
    $message = "ثبت شد";
    $info = $reportTitle;
    echo json_encode(array("code"=>$code,"message"=>$message,"name"=>$info));
}
else{
    echo "not response";
}