<?php
function connectData()
{
    $conn = mysqli_connect("localhost","root","1234","cocode");
    mysqli_query($conn,"set names 'utf8'");
    if (mysqli_connect_error()!=0)
    {
        echo mysqli_connect_error();
    }
    return $conn;
}