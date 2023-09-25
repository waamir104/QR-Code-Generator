const qr_container = document.getElementById("qr_container");
const download_btn = document.getElementById("download_btn");
const share_btn = document.getElementById("share_btn");

var searchString = window.location.search;
var searchParams = new URLSearchParams(searchString);
var url = searchParams.get("url");

var qrcode = new QRCode(qr_container, {
	text: url,
	width: 180,
	height: 180,
	colorDark : "#000000",
	colorLight : "#ffffff",
	correctLevel : QRCode.CorrectLevel.H
});

download_btn.addEventListener("click", () => {
	let qr_img = document.querySelector(".qr_container img");
    let src = qr_img.src;

    let a = document.createElement("a");
    a.href = src;
    a.download = src;

    a.click();

    document.body.removeChild(a);
})

share_btn.addEventListener("click", () => {
	navigator.clipboard.writeText(url);
	copy__btn__alert();
})

function copy__btn__alert() {
    Swal.fire({
        width: '30%',
        icon: 'success',
        title: 'URL Copied',
        showConfirmButton: false,
        timer: 1700,
        backdrop: true,
        timerProgressBar: true,
        position: 'center',
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        padding: '0 0 3em 0'
    });
}