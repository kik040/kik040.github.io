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

 function calAge(){
    const birthyear = prompt("คุณเกิดปี ค.ศ. ที่เท่าไหร่โปรดบอก");

    if(birthyear != null){
      let date=new Date();
      const year = date.getFullYear();
      const age = year - birthyear;
      alert('ยินดีด้วยนะจ๊ะ คุณอยู่ในประเทศนี้มา '+ age +' ปีแล้ว 555 น้ำตาจะไหล');
    }
 }

function loadProfile(){
   const name = "Sukanya";
   const province = "Nonthaburi";
   document.getElementById("my-name").innerHTML = name;
   document.getElementById("my-province").innerHTML = province;
}