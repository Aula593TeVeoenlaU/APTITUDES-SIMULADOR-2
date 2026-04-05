// ==========================
// SIMULADOR DE INGRESO
// ==========================

// Preguntas (ACTUALIZADAS SEGÚN EL WORD "SOLUCIONARIO Prueba 2")
// IMPORTANTE: Debes rellenar la propiedad 'answer: ""' con la respuesta correcta (ej. 'a', 'b', 'c', 'd')
// IMPORTANTE: Debes actualizar las rutas 'image: "..."' con los nombres de tus nuevos archivos de imagen.

const questions = [
    // === RAZONAMIENTO MATEMÁTICO ===
    { 
      id: 1, 
      block: 'RAZONAMIENTO MATEMÁTICO', 
      text: 'Sean \\(u\\) y \\(v\\) números reales distintos de 0; ♦ un operador binario, tal que: \\(u ♦ v = -u^v\\). Si \\(x = (2 ♦ 3) ♦ 2\\), entonces: \\(x\\) es igual a:',
      options: [
          'a) -128', //
          'b) 124', //
          'c) -64', //
          'd) 64' //
      ], 
      answer: 'c' // <-- ¡¡RELLENA LA RESPUESTA CORRECTA AQUÍ!!
    },
    { 
      id: 2, 
      block: 'RAZONAMIENTO MATEMÁTICO', 
      text: '¿Qué proporción del tráfico de abril y mayo de ambos sitios web fue para cuisine.net?', //
      image: 'imagenes/pregunta2_grafico.jpg', // <-- ACTUALIZA ESTA RUTA DE IMAGEN (Gráfico de tráfico)
      imageStyle: 'max-width: 450px;',
      options: [
          'a) 29,7%', //
          'b) 31,3%', //
          'c) 34,2%', //
          'd) 38,1%' //
      ], 
      answer: 'd' // <-- ¡¡RELLENA LA RESPUESTA CORRECTA AQUÍ!!
    },
    { 
      id: 3, 
      block: 'RAZONAMIENTO MATEMÁTICO', 
      text: 'En un plano xy, la ecuación de una línea recta es \\(x+3y=12\\). ¿Cuál de las siguientes es la ecuación de una línea perpendicular a la dada?', //
      options: [
          'a) &nbsp;\\(y=x+2\\)', //
          'b) &nbsp;\\(y=-3x+2\\)', //
          'c) &nbsp;\\(y=3x-6\\)', //
          'd) &nbsp;\\(y=\\frac{1}{3}x+6\\)' //
      ], 
      answer: 'c' // <-- ¡¡RELLENA LA RESPUESTA CORRECTA AQUÍ!!
    },
    { 
      id: 4, 
      block: 'RAZONAMIENTO MATEMÁTICO', 
      text: 'Sabiendo que: \\(x, y \\in \\mathbb{R}; x, y \\neq 0 \\land \\frac{x}{y} + \\frac{y}{x} = 7\\); entonces: \\(\\left(\\sqrt{\\frac{x}{y}} + \\sqrt{\\frac{y}{x}}\\right)^2 = ?\\)', //
      options: [
          'a) 9', //
          'b) 21', //
          'c) 7', //
          'd) 49' //
      ], 
      answer: 'a' // <-- ¡¡RELLENA LA RESPUESTA CORRECTA AQUÍ!!
    },
    { 
      id: 5, 
      block: 'RAZONAMIENTO MATEMÁTICO', 
      text: 'En la siguiente figura, el círculo está inscrito en el cuadrado de lado 2. ¿Cuál es el área de la región sombreada del círculo?', //
      image: 'imagenes/pregunta5.jpg', // <-- ACTUALIZA ESTA RUTA DE IMAGEN
      imageStyle: 'max-width: 150px;',
      options: [
          'a) &nbsp;\\(\\frac{\\pi}{4}\\)', //
          'b) &nbsp;\\(\\frac{\\pi}{2}\\)', //
          'c) &nbsp;\\(\\pi\\)', //
          'd) &nbsp;\\(\\frac{3\\pi}{2}\\)' //
      ], 
      answer: 'a' // <-- ¡¡RELLENA LA RESPUESTA CORRECTA AQUÍ!!
    },
    { 
      id: 6, 
      block: 'RAZONAMIENTO MATEMÁTICO', 
      text: 'Fernanda hace gelatinas de sandía para la venta. Ella NO compra sandías que pesen menos de 2 libras ni más de 10 libras. Si x representa el peso en libras de las sandías que NO compra Fernanda, ¿cuál de las siguientes opciones representa todos los posibles valores de x?', //
      options: [
          'a) &nbsp;\\(|x-2| > 10\\)', //
          'b) &nbsp;\\(|x-4| > 6\\)', //
          'c) &nbsp;\\(|x-5| > 5\\)', //
          'd) &nbsp;\\(|x-6| > 4\\)' //
      ], 
      answer: 'd' // <-- ¡¡RELLENA LA RESPUESTA CORRECTA AQUÍ!!
    },
    { 
      id: 7, 
      block: 'RAZONAMIENTO MATEMÁTICO', 
      text: 'Complete la siguiente secuencia: \n 0,125  ;  0,4  ;  0,5  ;  1,4  ;  2  ;  2,4  ;  ___', //
      options: [
          'a) 8', //
          'b) 3,4', //
          'c) 4,5', //
          'd) 6,5' //
      ], 
      answer: 'a' // <-- ¡¡RELLENA LA RESPUESTA CORRECTA AQUÍ!!
    },
    { 
      id: 8, 
      block: 'RAZONAMIENTO MATEMÁTICO', 
      text: 'El promedio (media aritmética) de 5 números enteros pares positivos es 60. Si p tiene el valor más alto de esos enteros. ¿Cuál es el valor más alto posible de p?', //
      options: [
          'a) 292', //
          'b) 118', //
          'c) 60', //
          'd) 300' //
      ], 
      answer: 'a' // <-- ¡¡RELLENA LA RESPUESTA CORRECTA AQUÍ!!
    },

    // === RAZONAMIENTO ESPACIAL ===
    { 
      id: 9, 
      block: 'RAZONAMIENTO ESPACIAL', 
      text: 'Seleccione la mejor alternativa que establezca la secuencia.', //
      image: 'imagenes/pregunta9.jpg', // <-- ACTUALIZA ESTA RUTA DE IMAGEN (Incluir las 4 opciones)
      imageStyle: 'max-width: 250px;',
      options: [
          'a) Opción 1', //
          'b) Opción 3', //
          'c) Opción 2', //
          'd) Opción 4' //
      ], 
      answer: 'd' // <-- ¡¡RELLENA LA RESPUESTA CORRECTA AQUÍ!!
    },
    { 
      id: 10, 
      block: 'RAZONAMIENTO ESPACIAL', 
      text: 'Observe la relación que existe entre las dos primeras figuras. Luego, observe la tercera figura y, de las cuatro opciones siguientes, escoja la figura que se relaciona con esta.', //
      image: 'imagenes/pregunta10.jpg', // <-- ACTUALIZA ESTA RUTA DE IMAGEN (Incluir las 4 opciones)
      imageStyle: 'max-width: 350px;',
      options: [
          'a) 2', //
          'b) 1', //
          'c) 3', //
          'd) 4' //
      ], 
      answer: 'c' // <-- ¡¡RELLENA LA RESPUESTA CORRECTA AQUÍ!!
    },
    
    // ===== INICIO DE LA CORRECCIÓN =====
    // Arreglé la pregunta 11. Quité la llave duplicada 'image:' y 'imageStyle:'.
    // Puse la segunda imagen (las opciones) dentro de 'textAfterImage' usando HTML.
    { 
      id: 11, 
      block: 'RAZONAMIENTO ESPACIAL', 
      text: 'Considere la siguiente figura:', //
      image: 'imagenes/pregunta11_net.jpg', // <-- Imagen 1 (La red del cubo)
      imageStyle: 'max-width: 250px;',
      textAfterImage: 'Si se dobla para formar un cubo, ¿cuál figura se obtiene? <div class="image-container"><img src="imagenes/pregunta11_options.jpg" alt="Opciones de cubo" style="max-width: 500px;"></div>',
      options: [
          'a) Opción 1', //
          'b) Opción 2', //
          'c) Opción 3', //
          'd) Opción 4' //
      ], 
      answer: 'b' // <-- ¡¡RELLENA LA RESPUESTA CORRECTA AQUÍ!!
    },
    // ===== FIN DE LA CORRECCIÓN =====

    { 
      id: 12, 
      block: 'RAZONAMIENTO ESPACIAL', 
      text: 'Elige la figura que no pertenece a esta categoría:', //
      image: 'imagenes/pregunta12.jpg', // <-- ACTUALIZA ESTA RUTA DE IMAGEN (Las 4 figuras)
      imageStyle: 'max-width: 450px;',
      options: [
          'a) 2', //
          'b) 1', //
          'c) 4', //
          'd) 3' //
      ], 
      answer: 'd' // <-- ¡¡RELLENA LA RESPUESTA CORRECTA AQUÍ!!
    },
    { 
      id: 13, 
      block: 'RAZONAMIENTO ESPACIAL', 
      text: 'Seleccione la mejor alternativa que establezca la secuencia.', //
      image: 'imagenes/pregunta13.jpg', // <-- ACTUALIZA ESTA RUTA DE IMAGEN (Incluir las 4 opciones)
      imageStyle: 'max-width: 300px;',
      options: [
          'a) Opción 2', //
          'b) Opción 1', //
          'c) Opción 4', //
          'd) Opción 3' //
      ], 
      answer: 'b' // <-- ¡¡RELLENA LA RESPUESTA CORRECTA AQUÍ!!
    },

    // === RAZONAMIENTO VERBAL ===
    { 
      id: 14, 
      block: 'RAZONAMIENTO VERBAL', 
      text: 'Considere el siguiente texto: <p>Aunque parezca <mark>paradójico</mark>, los mensajes más cotidianos son los más difíciles de descifrar porque el hablante, dada la poca <mark>trascendencia</mark> del mensaje o la rapidez con que debe pensarlo, no tiene mucho tiempo para reflexionar sobre él.', //
      textAfterImage: 'Según el texto, ¿cuáles palabras son equivalentes a “paradójico” y “trascendencia”?', //
      options: [
          'a) absurdo-importancia', //
          'b) controversial-eficacia', //
          'c) incomprensible-necesidad', //
          'd) cuestionable-consecuencia' //
      ], 
      answer: 'a' // <-- ¡¡RELLENA LA RESPUESTA CORRECTA AQUÍ!!
    },
    { 
      id: 15, 
      block: 'RAZONAMIENTO VERBAL', 
      text: 'Seleccione la alternativa que exprese el significado más opuesto al de la palabra escrita en mayúsculas. <p>EXÁNIME', //
      options: [
          'a) vigoroso', //
          'b) enervado', //
          'c) acérrimo', //
          'd) pulquérrimo' //
      ], 
      answer: 'a' // <-- ¡¡RELLENA LA RESPUESTA CORRECTA AQUÍ!!
    },
    { 
      id: 16, 
      block: 'RAZONAMIENTO VERBAL', 
      text: 'Considere el siguiente texto: <p>“Los programas “divertidos” tienen mucho rating –y el rating es lo supremo–, no importa a costa de qué valor, ni quien lo financia. Son esos programas donde divertirse es degradar, o donde todo se banaliza. Como, si habiendo perdido la capacidad para la grandeza, nos conformáramos con una comedia de regular calidad”.', //
      textAfterImage: 'Considere las siguientes afirmaciones: \n A. Los programas culturales tienen poca popularidad. \n B. Las personas seleccionan el programa según el nivel de audiencia. \n C. La oferta tiende hacia la superficialidad y el entretenimiento. \n <p>De las anteriores, ¿cuáles se infieren del texto?', //
      options: [
          'a) Solo A', //
          'b) Solo C', //
          'c) A y B', //
          'd) B y C' //
      ], 
      answer: 'b' // <-- ¡¡RELLENA LA RESPUESTA CORRECTA AQUÍ!!
    },
    { 
      id: 17, 
      block: 'RAZONAMIENTO VERBAL', 
      text: 'En el siguiente ejercicio, seleccione la alternativa que establezca la misma relación que hay entre las dos primeras palabras escritas con mayúsculas. <p>INERCIA es a MOVIMIENTO como:', //
      options: [
          'a) Demencia es a agudeza', //
          'b) Negligencia es a responsabilidad', //
          'c) Apatía es a bizarría', //
          'd) Indiferencia es a afecto' //
      ], 
      answer: 'b' // <-- ¡¡RELLENA LA RESPUESTA CORRECTA AQUÍ!!
    },
    { 
      id: 18, 
      block: 'RAZONAMIENTO VERBAL', 
      text: 'Cada uno de los siguientes enunciados tiene uno o dos espacios en blanco. Cada espacio indica que se ha omitido una palabra. Debajo de los enunciados hay cuatro opciones señaladas con las letras a, b, c, d. Seleccione la opción que, al insertarse en el enunciado, complete mejor su significado: <p>La __________ es la raíz de innumerables y terribles males y contraria a la vida __________.', //
      options: [
          'a) desesperación – agitada', //
          'b) guerra – celestial', //
          'c) violencia – espiritual', //
          'd) bondad – divina' //
      ], 
      answer: 'c' // <-- ¡¡RELLENA LA RESPUESTA CORRECTA AQUÍ!!
    },
    { 
      id: 19, 
      block: 'RAZONAMIENTO VERBAL', 
      text: 'En el siguiente ítem escoja la opción cuyo significado sea ajeno (diferente) al campo de significación común a las demás palabras y a la escrita en letras mayúsculas (que no comparta relación semántica). <p>ALHAJA', //
      options: [
          'a) Aro', //
          'b) Arete', //
          'c) Collar', //
          'd) Cofre' //
      ], 
      answer: 'd' // <-- ¡¡RELLENA LA RESPUESTA CORRECTA AQUÍ!!
    },
    { 
      id: 20, 
      block: 'RAZONAMIENTO VERBAL', 
      text: 'En el siguiente ítem, usted deberá escoger la palabra con significado más similar a la escrita con letras mayúsculas. <p>COMPLACENCIA', //
      options: [
          'a) júbilo', //
          'b) triunfo', //
          'c) lujuria', //
          'd) fruición' //
      ], 
      answer: 'd' // <-- ¡¡RELLENA LA RESPUESTA CORRECTA AQUÍ!!
    }
];


