//show special form of each menu choices
let menuReport = document.getElementById("report").getElementsByTagName("li");
let menuBook = document.getElementById("book").getElementsByTagName("li");
let menuUser = document.getElementById("user").getElementsByTagName("li");
function openForms(loc){
    sendGet(loc,showForm);
    function showForm(xhttp){
        document.querySelector(".main").innerHTML = xhttp.responseText;
    }
}
menuReport[0].addEventListener("click",openForm1);
//menuReport[1].addEventListener("click",openForm2);
menuReport[2].addEventListener("click",openForm3);
//menuReport[3].addEventListener("click",openForm4);
menuUser[0].addEventListener("click",openForm5);
menuUser[1].addEventListener("click",openForm6);
function openForm1(){
    openForms("http://localhost/cocode/pages/user/displaysavenews.php");
}
function openForm3(){
    openForms("http://localhost/cocode/pages/user/displaysavesubject.php");
}
function openForm5(){
    openForms("http://localhost/cocode/pages/user/displaysaveuser.php");
}
function openForm6(){
    openForms("http://localhost/cocode/pages/user/displayedit.php");
    showAllUsers();
}
//send news data and get response about save news
function sendNewsData(sending){
    let frm = document.forms["newsFrm"];
    let show = document.getElementById("ft1");
    let messageBox = show.getElementsByTagName("p")[0];
    let repSub = frm["comSub"].options[frm["comSub"].selectedIndex].value;
    let repTitle = frm["txtTitle"].value;
    let repText = frm["txtText"].value;
    let repDate = frm["txtDate"].value;
    let repSource = frm["txtSource"].value;
    sending = JSON.stringify(
        {
            subject: repSub,
            title: repTitle,
            text: repText,
            date: repDate,
            source: repSource
        }
    );
    doAjax("../news/savenews.php",showMessage,sending)
    function showMessage(xhttp)
    {
        let inf = JSON.parse(xhttp.responseText);
        show.style.display = "block";
        messageBox.innerHTML = "\"" + inf.name + "\"" + " " + inf.message;
        console.log(messageBox);
        let timer = setTimeout(hiddMessage,5000);
        function hiddMessage()
        {
            show.style.display = "none";
        }
    }
}
//send news subject data and get response about save news subject
function saveSub(thdata){
    let subFrm = document.forms["repSubjectFrm"];
    let show = document.getElementById("ft2");
    let messageBox = show.getElementsByTagName("p")[0];
    let subValue = subFrm["txtSubject"].value;
    thdata = JSON.stringify({note: subValue});
    doAjax("savenewssubject.php",showMessage,thdata);
    function showMessage(xhttp){
        let inf = JSON.parse(xhttp.responseText);
        show.style.display = "block";
        messageBox.innerHTML = "دسته " + "\"" + inf.data + "\"" + " " + inf.message;
        let timer = setTimeout(hiddMessage,5000);
        function hiddMessage()
        {
            show.style.display = "none";
        }
    }
}
//send user data and get response about save user
function saveUserData(btn,userInfo)
{
    let userForm = document.forms["userFrm"];
    let userType = userForm["comUserType"].options[userForm["comUserType"].selectedIndex];
    let userName = userForm["txtUsername"];
    let nameFamily = userForm["txtNamefamily"];
    let passWord = userForm["txtPassword"];
    let rePassword = userForm["txtRePassword"];
    let emailAdd = userForm["txtEmail"];
    let phoneNum = userForm["txtPhone"];
    let telNum = userForm["txtTel"];
    userInfo = JSON.stringify({
        type: userType.value,
        username: userName.value,
        namefamily: nameFamily.value,
        pass: passWord.value,
        repass: rePassword.value,
        email: emailAdd.value,
        phone: phoneNum.value,
        tel: telNum.value
    });
    doAjax("../../php/user/saveuser.php",showUserSave,userInfo);
    function showUserSave(xhttp)
    {
        let pHelp = userForm.getElementsByTagName("p");
        let info = JSON.parse(xhttp.responseText);
        function showMessage(index,err)
        {
            let text;
            let helpText = pHelp[index];
            if (err === true)
            {
                helpText.style.display = "block";
                text = info.message;
            }
            else {
                helpText.style.display = "none";
                text = "";
            }
            helpText.innerHTML = text;
        }
        function checkOnTime(eve,len,index){
            eve.addEventListener("input",clearError);
            function clearError(){
                if (eve.value.length > len){
                    showMessage(index,false);
                }
            }
        }
        //check inputs
        if (userName.value === ""){
            showMessage(0,true);
            checkOnTime(userName,3,0);
        }else if(userName.value.length <= 3){
            showMessage(0,true);
            checkOnTime(userName,3,0);
        }else if(info.special === 1){
            showMessage(0,true);
            checkOnTime(userName,3,0);
        }
        else {
            if (nameFamily.value === ""){
                showMessage(1,true);
                checkOnTime(nameFamily,7,1);
            }else if (nameFamily.length <= 7){
                showMessage(1,true);
                checkOnTime(nameFamily,7,1);
            }
            else {
                if (passWord.value === ""){
                    showMessage(2,true);
                    checkOnTime(passWord,8,2);
                }else if(passWord.value.length <= 8){
                    showMessage(2,true);
                    checkOnTime(passWord,8,2);
                }
                else {
                    if (rePassword.value === ""){
                        showMessage(3,true);
                        checkOnTime(rePassword,8,3);
                    }else if(rePassword.value !== passWord.value){
                        showMessage(3,true);
                        checkOnTime(rePassword,8,3);
                    }
                    else {
                        if (emailAdd.value === ""){
                            showMessage(4,true);
                            checkOnTime(emailAdd,1,4);
                        }
                        else{
                            if (phoneNum.value === ""){
                                showMessage(5,true);
                                checkOnTime(phoneNum,10,5);
                            }else  if (phoneNum.value.length !== 11){
                                showMessage(5,true);
                                checkOnTime(phoneNum,10,5);
                            }
                            else {
                                if (telNum.value !== ""){
                                    if (telNum.length !== 11){
                                        showMessage(6,true);
                                        checkOnTime(telNum,10,6);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        document.getElementById("ft3").getElementsByTagName("p")[0].innerHTML = info.message;
        console.log(info.message);
    }
}
//show all users
function showAllUsers(){
    doAjax("../../php/user/searchuser.php",showUser);
    function showUser(xhttp){
        let text = "";
        if (document.getElementById("tb")){
            let bodyTable = document.getElementById("tb");
            if (xhttp.responseText === "")
            {
                text += "<tr>";
                text += "<td colspan='7'>" + "کاربری یافت نشد." + "</td>";
                text += "</tr>";
            }
            else {
                let user = JSON.parse(xhttp.responseText);
                for (let c in user)
                {
                    text += "<tr>";
                    text += "<td>" + user[c].userID + "</td>";
                    text += "<td>" + user[c].username + "</td>";
                    text += "<td>" + user[c].namefamily + "</td>";
                    text += "<td>" + user[c].email + "</td>";
                    text += "<td>" + user[c].mobile + "</td>";
                    text += "<td>" + user[c].tel + "</td>";
                    text += "<td>" + user[c].userType + "</td>";
                    text += "</tr>";
                }
            }
            bodyTable.innerHTML = text;
        }
    }
}
function searchUser(frm){
    if(document.getElementById("userTable"))
    {
        let srh = frm["txtSearchUser"];
        let sel = frm["comFilter"];
        let txtValue;
        if (sel.options.selectedIndex === 0){
            txtValue = "";
        }else if (sel.options.selectedIndex === 1){
            txtValue = "user";
        }else if (sel.options.selectedIndex === 2){
            txtValue = "admin";
        }
        let tb = document.getElementById("tb");
        let tr = tb.getElementsByTagName("tr");
        for (let i = 0; i < tr.length; i++){
            let idTd = tr[i].cells[0].textContent || tr[i].cells[0].innerText;
            let unTd = tr[i].cells[1].textContent || tr[i].cells[0].innerText;
            let nfTd = tr[i].cells[2].textContent || tr[i].cells[0].innerText;
            let emTd = tr[i].cells[3].textContent || tr[i].cells[3].innerText;
            let tyTd = tr[i].cells[6].textContent || tr[i].cells[6].innerText;
            if ((idTd.indexOf(srh.value) > -1 || unTd.indexOf(srh.value) > -1 || nfTd.indexOf(srh.value) > -1 || emTd.indexOf(srh.value) > -1) && tyTd.indexOf(txtValue) > -1){
                tr[i].style.display = "";
            }else {
                tr[i].style.display = "none";
            }
        }
    }
}
//select users
function selectUsers(selUser)
{
    let tb = document.getElementById("tb");
    let tr = tb.getElementsByTagName("tr");
    if (selUser.checked){
        for (let i = 0; i < tr.length; i++) {
            tr[i].onclick = function (){
                selectRow(tr[i]);
            }
        }
        function selectRow(tr){
            if (tr.className === ""){
                tr.className = "tbactive";
            }else {
                tr.className = "";
            }
        }
    }else {
        for (let i = 0; i < tr.length; i++) {
            tr[i].className = "";
            tr[i].onclick = function (){
                tr[i].className = "";
            }
        }
    }
}
function selectAllUsers(selAll){
    let tb = document.getElementById("tb");
    let tr = tb.getElementsByTagName("tr");
    if (selAll.checked){
        for (let i = 0; i < tr.length; i++) {
            if (tr[i].style.display === ""){
                tr[i].className = "tbactive";
            }
        }
    }else {
        for (let i = 0; i < tr.length; i++) {
            tr[i].className = "";
        }
    }
}
let selected = [];
let namesel = [];
let unamesel = [];
let emailsel = [];
let phonesel = [];
let telsel = [];
let typsel = [];
function clearArr(){
    selected = [];
    namesel = [];
    unamesel = [];
    emailsel = [];
    phonesel = [];
    telsel = [];
    typsel = [];
}
function saveSelected(){
    let tb = document.getElementById("tb");
    let tr = tb.getElementsByTagName("tr");
    for (let i = 0; i < tr.length; i++){
        if (tr[i].className === "tbactive"){
            selected.push(tr[i].cells[0].innerText);
            unamesel.push(tr[i].cells[1].innerText);
            namesel.push(tr[i].cells[2].innerText);
            emailsel.push(tr[i].cells[3].innerText);
            phonesel.push(tr[i].cells[4].innerText);
            telsel.push(tr[i].cells[5].innerText);
            typsel.push(tr[i].cells[6].innerText);
        }else {
            delete selected[i];
        }
    }
}
//delete users
function deleteUser(){
    saveSelected();
    console.log(selected);
    if (selected.length === 0){
        document.getElementById("ft3").getElementsByTagName("p")[0].innerHTML = "لطفا ابتدا کاربران مورد نظر را انتخاب کنید";
    }
    else {
        sendGet("displaydelete.php",showWin);
        function showWin(xhttp,info){
            info = JSON.stringify(selected);
            console.log(info);
            document.querySelector(".main").innerHTML += xhttp.responseText;
            document.getElementById("y").onclick = function (){
                doAjax("../../php/user/deleteuser.php",sendDelUsers,info);
                function sendDelUsers(xhttp){
                    document.getElementById("ft3").getElementsByTagName("p")[0].innerHTML = xhttp.responseText;
                    showAllUsers();
                    clearArr();
                    document.querySelector(".main").removeChild(document.querySelector(".win"));
                }
            }
            document.getElementById("n").onclick = function (){
                showAllUsers();
                clearArr();
                document.querySelector(".main").removeChild(document.querySelector(".win"));
            }
        }
    }
}
//edit users
function editUsers(){
    saveSelected();
    if (selected.length === 0){
        document.getElementById("ft3").getElementsByTagName("p")[0].innerHTML = "لطفا ابتدا کاربران مورد نظر را انتخاب کنید";
    }
    else {
        sendGet("displayeditu.php",showWin);
        let cells = [];
        for (let i in selected){
            cells[i] = {id: selected[i], uname: unamesel[i], name: namesel[i], email: emailsel[i], phone: phonesel[i], tel: telsel[i], type: typsel[i]};
        }
        function showWin(xhttp,info) {
            document.querySelector(".main").innerHTML += xhttp.responseText;
            let cellsBox = document.querySelector(".bodytb");
            let text = "";
            for (let i = 0; i < cells.length; i++){
                text += "<div class='tbRow'>";
                text += "<p>" + cells[i].id + "</p>";
                text += "<input type='text' value=" + cells[i].uname + ">";
                text += "<input type='text' value=" + cells[i].name + ">";
                text += "<input type='text' value=" + cells[i].email + ">";
                text += "<input type='text' value=" + cells[i].phone + ">";
                text += "<input type='text' value=" + cells[i].tel + ">";
                text += "<select>" + "<option>" + cells[i].type + "</option>" + "<option>user</option>" + "<option>admin</option>" + "</select>";
                text += "</div>";
            }
            cellsBox.innerHTML = text;
            document.getElementById("eds").onclick = function (){
                let row = cellsBox.getElementsByClassName("tbRow");
                let userId, userName, nameFamily,emailAdd, phoneNum, telNum, userType;
                let values = [];
                for (let i = 0; i < selected.length; i++){
                    userId = row[i].getElementsByTagName("p")[0].innerHTML;
                    userName = row[i].getElementsByTagName("input")[0].value;
                    nameFamily = row[i].getElementsByTagName("input")[1].value;
                    emailAdd = row[i].getElementsByTagName("input")[2].value;
                    phoneNum = row[i].getElementsByTagName("input")[3].value;
                    telNum = row[i].getElementsByTagName("input")[4].value;
                    let tu = row[i].getElementsByTagName("select")[0];
                    userType = tu.options[tu.selectedIndex].value;
                    values[i] = {id: userId, uname: userName, name: nameFamily, email: emailAdd, phone: phoneNum, tel: telNum, type: userType};
                }
                info = JSON.stringify({values});
                console.log(info);
                console.log(selected);
                doAjax("../../php/user/edituser.php",sendEditUsers,info);
                function sendEditUsers(xhttp){
                    document.getElementById("ft3").getElementsByTagName("p")[0].innerHTML = xhttp.responseText;
                    showAllUsers();
                    clearArr();
                    document.querySelector(".main").removeChild(document.querySelector(".win"));
                }
            }
            document.getElementById("exed").onclick = function (){
                showAllUsers();
                clearArr();
                document.querySelector(".main").removeChild(document.querySelector(".win"));
            }
        }
    }
}