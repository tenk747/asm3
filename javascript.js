"use strict";

//------THAO TÁC NHẬP EMAIL ĐỂ HIỂN THỊ THÔNG TIN CÁ NHÂN------//

//function dc thực hiện khi nhấn vào button
function handleSubmit() {
  //lấy giá trị email của input
  const emailValue = document.getElementById("email").value;

  //điều kiện của 1 email (có dấu chấm , @ ,...)
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  //đưa giá trị nhận dc từ input vào kiểm tra điều kiện checkEmail
  const checkEmail = emailValue.match(regex);

  //hiển thị lỗi khi nhập sai hoặc hướng dẫn nhập email
  const emailHelp = document.querySelector("#emailHelp");

  //Kiểm tra giá trị nếu emailValue.match(checkEmail) đủ điều kiện là email => check = true => hiển thị thông tin cá nhân
  if (checkEmail) {
    //thêm style display:block để hiển thị thông tin cá nhân
    document.querySelector(".anttcn").style.display = "block";
    //ẩn div form nhập email
    document.querySelector(".submit-email").style.display = "none";
  } else {
    //báo lỗi khi không nhập đúng định dạng email
    //đổi chữ , cỡ chữ và màu của phần hướng dẫn nhập email để hiển thị đã nhập sai
    emailHelp.textContent = "Hãy nhập đúng định dạng của email";
    emailHelp.style.color = "red";
    emailHelp.style.fontSize = "1rem";
  }
}

//------CHỨC NĂNG ẨN HIỆN THÔNG TIN NGHỀ NGHIỆP------//
//ẩn hiện nút view more
function mouseOver(element) {
  //khi di chuột vào hiển thị button
  element.querySelector(".viewmore").style.display = "block";
}
function mouseOut(element) {
  const elementParent = element.closest(".ttnn-container"); //chỉ về phần từ cha của ptử (tham số element)có class là ttnn-container
  const anttnn = elementParent.querySelector(".anttnn"); //chọn phần tử có class anttnn(là phần tử chứa thông tin bị ẩn đi) trong phần tử cha
  //khi di chuột ra nếu thông tin chi tiết đang hiện thì ẩn
  if (anttnn.classList.contains("hidden")) {
    element.querySelector(".viewmore").style.display = "none";
  } else {
    element.querySelector(".viewmore").style.display = "block";
  }
}

//thao tác ẩn hiện 2 nút view more và less view
//hiện thông tin
function handleViewmore(element) {
  const elementParent = element.closest(".ttnn-container"); //chỉ về phần từ cha của ptử (tham số element)có class là ttnn-container
  const anttnn = elementParent.querySelector(".anttnn"); //chọn phần tử có class anttnn(là phần tử chứa thông tin bị ẩn đi) trong phần tử cha
  const viewmore = elementParent.querySelector(".viewmore"); //chọn phần tử có class viewmore(là nút viewmore) trong phần tử cha
  if (anttnn.classList.contains("hidden")) {
    //khi ấn vào button nếu thông tin nghề nghiệp đang ẩn thì hiện nó lên
    anttnn.classList.remove("hidden"); //bỏ ẩn div thông tin
    viewmore.textContent = " ▲ VIEW LESS"; //đổi chữ view more thành view less
  } else {
    //khi ấn vào button nếu thông tin nghề nghiệp đang hiện thì ẩn nó đi
    anttnn.classList.add("hidden"); //bỏ ẩn div thông tin
    viewmore.textContent = " ▼ VIEW MORE"; //đổi chữ view less thành view more
  }
}