// Variables globales
let currentQuestionIndex = 0;
let timerInterval;
const totalTime = 24 * 60; // 24 minutos (ACTUALIZADO)
let timeRemaining = totalTime;
let userAnswers = {};
let flaggedQuestions = new Set();
let isQuizSubmitted = false;
let isQuizActive = false;

// **FUNCIÓN MODIFICADA**
function startQuiz() {
    const email = window.currentUser ? window.currentUser.email : null;
    if (!email) {
        alert("Error: No se ha podido identificar al usuario. Por favor, inicie sesión de nuevo.");
        return;
    }

    // Verificar intentos antes de empezar
    const isAdmin = email === "sebastian.neto@593teveoenlau.ec";
    let attempts = localStorage.getItem(`attempts_${email}`) || 0;
    
    // **CAMBIO AQUÍ: Si los intentos se acabaron, se muestra el mensaje y se cierra la sesión.**
    if (!isAdmin && attempts >= 2) {
      alert("Ya alcanzaste el límite de 2 intentos. Se cerrará tu sesión.");
      logoutAndReload(); // Llama a la función para cerrar sesión y recargar
      return;
    }
    // **FIN DEL CAMBIO**

    if (typeof registerAttempt === 'function') {
        registerAttempt();
    } else {
        console.error("La función registerAttempt no está definida.");
        return;
    }

    isQuizActive = true;
    currentQuestionIndex = 0;
    timeRemaining = totalTime;
    userAnswers = {};
    flaggedQuestions.clear();
    isQuizSubmitted = false;
    document.getElementById('intro-page-container').style.display = 'none';
    document.getElementById('quiz-page').style.display = 'flex';
    renderQuiz();
    startTimer();
    saveProgress();
}

