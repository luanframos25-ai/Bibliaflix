// Configuração Única (100% Español Kids)
const translations = {
    es: {
        cat_epics: "Grandes Héroes",
        cat_doctrine: "Dibujos Animados",
        cat_kids: "Para Peques",
        play_video: "▶ Ver Historia",
        audio_epic: "Banda Sonora: La Aventura",
        audio_peace: "Banda Sonora: Nube de Algodón",
        audio_nature: "Banda Sonora: Amigos Animales",
        audio_storm: "Banda Sonora: Coraje y Valor"
    }
};

const contentData = [
    {
        category: "cat_epics",
        items: [
            {
                title: "Moisés y la Aventura del Mar",
                thumb: "https://images.unsplash.com/photo-1544427928-14292fb542d1?auto=format&fit=crop&w=400&q=80",
                type: "video",
                duration: "8 min",
                narration: "¡Hola amiguitos! Hoy conoceremos a Moisés. Frente a un mar gigante y soldados persiguiéndolos, ¡Dios hizo algo increíble! Sopló un viento fuerte, muy fuerte, y abrió el mar por la mitad para que todos cruzaran seguros. ¡Dios siempre nos protege!",
                audio: "audio_epic"
            },
            {
                title: "El Valiente David",
                thumb: "https://images.unsplash.com/photo-1510212330205-19965893a623?auto=format&fit=crop&w=400&q=80",
                type: "video",
                duration: "6 min",
                narration: "Había una vez un gigante muy enojón llamado Goliat. Todos tenían miedo, ¡menos David! Él era pastorcito de ovejitas y sabía que Dios era más grande que cualquier gigante. ¡Con una pequeña piedrita y mucha fe, ganó la batalla!",
                audio: "audio_epic"
            },
            {
                title: "Jesús, Nuestro Mejor Amigo",
                thumb: "https://images.unsplash.com/photo-1537233815100-bf6f0b40eefe?auto=format&fit=crop&w=400&q=80",
                type: "video",
                duration: "10 min",
                narration: "Jesús amaba escuchar a los niños. Un día, caminó sobre el agua, ¡como si fuera piso firme! Él curaba a los enfermos con solo tocarlos y nos enseñó que el amor de Dios es el regalo más hermoso del mundo.",
                audio: "audio_peace"
            },
            {
                title: "Daniel y los Leones Dormilones",
                thumb: "https://images.unsplash.com/photo-1445052518266-410d7f98e921?auto=format&fit=crop&w=400&q=80",
                type: "video",
                duration: "7 min",
                narration: "Personas malas lanzaron a Daniel a un pozo lleno de leones grandes y peludos por rezar a Dios. ¿Pero saben qué pasó? Dios envió a un angelito para cerrarles la boca, ¡y los leones se volvieron como gatitos dormilones! Daniel estaba a salvo.",
                audio: "audio_storm"
            }
        ]
    },
    {
        category: "cat_doctrine",
        items: [
            {
                title: "Adán, Eva y el Jardín Mágico",
                thumb: "https://images.unsplash.com/photo-1491843342375-17482386922c?auto=format&fit=crop&w=400&q=80",
                type: "video",
                duration: "5 min",
                narration: "Hace mucho, mucho tiempo, Dios creó un jardín hermoso, lleno de colores brillantes, manzanas deliciosas y animalitos muy simpáticos. Allí vivían Adán y Eva, los primeros amigos en el mundo, en un lugar donde todo era felicidad y paz.",
                audio: "audio_nature"
            },
            {
                title: "El Barco Gigante de Noé",
                thumb: "https://images.unsplash.com/photo-1505506005708-69a293910600?auto=format&fit=crop&w=400&q=80",
                type: "video",
                duration: "9 min",
                narration: "¡Toc, toc! Noé construyó un barco gigante, tan grande que cabían osos, jirafas, monitos y hasta pajaritos chiquitos. Entraron de dos en dos. Cuando empezó a llover muchísimo, estaban todos seguros. Al final, Dios dibujó un arcoíris en el cielo como promesa de amor.",
                audio: "audio_storm"
            }
        ]
    }
];

