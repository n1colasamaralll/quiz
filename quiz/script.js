const questions = [
    {
        question: "Qual é a capital do Brasil?",
        options: ["São Paulo", "Brasília", "Rio de Janeiro", "Salvador"],
        answer: "Brasília"
    },
    {
        question: "Qual é o maior planeta do sistema solar?",
        options: ["Terra", "Marte", "Júpiter", "Saturno"],
        answer: "Júpiter"
    },
    {
        question: "Quem escreveu 'Dom Casmurro'?",
        options: ["Machado de Assis", "José de Alencar", "Jorge Amado", "Guimarães Rosa"],
        answer: "Machado de Assis"
    },
    {
        question: "Qual é o elemento químico representado pelo símbolo Au?",
        options: ["Prata", "Ouro", "Cobre", "Ferro"],
        answer: "Ouro"
    },
    {
        question: "Qual é o autor de '1984'?",
        options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "J.D. Salinger"],
        answer: "George Orwell"
    },
    {
        question: "Qual é a fórmula química da água?",
        options: ["H2O", "CO2", "NaCl", "HCl"],
        answer: "H2O"
    },
    {
        question: "Qual é a língua oficial do Brasil?",
        options: ["Espanhol", "Português", "Inglês", "Francês"],
        answer: "Português"
    },
    {
        question: "Quem pintou 'Mona Lisa'?",
        options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"],
        answer: "Leonardo da Vinci"
    },
    {
        question: "Qual é a capital da França?",
        options: ["Paris", "Londres", "Roma", "Berlim"],
        answer: "Paris"
    },
    {
        question: "Quem descobriu a penicilina?",
        options: ["Louis Pasteur", "Alexander Fleming", "Marie Curie", "Gregor Mendel"],
        answer: "Alexander Fleming"
    },
    {
        question: "Qual é o maior oceano do planeta?",
        options: ["Atlântico", "Índico", "Ártico", "Pacífico"],
        answer: "Pacífico"
    },
    {
        question: "Qual é o número atômico do oxigênio?",
        options: ["6", "8", "16", "18"],
        answer: "8"
    },
    {
        question: "Quem foi o primeiro homem a pisar na Lua?",
        options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Michael Collins"],
        answer: "Neil Armstrong"
    },
    {
        question: "Qual é o planeta mais próximo do Sol?",
        options: ["Mercúrio", "Vênus", "Terra", "Marte"],
        answer: "Mercúrio"
    },
    {
        question: "Qual é a capital da Alemanha?",
        options: ["Munique", "Berlim", "Hamburgo", "Frankfurt"],
        answer: "Berlim"
    },
    {
        question: "Quem escreveu 'O Senhor dos Anéis'?",
        options: ["J.K. Rowling", "J.R.R. Tolkien", "George R.R. Martin", "C.S. Lewis"],
        answer: "J.R.R. Tolkien"
    },
    {
        question: "Qual é a unidade de medida da intensidade da corrente elétrica?",
        options: ["Volt", "Ohm", "Ampère", "Watt"],
        answer: "Ampère"
    },
    {
        question: "Qual é o maior deserto do mundo?",
        options: ["Sahara", "Gobi", "Antártica", "Ártico"],
        answer: "Antártica"
    },
    {
        question: "Quem foi o primeiro presidente dos Estados Unidos?",
        options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"],
        answer: "George Washington"
    },
    {
        question: "Qual é a capital do Japão?",
        options: ["Seul", "Pequim", "Tóquio", "Osaka"],
        answer: "Tóquio"
    },
    {
        question: "Qual é a capital da Argentina?",
        options: ["Buenos Aires", "Santiago", "Montevidéu", "Lima"],
        answer: "Buenos Aires"
    },
    {
        question: "Quem pintou 'A Última Ceia'?",
        options: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Donatello"],
        answer: "Leonardo da Vinci"
    },
    {
        question: "Qual é o maior animal terrestre?",
        options: ["Elefante", "Girafa", "Rinoceronte", "Hipopótamo"],
        answer: "Elefante"
    },
    {
        question: "Qual é o planeta mais distante do Sol?",
        options: ["Netuno", "Urano", "Saturno", "Júpiter"],
        answer: "Netuno"
    },
    {
        question: "Qual é o autor de 'Dom Quixote'?",
        options: ["Miguel de Cervantes", "Lope de Vega", "Gabriel García Márquez", "Isabel Allende"],
        answer: "Miguel de Cervantes"
    },
    {
        question: "Qual é a fórmula química do sal de cozinha?",
        options: ["NaCl", "KCl", "CaCO3", "MgSO4"],
        answer: "NaCl"
    },
    {
        question: "Qual é a capital da Espanha?",
        options: ["Madrid", "Barcelona", "Valência", "Sevilha"],
        answer: "Madrid"
    },
    {
        question: "Quem escreveu 'O Pequeno Príncipe'?",
        options: ["Antoine de Saint-Exupéry", "Jules Verne", "Herman Melville", "Charles Dickens"],
        answer: "Antoine de Saint-Exupéry"
    },
    {
        question: "Qual é o maior continente do mundo?",
        options: ["Ásia", "África", "América do Norte", "Europa"],
        answer: "Ásia"
    },
    {
        question: "Quem descobriu a América?",
        options: ["Cristóvão Colombo", "Vasco da Gama", "Ferdinand Magellan", "Pedro Álvares Cabral"],
        answer: "Cristóvão Colombo"
    },
    {
        question: "Qual é a capital da Itália?",
        options: ["Roma", "Milão", "Nápoles", "Turim"],
        answer: "Roma"
    },
    {
        question: "Qual é a unidade de medida da frequência?",
        options: ["Hertz", "Newton", "Pascal", "Joule"],
        answer: "Hertz"
    },
    {
        question: "Quem é o autor da teoria da relatividade?",
        options: ["Isaac Newton", "Albert Einstein", "Niels Bohr", "Galileu Galilei"],
        answer: "Albert Einstein"
    },
    {
        question: "Qual é a capital do Canadá?",
        options: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
        answer: "Ottawa"
    },
    {
        question: "Qual é o nome da galáxia onde está o nosso sistema solar?",
        options: ["Via Láctea", "Andrômeda", "Galáxia de Triângulo", "Messier 87"],
        answer: "Via Láctea"
    },
    {
        question: "Qual é o maior estado dos Estados Unidos em área?",
        options: ["Texas", "Alaska", "California", "Montana"],
        answer: "Alaska"
    },
    {
        question: "Quem foi o último imperador do Brasil?",
        options: ["Dom Pedro I", "Dom Pedro II", "Dom João VI", "Dom João V"],
        answer: "Dom Pedro II"
    },
    {
        question: "Qual é o principal gás responsável pelo efeito estufa?",
        options: ["Dióxido de carbono", "Metano", "Óxidos de nitrogênio", "Ozônio"],
        answer: "Dióxido de carbono"
    },
    {
        question: "Qual é a moeda oficial do Japão?",
        options: ["Yuan", "Won", "Dólar", "Iene"],
        answer: "Iene"
    },
    {
        question: "Qual é o maior órgão do corpo humano?",
        options: ["Fígado", "Coração", "Pele", "Pulmão"],
        answer: "Pele"
    },
    {
        question: "Qual é a fórmula química do dióxido de carbono?",
        options: ["CO2", "CO", "C2H6O", "H2O"],
        answer: "CO2"
    },
    {
        question: "Qual é o primeiro mês do ano?",
        options: ["Janeiro", "Fevereiro", "Março", "Abril"],
    }    
];