function renderQuiz() {
    renderNavigation();
    renderQuestion(currentQuestionIndex);
    if (window.MathJax) {
        window.MathJax.typeset();
    }
}

function renderNavigation() {
    document.getElementById('math-nav-buttons').innerHTML = '';
    document.getElementById('spatial-nav-buttons').innerHTML = '';
    document.getElementById('verbal-nav-buttons').innerHTML = '';
    questions.forEach((q, index) => {
        const button = document.createElement('button');
        button.textContent = q.id;
        button.onclick = () => {
            renderQuestion(index);
            saveProgress(); 
        };
        const blockContainerId = 
            q.block.includes('MATEMÁTICO') ? 'math-nav-buttons' :
            q.block.includes('ESPACIAL') ? 'spatial-nav-buttons' :
            'verbal-nav-buttons';
        if (userAnswers[q.id]) button.classList.add('answered');
        if (flaggedQuestions.has(q.id)) button.classList.add('flagged');
        if (index === currentQuestionIndex) button.classList.add('active');
        document.getElementById(blockContainerId).appendChild(button);
    });
}

function renderQuestion(index) {
    currentQuestionIndex = index;
    const container = document.getElementById('question-container');
    container.innerHTML = '';
    const q = questions[index];
    document.getElementById('section-title').textContent = q.block;
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question active';
    
    // ===== INICIO DE MODIFICACIÓN (PREGUNTAS 9 y 12) =====
    let html = `<h3>Pregunta ${q.id}.</h3><p>${q.text.replace(/\n/g, '<br>')}</p>`; // Se añade replace para saltos de línea
    
    if (q.image) {
        const style = q.imageStyle || '';
        html += `<div class="image-container"><img src="${q.image}" alt="Imagen para el ejercicio ${q.id}" style="${style}"></div>`;
    }
    
    // Nueva lógica para mostrar texto DESPUÉS de la imagen
    if (q.textAfterImage) {
        html += `<p>${q.textAfterImage.replace(/\n/g, '<br>')}</p>`;
    }
    // ===== FIN DE MODIFICACIÓN =====

    html += '<div class="options">';
    if (q.optionImages) {
        // IDs 11 y 13 usan opciones de imagen horizontales, 12 usa vertical
        const containerClass = q.id === 12 ? 'image-options-container-vertical' : 'image-options-container';
        html += `<div class="${containerClass}">`;
        q.options.forEach((option, i) => {
            const optionValue = String.fromCharCode(97 + i);
            const checked = userAnswers[q.id] === optionValue ? 'checked' : '';
            html += `
                <label class="image-option-label">
                    <input type="radio" name="q${q.id}" value="${optionValue}" ${checked} onclick="handleOptionClick(${q.id}, this)">
                    <span>${option}</span>
                    <img src="${q.optionImages[i]}" alt="Opción ${optionValue}">
                </label>
            `;
        });
        html += `</div>`;
    } else {
        q.options.forEach((option, i) => {
            const optionValue = option.charAt(0).toLowerCase();
            const checked = userAnswers[q.id] === optionValue ? 'checked' : '';
            html += `
                <label>
                    <input type="radio" name="q${q.id}" value="${optionValue}" ${checked} onclick="handleOptionClick(${q.id}, this)">
                    ${option}
                </label>
            `;
        });
    }
    html += '</div>';
    questionDiv.innerHTML = html;
    container.appendChild(questionDiv);
    
    if (window.MathJax) {
        window.MathJax.typesetPromise([questionDiv]).catch(function (err) {
            console.log('MathJax error: ' + err.message);
        });
    }

    updateNavigationButtons();
}

