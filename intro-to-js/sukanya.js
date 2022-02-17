function askMyName() {
    const name = prompt("คุณชื่ออะไรโปรดบอก");
 
    if (name != null) {
       document.getElementById("name").innerHTML = "สวัสดีจ๊ะฉันชื่อ " + name;
    }
 }
 
 function helloWorld() {
 const h1message = document.getElementById("name").innerHTML;
    alert(h1message + ' สถานะยากจน พร้อมพาทุกคนไปลำบาก')
 }