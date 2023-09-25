const form = document.getElementById("form");
const url_input = document.getElementById("url_input");

form.addEventListener("submit", (e) => {
    let url_input_value = url_input.value;
    let url_input_trimmed = url_input_value.trim();
    url_input.value = url_input_trimmed;
    
    if (url_input.value == ""){
        e.preventDefault();
        wrong_url_input_value_alert();
    }
})

function wrong_url_input_value_alert () {
    Swal.fire({
        width: '30%',
        icon: 'error',
        title: 'Enter a valid link',
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
