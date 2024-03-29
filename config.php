<?php
$servername = "localhost:";
$username = "t";
$password = "1";
$dbname = "dkts";

// Tạo kết nối
$conn = new mysqli($servername, $username, $password, $dbname);

// Kiểm tra kết nối
if ($conn->connect_error) {
    die("Kết nối không thành công: " . $conn->connect_error);
}
?>
