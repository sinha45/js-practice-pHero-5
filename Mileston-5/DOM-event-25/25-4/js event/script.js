function handleOnClick() {
    const handlerStatus = document.getElementById('handler-status');
    handlerStatus.innerText = 'Change by event handler'
}

document.getElementById('event-listener').addEventListener('click', function () {
    const handleStatus = document.getElementById('handler-status');
    handleStatus.innerText = 'this text is updated by event handler button'
})

//option2 recap


document.getElementById('buttton-update').addEventListener('click', function () {
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;

    const p = document.getElementById('input-text-display');
    p.innerText = inputText;

    inputField.value = '';
})

