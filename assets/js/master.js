// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};
//open the login window
function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.backgroundColor = "#0099cd";
        document.getElementById("logo").style.fontSize = "65px";
    } else {
        document.getElementById("navbar").style.backgroundColor = "inherit";
        document.getElementById("logo").style.fontSize = "80px";
    }
}
let btnLogin = document.getElementById("btnLog");
btnLogin.addEventListener("click",openWin);
function openWin()
{
    sendGet("http://localhost/cocode/pages/login/register.php",showForm);
    function showForm(xhttp) {
        document.getElementsByTagName("main")[0].innerHTML = xhttp.responseText;
    }
}
//remove the login window from page
function closeWin()
{
    document.querySelector(".main").removeChild(document.querySelector(".win"));
}
//switch login and signup forms
function sendRequest(loc)
{
    sendGet(loc,showForm);
    function showForm(xhttp){
        document.querySelector(".area").innerHTML = xhttp.responseText;
    }
}
function f1(btn){
    sendRequest("pages/login/displaysignin.php");
    btn.className = "active";
    if (document.getElementsByName("register")[0].className === "active")
    {
        document.getElementsByName("register")[0].className = "";
    }
}
function f2(btn){
    sendRequest("pages/login/displaysignup.php");
    btn.className = "active";
    if (document.getElementsByName("login")[0].className === "active")
    {
        document.getElementsByName("login")[0].className = "";
    }
}
//send data to server and get response
function logUser(btn,data)
{
    let messBox = document.querySelector(".message").getElementsByTagName("p")[0];
    function creatError(txt,con)
    {
        messBox.innerHTML = txt;
        messBox.style.display = "block";
        if (con === true)
        {
            messBox.style.backgroundColor = "Green";
        }
        else {
            messBox.style.backgroundColor = "DarkRed";
        }
    }
    let logFrm = document.forms["logFrm"];
    let txtUsername = logFrm["txtUsername"];
    let txtPassword = logFrm["txtPassword"];
    let req;
    if (window.XMLHttpRequest)
    {
        req = new XMLHttpRequest();
    }
    else
    {
        req = new ActiveXObject("Microsoft.XHTTP");
    }
    req.onreadystatechange = function ()
    {
        function disableBtn(){
            btn.style.backgroundColor = "gray";
            btn.disabled = true;
            btn.style.cursor = "not-allowed";
        }
        function enableBtn(){
            btn.style.backgroundColor = "#009900";
            btn.disabled = false;
            btn.style.cursor = "pointer";
        }
        disableBtn();
        if (this.status === 200 && this.readyState === 4)
        {
            enableBtn();
            if (this.responseText === "")
            {
                alert("خطا در ارسال اطلاعات");
            }
            else {
                let info = JSON.parse(this.responseText);
                txtUsername.addEventListener("input",enableBtn);
                txtPassword.addEventListener("input",enableBtn);
                if (info.code !== 200)
                {
                    disableBtn();
                    if (info.code === 400)
                    {
                        creatError(info.message,false);
                    }
                }
                else {
                    window.location.href = "http://localhost/cocode/pages/user/controlpanel.php";
                }
            }

        }
    }
    req.open("POST","php/register/signin.php");
    data = JSON.stringify({
        uname: txtUsername.value,
        upass: txtPassword.value
    });
    req.send(data);
}