function handleOptionClick(questionId, element) {
    userAnswers[questionId] = element.value;
    saveProgress(); 
    renderNavigation();
}

function updateNavigationButtons() {
    document.getElementById('next-btn').style.display = currentQuestionIndex === questions.length - 1 ? 'none' : 'block';
    document.getElementById('prev-btn').style.display = currentQuestionIndex === 0 ? 'none' : 'block';
    const flagBtn = document.getElementById('flag-btn');
    if (flaggedQuestions.has(questions[currentQuestionIndex].id)) {
        flagBtn.style.backgroundColor = '#ffc107';
    } else {
        flagBtn.style.backgroundColor = '#6c757d';
    }
    renderNavigation();
}

function toggleFlaggedQuestion() {
    const currentId = questions[currentQuestionIndex].id;
    if (flaggedQuestions.has(currentId)) {
        flaggedQuestions.delete(currentId);
    } else {
        flaggedQuestions.add(currentId);
    }
    saveProgress();
    updateNavigationButtons();
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        renderQuestion(currentQuestionIndex + 1);
        saveProgress();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        renderQuestion(currentQuestionIndex - 1);
        saveProgress();
    }
}

function startTimer() {
    timerInterval = setInterval(() => {
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            submitQuiz();
            return;
        }
        timeRemaining--;
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        document.getElementById('timer').textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        if (timeRemaining % 5 === 0) {
            saveProgress();
        }
    }, 1000);
}

