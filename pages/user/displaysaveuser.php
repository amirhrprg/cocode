<div class="d">
    <form name="userFrm">
        <label for="id1">نوع کاربر:</label>
        <select id="id1" name="comUserType">
            <option>admin</option>
            <option>user</option>
        </select>
        <br/>
        <br/>
        <label for="id2">نام کاربری:</label>
        <input type="text" id="id2" name="txtUsername" maxlength="45">
        <p></p>
        <br/>
        <br/>
        <label for="id3">نام و نام خانوادگی:</label>
        <input type="text" id="id3" name="txtNamefamily" maxlength="50">
        <p></p>
        <br/>
        <br/>
        <label for="id4">رمز ورود:</label>
        <input type="password" id="id4" name="txtPassword" maxlength="15">
        <p></p>
        <br/>
        <br/>
        <label for="id5">تکرار رمز ورود:</label>
        <input type="password" id="id5" name="txtRePassword" maxlength="15">
        <p></p>
        <br/>
        <br/>
        <label for="id6">ایمیل:</label>
        <input type="text" id="id6" name="txtEmail" maxlength="50">
        <p></p>
        <br/>
        <br/>
        <label for="id7">شماره موبایل:</label>
        <input type="text" id="id7" name="txtPhone" maxlength="11">
        <p></p>
        <br/>
        <br/>
        <label for="id8">تلفن:</label>
        <input type="text" id="id8" name="txtTel" maxlength="11">
        <p></p>
        <br/>
        <br/>
        <input type="button" value="ثبت کاربر" name="btnSave" onclick="saveUserData(this)">
    </form>
    <div id="ft3" class="demo">
        <p></p>
    </div>
</div>