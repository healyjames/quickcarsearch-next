document.addEventListener('keyup', format);

function format(e) {
    
    let input = e.target.value;

    if(input.indexOf(',') > -1) {
        input = input.replace(",", "");
    }

    e.target.value = input.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

}