function submitQuiz() {
    if (isQuizSubmitted) return; 
    clearInterval(timerInterval);
    isQuizSubmitted = true;
    isQuizActive = false; 
    localStorage.removeItem("quizState"); 
    
    document.getElementById('quiz-page').style.display = 'none';
    document.getElementById('results-page').style.display = 'flex';
    displayResultsPage();
}

function calculateResults() {
    let correctAnswers = 0;
    questions.forEach(q => {
        if (userAnswers[q.id] === q.answer) {
            correctAnswers++;
        }
    });
    return { correctAnswers, totalQuestions: questions.length };
}

function displayResultsPage() {
    const existingAdjustedScore = document.querySelector('.adjusted-score-display');
    if (existingAdjustedScore) {
        existingAdjustedScore.remove();
    }
    const results = calculateResults();
    const resultsScoreEl = document.querySelector('.results-score');
    resultsScoreEl.textContent = `Aciertos: ${results.correctAnswers} / ${results.totalQuestions} (${(results.correctAnswers / results.totalQuestions * 100).toFixed(1)}%)`;
    const baseScore = 425;
    const variableScore = 575;
    const pointsPerAnswer = variableScore / results.totalQuestions;
    const finalScore = Math.round(baseScore + (results.correctAnswers * pointsPerAnswer));

    // ==========================================
    // ¡NUEVO!: LLAMAMOS A LA FUNCIÓN DE ENVÍO AQUÍ
    // ==========================================
    sendResultsEmail(results, finalScore);

    const adjustedScoreEl = document.createElement('p');
    adjustedScoreEl.className = 'results-score adjusted-score-display';
    adjustedScoreEl.style.marginTop = '15px';
    adjustedScoreEl.style.fontSize = '2.8em';
    adjustedScoreEl.innerHTML = `Puntuación Final: <strong style="color: var(--accent-color);">${finalScore} / 1000</strong>`;
    resultsScoreEl.parentNode.insertBefore(adjustedScoreEl, resultsScoreEl.nextSibling);
    const resultsContent = document.getElementById('results-content');
    resultsContent.innerHTML = '';
    questions.forEach(q => {
        const userAnswer = userAnswers[q.id];
        const isCorrect = userAnswer === q.answer;
        const block = document.createElement('div');
        block.className = 'results-question-block';
        
        // ===== MODIFICACIÓN EN RESULTADOS (PREGUNTAS 9 y 12) =====
        let html = `<h4>Pregunta ${q.id}. ${q.block}</h4><p>${q.text.replace(/\n/g, '<br>')}</p>`; // Se añade replace
        if (q.image) {
            const style = q.imageStyle || '';
            html += `<div class="image-container"><img src="${q.image}" alt="Imagen para el ejercicio ${q.id}" style="${style}"></div>`;
        }
        // Nueva lógica para mostrar texto DESPUÉS de la imagen
        if (q.textAfterImage) {
            html += `<p>${q.textAfterImage.replace(/\n/g, '<br>')}</p>`;
        }
        // ===== FIN DE MODIFICACIÓN =====

        html += '<div class="options">';
        if (q.optionImages) {
            const containerClass = q.id === 12 ? 'image-options-container-vertical' : 'image-options-container';
            html += `<div class="${containerClass}">`;
            q.options.forEach((option, i) => {
                const optionValue = String.fromCharCode(97 + i);
                const isSelected = userAnswer === optionValue;
                const isTheCorrectAnswer = q.answer === optionValue;
                let labelClass = 'image-option-label';
                if (isSelected && isCorrect) labelClass += ' correct';
                else if (isSelected && !isCorrect) labelClass += ' incorrect';
                else if (isTheCorrectAnswer) labelClass += ' correct';
                html += `
                    <label class="${labelClass}">
                        <input type="radio" name="results_q${q.id}" value="${optionValue}" ${isSelected ? 'checked' : ''} disabled>
                        <span>${option}</span>
                        <img src="${q.optionImages[i]}" alt="Opción ${optionValue}">
                    </label>`;
            });
            html += `</div>`;
        } else {
            q.options.forEach((option, i) => {
                const optionValue = option.charAt(0).toLowerCase();
                const isSelected = userAnswer === optionValue;
                const isTheCorrectAnswer = q.answer === optionValue;
                let labelClass = '';
                if (isSelected && isCorrect) labelClass = 'correct';
                else if (isSelected && !isCorrect) labelClass = 'incorrect';
                else if (isTheCorrectAnswer) labelClass = 'correct';
                html += `
                    <label class="${labelClass}">
                        <input type="radio" name="results_q${q.id}" value="${optionValue}" ${isSelected ? 'checked' : ''} disabled>
                        ${option}
                    </label>`;
            });
        }
        html += '</div>';
        if (!isCorrect) {
            html += `<p style="color: red; margin-margin-top: 10px;">Tu respuesta: ${userAnswer ? userAnswer.toUpperCase() : 'Ninguna'}. Respuesta correcta: <strong>${q.answer.toUpperCase()}</strong></p>`;
        } else {
            html += `<p style="color: green; margin-top: 10px;">¡Respuesta correcta!</p>`;
        }
        block.innerHTML = html;
        resultsContent.appendChild(block);
    });

    if (window.MathJax) {
        window.MathJax.typesetPromise([resultsContent]).catch(function (err) {
            console.log('MathJax error: ' + err.message);
        });
    }
}

