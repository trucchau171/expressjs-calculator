const btns = document.querySelectorAll('.calc-btn');
const input = document.querySelector('.calc-input');

let clr = 0;
for (const btn of btns) {
    btn.onclick = (e) => {
        console.log(clr);
        if (btn.value == "DEL") {
            input.value = input.value.slice(0, -1); 
            clr += 1;
        }
        else if (btn.value == "AC") {
            input.value = "";
        } 
        else 
        {
            if (clr == 0) {
                input.value = "";
            }
            console.log(e.target);
            if (btn.classList.contains('btn-value')) {
                    input.value += e.target.value;
                    clr += 1;
            }
        }
    }
}
