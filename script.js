document.addEventListener("DOMContentLoaded", function(){
    const display = document.getElementById("display"); // Получаем input по id
    const buttons = document.querySelectorAll("button"); // Получаем все кнопки
    let currentInput = ""; // Переменная для хранения текущего ввода

    buttons.forEach(button => {
        button.addEventListener("click", function(){
            const value = button.textContent; // Получаем текст кнопки

            // Если нажата кнопка "<", удаляем последний символ
            if (value === "<") {
                currentInput = currentInput.slice(0, -1); // Убираем последний символ
                display.value = currentInput || '0'; // Обновляем input
            }
            // Если нажата кнопка "=", выполняем вычисление
            else if (value === "=") {
                try {
                    currentInput = eval(currentInput).toString(); // Вычисляем выражение
                    display.value = currentInput; // Обновляем input
                } catch (e) {
                    display.value = 'Error'; // Если ошибка, выводим "Error"
                }
            }
            // Если нажата другая кнопка (число или операция)
            else {
                if (currentInput === "0" && !['+', '-', '*', '%'].includes(value)) {
                    currentInput = value; // Если первое число, заменяем 0
                } else {
                    currentInput += value; // Добавляем символ к текущему выражению
                }
                display.value = currentInput; // Обновляем input
            }
        });
    });
});