function saveProgress() {
    if (!isQuizActive || isQuizSubmitted) return;
    const state = {
        currentQuestionIndex,
        userAnswers,
        timeRemaining,
        flaggedQuestions: Array.from(flaggedQuestions)
    };
    localStorage.setItem("quizState", JSON.stringify(state));
}

function restoreProgress() {
    const savedState = localStorage.getItem("quizState");
    if (savedState) {
        const saved = JSON.parse(savedState);
        isQuizActive = true; 
        document.getElementById('intro-page-container').style.display = 'none';
        document.getElementById('quiz-page').style.display = 'flex';
        currentQuestionIndex = saved.currentQuestionIndex || 0;
        userAnswers = saved.userAnswers || {};
        timeRemaining = saved.timeRemaining || totalTime;
        flaggedQuestions = new Set(saved.flaggedQuestions || []);
        renderQuiz();
        startTimer();
    }
}

// LÓGICA DE INICIO CENTRALIZADA (sin cambios)
document.addEventListener('DOMContentLoaded', () => {
    auth.onAuthStateChanged(user => {
        if (user) {
            window.currentUser = user; 
            document.getElementById('login-page').style.display = 'none';
            document.getElementById('app-container').style.display = 'block';

            if (localStorage.getItem("quizState")) {
                restoreProgress();
            } else {
                document.getElementById('intro-page-container').style.display = 'flex';
                document.getElementById('quiz-page').style.display = 'none';
                document.getElementById('results-page').style.display = 'none';
            }
        } else {
            window.currentUser = null;
            document.getElementById('login-page').style.display = 'flex';
            document.getElementById('app-container').style.display = 'none';
        }
    });
});

