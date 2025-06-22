const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = "pt-BR";
recognition.interimResults = false;

const textoCapturado = document.getElementById('textoCapturado');

recognition.onresult = (e) => {
    const texto = e.results[0][0].transcript;
    textoCapturado.textContent = texto;
    speakText(texto);
};
recognition.onerror = (e) => console.error('Erro:', e.error);

document.getElementById('botaoFalar').addEventListener('click', () => recognition.start());
document.getElementById('botaoVoz').addEventListener('click', () => {
    const texto = document.getElementById('inputTexto').value;
    if (texto.trim()) {
        textoCapturado.textContent = texto;
        speakText(texto);
    } else {
        alert('Digite um texto para ouvir.');
    }
});

document.getElementById('toggleTema').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

function speakText(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'pt-BR';
    speechSynthesis.speak(utterance);
}