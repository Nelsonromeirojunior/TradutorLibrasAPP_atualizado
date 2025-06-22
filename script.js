const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = "pt-BR";
recognition.interimResults = true;
recognition.continuous = true;

const textoCapturado = document.getElementById('textoCapturado');

// Atualizando texto capturado
recognition.onresult = (e) => {
    let texto = '';
    for (let i = e.resultIndex; i < e.results.length; i++) {
        texto += e.results[i][0].transcript;
    }
    textoCapturado.textContent = texto.trim();
};

// Reinicia automaticamente
recognition.onend = () => {
    recognition.start();
};

recognition.onerror = (e) => {
    console.error('Erro:', e.error);
};

// Botão para iniciar a escuta
document.getElementById('botaoIniciar').addEventListener('click', () => {
    recognition.start();
});

// Falar texto digitado
document.getElementById('botaoVoz').addEventListener('click', () => {
    const texto = document.getElementById('inputTexto').value;
    if (texto.trim()) {
        textoCapturado.textContent = texto;
        speakText(texto);
    } else {
        alert('Digite um texto para ouvir.');
    }
});

// Alternar tema
document.getElementById('toggleTema').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

document.addEventListener('DOMContentLoaded', () => {
    recognition.start();

    // Define intervalo noturno (ex.: das 18h até as 6h)
    const horaAtual = new Date().getHours();
    if (horaAtual >= 18 || horaAtual < 6) {
        document.body.classList.add('dark-mode');
    }
});


function speakText(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'pt-BR';
    speechSynthesis.speak(utterance);
}

// Já começamos ouvindo assim que a página carregar
document.addEventListener('DOMContentLoaded', () => {
    recognition.start();
});
