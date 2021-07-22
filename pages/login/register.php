
<div class="win">
    <div class="cls">
        <button onclick="closeWin()"><i class="fa fa-close"></i></button>
    </div>
    <div class="modal">
        <div class="titles">
            <button type="button" onclick="f1(this)" name="login" class="active">ورود</button>
            <button type="button" onclick="f2(this)" name="register">ثبت نام</button>
        </div>
        <div class="area">
            <?php
            include_once ("displaysignin.php");
            ?>
        </div>
    </div>
</div>

