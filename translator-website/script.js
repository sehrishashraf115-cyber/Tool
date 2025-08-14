async function translateWord() {
    const inputWord = document.getElementById('inputWord').value;
    const targetLang = document.getElementById('targetLang').value;
    const output = document.getElementById('translatedText');

    if (!inputWord) {
        output.textContent = "Please enter a word to translate.";
        return;
    }

    try {
        const response = await fetch('https://libretranslate.com/translate', {
            method: 'POST',
            body: JSON.stringify({
                q: inputWord,
                source: 'en',
                target: targetLang,
                format: 'text'
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        const data = await response.json();
        output.textContent = data.translatedText;
    } catch (error) {
        console.error('Translation error:', error);
        output.textContent = "An error occurred while translating.";
    }
}