window.addEventListener("beforeunload", (e) => {
    if (isQuizActive && !isQuizSubmitted) {
        const confirmationMessage = '¡Atención! Si cierras o recargas la pestaña, tu intento se enviará automáticamente. ¿Estás seguro?';
        e.returnValue = confirmationMessage; 
        return confirmationMessage;
    }
});

window.addEventListener("pagehide", () => {
    if (isQuizActive && !isQuizSubmitted) {
        saveProgress();
    }
});

// ==========================
// ENVÍO DE RESULTADOS POR CORREO
// ==========================
async function sendResultsEmail(results, finalScore) {
    // Obtenemos el correo del usuario logueado
    const userEmail = window.currentUser ? window.currentUser.email : 'Usuario Desconocido';

    // Construimos el detalle de cada pregunta
    let answersSummary = "Detalle de respuestas:\n\n";
    
    questions.forEach(q => {
        const userAnswer = userAnswers[q.id];
        const correctAnswer = q.answer;
        
        answersSummary += `Pregunta ${q.id} (${q.block}):\n`;
        answersSummary += `- El usuario marcó: ${userAnswer ? userAnswer.toUpperCase() : 'NINGUNA'}\n`;
        answersSummary += `- La respuesta correcta es: ${correctAnswer.toUpperCase()}\n`;
        answersSummary += (userAnswer === correctAnswer ? "✅ Correcto" : "❌ Incorrecto") + "\n\n";
    });

    // Preparamos los datos que FormSubmit enviará a tu correo
    const payload = {
        _subject: `Resultados Simulador Universitario - ${userEmail}`, // Asunto del correo
        Usuario: userEmail,
        Aciertos: `${results.correctAnswers} / ${results.totalQuestions}`,
        Puntaje_Final: `${finalScore} / 1000`,
        Resumen: answersSummary
    };

    try {
        // Hacemos la petición AJAX a FormSubmit
        const response = await fetch("https://formsubmit.co/ajax/sebastianneto84@gmail.com", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            console.log("Resultados enviados exitosamente a sebastianneto84@gmail.com");
        } else {
            console.error("Error al contactar con FormSubmit.");
        }
    } catch (error) {
        console.error("Error de red al intentar enviar el correo:", error);
    }
}