// Lógica de Inicialização
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    const mainContent = document.getElementById('main-content');

    // Modais e Referências
    const modalStory = document.getElementById('modal-story');
    const modalPaywall = document.getElementById('modal-paywall');
    const modalCreator = document.getElementById('modal-creator');
    const closeModals = document.querySelectorAll('.close-modal');

    // Toggle Segurança
    let isPremium = true; // Mantido true para testar mais fácil, ajustar conforme necessario.

    // Textos do Paywall
    document.getElementById('paywall-title').textContent = '¡Club Premium BibliaKids!';
    document.getElementById('paywall-desc').textContent = 'Pide a papá o mamá que activen la llave mágica para ver todas las aventuras, dibujos y aprender de Dios de una forma súper divertida.';
    document.getElementById('btn-subscribe').textContent = '¡Abrir con la Llave Mágica! - $ 4.99/mes';

    const renderContent = () => {
        mainContent.innerHTML = '';
        contentData.forEach(cat => {
            const row = document.createElement('div');
            row.className = 'row';

            const title = document.createElement('h2');
            title.className = 'row-title';
            title.textContent = translations.es[cat.category];
            row.appendChild(title);

            const container = document.createElement('div');
            container.className = 'row-container';

            cat.items.forEach(item => {
                const card = document.createElement('div');
                card.className = 'content-card';
                card.innerHTML = `
                    <div class="duration-badge"><i data-lucide="clock"></i> ${item.duration}</div>
                    <img src="${item.thumb}" alt="${item.title}">
                    <div class="card-info">
                        <h3>${item.title}</h3>
                        <p>${translations.es.play_video}</p>
                        ${!isPremium ? '<div class="lock-icon"><i data-lucide="lock"></i></div>' : ''}
                    </div>
                `;
                card.onclick = () => handleContentClick(item);
                container.appendChild(card);
            });

            row.appendChild(container);
            mainContent.appendChild(row);
        });
        lucide.createIcons();
    };

    // --- LÓGICA DO BOT CRIADOR (PROPOSTA/SIMULAÇÃO) ---
    const navBotBtn = document.getElementById('nav-bot');
    const btnGenerate = document.getElementById('btn-generate-ai');
    const inputPrompt = document.getElementById('ai-prompt-input');
    const loader = document.getElementById('ai-loader');

    navBotBtn.onclick = () => {
        modalCreator.style.display = 'flex';
        inputPrompt.value = '';
        btnGenerate.disabled = false;
        loader.style.display = 'none';
        btnGenerate.innerHTML = '<i data-lucide="wand-2"></i> ¡Generar Magia!';
        lucide.createIcons();
    };

    btnGenerate.onclick = () => {
        const promptText = inputPrompt.value.trim();
        if (!promptText) {
            alert("¡Por favor, escribe de qué historia quieres que hablemos!");
            return;
        }

        btnGenerate.disabled = true;
        btnGenerate.textContent = "Magia en proceso...";
        loader.style.display = 'block';

        // Simula 3.5 segundos de geração (Chamada para OpenAI e Leonardo.ai falsas)
        setTimeout(() => {
            const newItem = {
                title: promptText,
                thumb: "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?auto=format&fit=crop&w=400&q=80",
                type: "video",
                duration: "7 min",
                narration: `¡Amiguitos! Hoy les contaremos la maravillosa historia de ${promptText}. La IA ha creado mágicamente esta aventura para ustedes. ¡Recuerden siempre escuchar con atención y aprender del amor de Dios!`,
                audio: "audio_epic"
            };

            // Adiciona no topo da primeira categoria
            contentData[0].items.unshift(newItem);

            modalCreator.style.display = 'none';
            renderContent();
            alert("¡Tu historia fue creada mágicamente por nuestra IA!");
        }, 3500);
    };
    // ----------------------------------------------------

    // Trava de Segurança
    const handleContentClick = (item) => {
        if (!isPremium) {
            openPaywall();
        } else {
            openStoryModal(item);
        }
    };

    const openPaywall = () => {
        modalPaywall.style.display = 'flex';
    };

    // Simulação de assinatura
    document.getElementById('btn-subscribe').onclick = () => {
        const btn = document.getElementById('btn-subscribe');
        btn.textContent = "¡Cargando magia...";
        btn.disabled = true;

        setTimeout(() => {
            isPremium = true;
            modalPaywall.style.display = 'none';
            alert("¡Yuju! Suscripción confirmada. ¡Bienvenido al Club BibliaKids!");
            renderContent();
            lucide.createIcons();
        }, 1500);
    };

    const openStoryModal = (item) => {
        document.getElementById('modal-title').textContent = item.title;
        const modalImg = document.getElementById('modal-img');
        modalImg.src = item.thumb;

        modalImg.classList.remove('modal-img-cinematic');
        void modalImg.offsetWidth;
        modalImg.classList.add('modal-img-cinematic');

        document.getElementById('modal-narration').textContent = item.narration;
        document.getElementById('modal-audio').textContent = translations.es[item.audio];

        modalStory.style.display = 'flex';
        lucide.createIcons();

        // Parar narrações anteriores
        window.speechSynthesis.cancel();

        // Narrar história (Web Speech API) - Forçando Espanhol
        const utterance = new SpeechSynthesisUtterance(item.narration);
        utterance.lang = 'es-ES';
        utterance.pitch = 1.3; // Mais agudo/infantil
        utterance.rate = 0.85; // Mais lento
        window.speechSynthesis.speak(utterance);

        const bgMusic = document.getElementById('bg-music-player');
        if (bgMusic) {
            bgMusic.volume = 0.15;
            bgMusic.play().catch(e => console.log("Audio bloqueado"));
        }
    };

    const stopMedia = () => {
        window.speechSynthesis.cancel();
        const bgMusic = document.getElementById('bg-music-player');
        if (bgMusic) bgMusic.pause();
    };

    closeModals.forEach(btn => {
        btn.onclick = () => {
            modalStory.style.display = 'none';
            modalPaywall.style.display = 'none';
            modalCreator.style.display = 'none';
            stopMedia();
        };
    });

    window.onclick = (e) => {
        if (e.target == modalStory || e.target == modalPaywall || e.target == modalCreator) {
            modalStory.style.display = 'none';
            modalPaywall.style.display = 'none';
            modalCreator.style.display = 'none';
            stopMedia();
        }
    };

    window.onscroll = () => {
        if (window.scrollY > 50) {
            document.getElementById('navbar').classList.add('scrolled');
        } else {
            document.getElementById('navbar').classList.remove('scrolled');
        }
    };

    // Render Inicial
    renderContent();
});
