<!DOCTYPE html>
<html lang="en">
    <head>
        <title>صفحه ورود</title>
        <link rel="stylesheet" href="assets/css/style.css">
        <link rel="stylesheet" href="assets/css/modalstyle.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    </head>
    <body>
        <header>
        <div class="navbar" id="navbar">
            <img class="logo" id="logo" src="assets/images/LOGO.png">
            <a href="?pn=home">خانه</a>
            <div class="dropdown">
                <button class="dropbtn">
                    <a href="?pn=news">اخبار</a>
                    <i class="fa fa-angle-down"></i>
                </button>
                <div class="dropdown-content">
                    <a href="#">برنامه نویسی</a>
                    <a href="#">فناوری</a>
                    <a href="#">اورگونومی</a>
                </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn">
                    <a href="?pn=books">کتابها</a>
                    <i class="fa fa-angle-down"></i>
                </button>
                <div class="dropdown-content">
                    <a href="#">آموزشی</a>
                    <a href="#">داستانی</a>
                </div>
            </div>
            <a href="?pn=article">مقالات</a>
            <a href="#">آموزش</a>

            <a id="btnLog"><i class="fa fa-sign-in"></i>ورود</a>
        </div>
    </header>
        <main class="main">
            <?php
                if (isset($_GET["pn"]))
                {
                    $pageName = $_GET["pn"];
                }
            ?>
        </main>
        <footer>
        <div class="wave"></div>
        <div class="foot">
            <div class="col-33">
                <h2>ما را دنبال کنید</h2>
                <a href="#"><i class="fa fa-instagram"></i></a>
                <a href="#"><i class="fa fa-telegram"></i></a>
                <a href="#"><i class="fa fa-whatsapp"></i></a>
            </div>
            <div class="col-33">
                <h2>درباره ما</h2>
                <p>ارتباطات بخش مهمی از زندگی انسان‌ها را تشکیل
                    می‌دهند و ما بر این باوریم که ساده کردن این
                    ارتباطات می‌تواند دنیای بهتری را
                    برای همه ما ایجاد کند.
                    با فراگیر شدن رویدادهای آنلاین و در نظر گرفتن
                    مزایای آن برای هم‌میهنان، ما توانستیم بستری
                    بومی را برای شما فراهم کنیم و در مسیر رسیدن
                    به دنیایی بهتر، گام برداریم.
                </p>
            </div>
            <div class="col-33">
                <h2>تماس با ما</h2>
            </div>

        </div>
    </footer>
    </body>
    <script src="assets/js/master.js" type="text/javascript"></script>
    <script src="assets/js/ajax.js" type="text/javascript"></script>
</html>