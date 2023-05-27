// Tính Lương Nhân Viên
/**
 * Input: click vào Button
 * - lấy value luong1Ngay
 * - lấy value soNgayLam
 * Xử Lý:
 * - luongNV = luon1Ngay * soNgayLam
 * Output: 
 * - In luongNV ra HTML
 */


document.getElementById("btnLuongNV").onclick = function () {
    // Input
    var luong1ngay = document.getElementById("luong1Ngay").value * 1;
    var soNgayLam = document.getElementById("soNgayLam").value * 1;
    // xử lý
    var luongNV = luong1ngay * soNgayLam;
    var luongFormat = new Intl.NumberFormat("VN-vn");

    var content = ""
    content = "<p> Tổng Lương Nhân Viên: " + luongFormat.format(luongNV) + " VNĐ </p>";
    // Output
    document.getElementById("result").innerHTML = content;
};


// Tính Trung Bình 5 Số
/** 
 * Input: Click vào Button
 * - lấy value số thực thứ 1 : soThuc1
 * - lấy value số thực thứ 2 : soThuc2
 * - lấy value số thực thứ 3 : soThuc3
 * - lấy value số thực thứ 4 : soThuc4
 * - lấy value số thực thứ 5 : soThuc5
 * 
 * Xử Lý: 
 * tb5SoThuc = (soThuc1 + soThuc2 + soThuc3 + soThuc4 + soThuc5) / 5
 * 
 * Output: 
 * - In tb5SoThuc ra HTML
 */

document.getElementById("btnSoThuc").onclick = function () {
    // Input
    var soThuc1 = document.getElementById("soThuc1").value * 1;
    var soThuc2 = document.getElementById("soThuc2").value * 1;
    var soThuc3 = document.getElementById("soThuc3").value * 1;
    var soThuc4 = document.getElementById("soThuc4").value * 1;
    var soThuc5 = document.getElementById("soThuc5").value * 1;
    // Xử Lý
    var tb5SoThuc = (soThuc1 + soThuc2 + soThuc3 + soThuc4 + soThuc5) / 5;
    var content = "<p> Trung Bình 5 Số Thực : " + tb5SoThuc + "</p>";
    // Output
    document.getElementById("resultTb5So").innerHTML = content;
}

// Quy ĐỔi TIền Tệ
/**
 * Input: click button
 * - lấy value soTienDoi
 * - lấy value gia1USD
 * Xử Lý: 
 * quyDoi1USD = soTienDoi * gia1USD
 * Output:
 * - In quyDoi1USD ra HTML
 */

document.getElementById("btnQuyDoi").onclick = function () {
    // Input
    var soTienDoi = document.getElementById("soTienDoi").value * 1;
    var gia1USD = document.getElementById("gia1USD").value * 1;
    // Xử Lý
    var quyDoi1USD = soTienDoi * gia1USD;
    var USDFormat = new Intl.NumberFormat("VN-vn");

    var content = "<p> Số Tiền VNĐ Đổi Được : " + USDFormat.format(quyDoi1USD) + " VNĐ </p>";

    // Output
    document.getElementById("resultQuyDoi").innerHTML = content;
}

// Tính Chu Vi, Diện Tích Hình Chữ Nhật
/**
 * Input: click button
 * - lấy value chieuDaiHcn
 * - lấy value chieuRongHcn
 * Xử Lý : 
 * chuViHcn = chieuDaiHcn * chieuRongHcn
 * dienTichHcn = (chieuDaiHcn + chieuRongHcn) * 2
 * Output: 
 * In chuViHcn , dienTichHcn ra HTML
 */
document.getElementById("btnHcn").onclick = function(){
    // Input
    var chieuDaiHcn = document.getElementById("chieuDaiHcn").value * 1;
    var chieuRongHcn = document.getElementById("chieuRongHcn").value * 1;
    //  Xử Lý
    var dienTichHcn = chieuDaiHcn * chieuRongHcn;
    var chuViHcn = (chieuDaiHcn + chieuRongHcn) * 2;

    var content = "<p> Chu Vi Hình Chữ Nhật: " + chuViHcn + " cm </p>" ;
    content += "<p> Diện Tích Hình Chữ Nhật: " + dienTichHcn + " cm </p>" ;
    // Output
    document.getElementById("resultHcn").innerHTML = content;
}

// Tính Tổng 2 Ký Số
/**
 * Input : click Button
 * - lấy value kySo
 * Xử lý: 
 * - lấy số hàng chục của kySo hangChuckySo
 * - lấy số hàng đơn vị của kySo hangdonvikySo
 * - tong2KySo = hangChuckySo + hangdonvikySo
 * Output: 
 * - In tong2KySo ra html
 */
document.getElementById("btnKySo").onclick = function(){
    // Input
    var kySo = document.getElementById("kySo").value * 1;
    // Xử Lý
    var hangChuckySo = Math.floor(kySo / 10);
    var hangdonvikySo = (kySo % 10);
    // console.log(hangChuckySo);
    // console.log(hangdonvikySo);
    tong2KySo = hangChuckySo + hangdonvikySo;
    var content = "<p> Tổng 2 Ký Số =  " + tong2KySo + "</p>";
    // Output
    document.getElementById("resulkySo").innerHTML = content;

}