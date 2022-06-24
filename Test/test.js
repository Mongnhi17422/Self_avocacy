// Bai 1:
function findEven(n){
    if(4<=n<=20){
        for(let i=0;i<=n;i++){
            for(let i % 2==0){
                document.write(i)
            }
        }
    }
}


// Bai 3:
function numberOneTriangle("1","11","111","1111","11111")
let text = "";
for (let a = 0;i < numberOneTriangle.length;a++) {
    text += numberOneTriangle[a]+"<br>";}
    document.write(numberOneTriangle[a])




// Bai 4
function Dong_ho() {
    var gio = document.getElementById("gio");
    var phut = document.getElementById("phut");
    var giay = document.getElementById("giay");
    var Gio_hien_tai = new Date().getHours();
    var Phut_hien_tai = new Date().getMinutes();
    var Giay_hien_tai = new Date().getSeconds();
    gio.innerHTML = Gio_hien_tai;
    phut.innerHTML = Phut_hien_tai;
    giay.innerHTML = Giay_hien_tai;
}
var Dem_gio = setInterval(Dong_ho, 1000);


