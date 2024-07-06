const num = document.getElementById("abc");
const search = document.getElementById("value1");
const b = document.getElementById("b");

num.addEventListener('click', pressnum);
b.addEventListener('click', presszero);

function pressnum(event) {
    const button = event.target.closest('button');
    if (button) {
        const value = button.textContent;
        if (!isNaN(value)) {
            search.value += value;
        } else if (value === 'AC') {
            search.value = '';
        } else if (value === 'DEL') {
            search.value = search.value.slice(0, -1);
        } else if (['+', '-', '*','/', '%', '='].includes(value)) {
            if (value === '=') {
                try {
                    let expression = search.value.replace(/%/g, '/100');
                    search.value = eval(expression);
                } catch (error) {
                    search.value = 'Error';
                }
            } else {
                search.value += ` ${value} `;
            }
        }
    }
}

function presszero(event) {
    const button = event.target.closest('button');
    if (button) {
        const value = button.textContent;
        if (value === '0' || value === '.') {
            search.value += value;
        }
    }
}
