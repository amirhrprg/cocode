<form>
    <form name="siFrm" class="fs">
        <label for="uname">نام کاربری</label>
        <input type="text" id="uname" name="user_name">

        <label for="ufname">نام و نام خانوادگی</label>
        <input type="text" id="ufname" name="user_firstname">

        <label for="upass">رمز ورود</label>
        <input type="password" id="upass" name="user_pass">

        <label for="repass">تکرار رمز ورود</label>
        <input type="password" id="repass" name="user_repass">

        <button name="user_save" onclick="saveUser(this)">ثبت نام</button>

    </form>
</form>
