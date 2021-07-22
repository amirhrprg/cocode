<form name="logFrm" class="fl">
    <!-- layouts and inputs -->
    <label for="uname">نام کاربری</label>
    <input type="text" name="txtUsername" placeholder="" id="uname" minlength="45">
    <label for="pass">رمز عبور</label>
    <input type="password" name="txtPassword" placeholder="" id="pass" minlength="15">

    <!-- checkbox -->
    <input type="checkbox" name="txtRemember" placeholder="" id="rem">
    <label class="lblremember" for="rem">مرا به خاطر بسپار</label>

    <!-- buttons and links -->
    <button type="button" name="login" onclick="logUser(this)">ورود</button>
    <button type="button" name="exit" onclick="closeWin()">انصراف</button>
    <div class="message">
        <p></p>
    </div>
    <div class="link">
        <a href="#">رمز عبور را فراموش کرده اید؟</a>
    </div>
</form>