const correctsound = document.getElementById('correct-sound')
const incorrectsound = document.getElementById('incorrect-sound')

let currentQuestionIndex = 0;
let score = 0;

function showModal() {
    const modal = document.getElementById('modal');
    const questionElement = document.getElementById('modal-question');
    const optionsElement = document.getElementById('modal-options');
    const nextButton = document.getElementById('next-question');
    const feedbackElement = document.getElementById('feedback');

    const question = questions[currentQuestionIndex];
    questionElement.textContent = question.question;
    optionsElement.innerHTML = '';

    question.options.forEach(option => {
        const label = document.createElement('label');
        label.classList.add('option');

        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'option';
        input.value = option;

        label.appendChild(input);
        label.appendChild(document.createTextNode(option));
        optionsElement.appendChild(label);
    });

    feedbackElement.textContent = ''; // Limpa o feedback anterior
    feedbackElement.classList.remove('correct', 'incorrect');
    modal.style.display = 'block';

    nextButton.onclick = () => {
        const selectedOption = document.querySelector('input[name="option"]:checked');
        if (selectedOption) {
            if (selectedOption.value === question.answer) {
                feedbackElement.textContent = 'Resposta correta!';
                feedbackElement.classList.add('correct');
                score++;
                correctsound.play();
            } else {
                feedbackElement.textContent = 'Resposta incorreta. A resposta correta é: ' + question.answer;
                feedbackElement.classList.add('incorrect');
                incorrectsound.play();
            }

            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                setTimeout(showModal, 2000); // Exibe a próxima pergunta após 2 segundos
            } else {
                document.getElementById('result').textContent = `Você acertou ${score} de ${questions.length} perguntas.`;
                document.getElementById('result').classList.add(score === questions.length ? 'correct' : 'incorrect');
                modal.style.display = 'none';
                document.getElementById('start').style.display = 'block';
            }
        }
    };
}

document.getElementById('start').addEventListener('click', () => {
    document.getElementById('start').style.display = 'none';
    showModal();
});

document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});

window.onclick = (event) => {
    if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
};