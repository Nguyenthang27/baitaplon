const express = require('express');
const mysql = require('mysql');

const app = express(); // Sửa cú pháp ở đây

const connection = mysql.createConnection({
    host: 'localhost',
    user: 't',
    password: '1',
    database: 'dkts' // Sửa cú pháp ở đây
});

connection.connect(function(err) {
    if (err) {
        console.error('Lỗi kết nối: ' + err.stack);
        return;
    }
    console.log('Đã kết nối với id ' + connection.threadId);
});

app.get('/api/news', (req, res) => { // Sửa cú pháp ở đây
    res.json({ message: 'Tôi là một thông điệp từ máy chủ!' }); // Sửa cú pháp ở đây
});

app.listen(8888, () => console.log('Ứng dụng lắng nghe trên cổng 8888'));
