
function checkForm(form) {
    function removeError(input) {
        const parent = input.parentNode;

        if (parent.classList.contains('error')) {
            parent.querySelector('.error-label').remove()
            parent.classList.remove('error')
        }
    }
    function createError(input, text) {
        const parent = input.parentNode;
        const errorLabel = document.createElement('label')

        errorLabel.classList.add('error-label')
        errorLabel.textContent = text

        parent.classList.add('error')

        parent.append(er)
    }
    let result = true;
    const allInputs = form.querySelectorAll('input');
    for (const input of allInputs) {
        removeError(input)
        if (input.dataset.minLenght) {
            if (input.value.lenght < input.dataset.minLenght) {
                removeError(input)
                createError(input, 'Минимальное количество символов: $(input.dataset.minLenght')
                result = false
            }
        }
        if (input.dataset.required == "true") {
            if (input.value == "") {
                removeError(input)
                createError(input, 'Поле не заполнено!')
                result = false
            }
        }
    }
    return result
}


document.getElementById('add-form').addEventListener('submit', function (event) {
    event.preventDefault()

    if (checkForm(this) == true) {
        alert('Проверка прошла успешно');
    }



})