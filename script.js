// Змінні для доступу до HTML-елементів
const input = document.getElementById('input');
const translateBtn = document.getElementById('translateBtn');
const output = document.getElementById('output');

// Асинхронна функція перекладу
async function translateText() {
    const text = input.value;
    const safeText = encodeURIComponent(text);
    const email = 'your-email@example.com'; // Замініть на свою електронну адресу для MyMemory API
    const url = `https://api.mymemory.translated.net/get?q=${safeText}&langpair=uk|en&de=${email}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        output.innerText = data.responseData.translatedText;
    } catch (error) {
        output.innerText = 'Помилка перекладу: ' + error.message;
    }
}

// Прив'язуємо функцію до кліку по кнопці
translateBtn.addEventListener('click', translateText);