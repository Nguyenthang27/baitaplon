<?php
// Kết nối đến cơ sở dữ liệu
$conn = mysqli_connect("localhost", "t", "1", "dkts");

// Kiểm tra kết nối
if (!$conn) {
    die("Kết nối không thành công: " . mysqli_connect_error());
}

// Xử lý dữ liệu từ Form
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Lấy dữ liệu từ Form
    $hoTen = $_POST['ho_ten'];
    // Lấy thêm dữ liệu từ các trường nhập khác

    // Chuẩn bị truy vấn SQL để thêm dữ liệu vào bảng
    $sql = "INSERT INTO ten_bang (ho_ten) VALUES ('$hoTen')";
    // Thực thi truy vấn
    if (mysqli_query($conn, $sql)) {
        echo "Dữ liệu đã được thêm thành công";
    } else {
        echo "Lỗi: " . $sql . "<br>" . mysqli_error($conn);
    }
}

// Đóng kết nối
mysqli_close($conn);
?>
