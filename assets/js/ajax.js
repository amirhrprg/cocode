function doAjax(url,func,data)
{
    let req ;
    if (window.XMLHttpRequest)
    {
        req = new XMLHttpRequest();
    }else {
        req = new ActiveXObject("Microsoft.XHTTP");
    }
    req.onreadystatechange = function ()
    {
        if (req.status === 200 && req.readyState === 4){
            func(this);

        }
    }
    req.open("POST",url);
    req.send(data);
}
function sendGet(url,func){
    let req ;
    if (window.XMLHttpRequest)
    {
        req = new XMLHttpRequest();
    }else {
        req = new ActiveXObject("Microsoft.XHTTP");
    }
    req.onreadystatechange = function ()
    {
        if (req.status === 200 && req.readyState === 4){
            func(this);
        }
    }
    req.open("GET",url);
    req.send();
}