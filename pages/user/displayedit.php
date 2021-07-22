<form name="filFrm" oninput="searchUser(this)">
    <label for="txt1">جستجو</label>
    <input type="text" id="txt1" placeholder="جستجو کاربران..." name="txtSearchUser">
    <label for="sel1">نمایش</label>
    <select id="sel1" name="comFilter">
        <option>همه</option>
        <option>user</option>
        <option>admin</option>
    </select>
</form>
<div class="tools">
    <div class="tool">
        <label for="selUser">انتخاب کاربران</label>
        <input type="checkbox" id="selUser" onchange="selectUsers(this)">
    </div>
    <div class="tool">
        <label for="selAll">انتخاب همه</label>
        <input type="checkbox" id="selAll" onchange="selectAllUsers(this)">
    </div>
    <div class="tool">
        <button id="delUser" onclick="deleteUser()">
            حذف
        </button>
    </div>
    <div class="tool">
        <button id="editUser" onclick="editUsers()">
            ویرایش
        </button>
    </div>
</div>
<table id="userTable">
    <thead>
        <tr>
            <th>کد کاربر</th>
            <th>نام کاربری</th>
            <th>نام و نام خانوادگی</th>
            <th>ایمیل</th>
            <th>شماره موبایل</th>
            <th>تلفن</th>
            <th>نوع کاربر</th>
        </tr>
    </thead>
    <tbody id="tb">

    </tbody>
</table>
<div id="ft3" class="demo">
    <p></p>
</div>
