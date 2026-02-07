// FAQ Chatbot Functionality
const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbotContainer = document.getElementById('faq-chatbot');
const chatbotClose = document.querySelector('.chatbot-close');
const chatbotMessages = document.getElementById('chatbot-messages');
const chatbotInput = document.getElementById('chatbot-input-field');
const chatbotSend = document.getElementById('chatbot-send');

// FAQ Database - Focused on Services and Projects
const faqDatabase = {
    services: {
        question: "What services do you provide?",
        answer: "We provide comprehensive solar energy solutions:\n\n**Commercial & Industrial**\nLarge-scale photovoltaic systems for businesses and factories\n\n**Residential Solar**\nHome solar panels and energy storage systems\n\n**Energy Storage**\n14.33 kWh battery systems with 6000+ cycles\n\n**Installation & Maintenance**\nProfessional installation and ongoing support"
    },
    projects: {
        question: "What projects have you completed?",
        answer: "We've successfully delivered multiple projects across Zambia and Southern Africa:\n\n• Industrial solar arrays\n• Commercial rooftop installations\n• Residential solar systems\n• Multi-megawatt power plants\n\nOur experienced team ensures quality installation and reliable performance."
    },
    warranty: {
        question: "What warranty do you offer?",
        answer: "**30-Year Performance Warranty**\n87.4% output guarantee after 30 years\n\n**Quality Assurance**\n• 100% product inspection\n• Fire Class A rating\n• 5400Pa load capacity\n• Industry-leading reliability"
    },
    contact: {
        question: "How can I contact you?",
        answer: "**Location**\nAvic International, Mumbwa Road, Lusaka, Zambia\n\n**Phone & WhatsApp**\n+260 764 171796\n+260 972 088888\n\n**Email**\nsmartcitysolar@vip.qq.com"
    },
    technology: {
        question: "What technology do you use?",
        answer: "**N-Type Solar Cells**\nSuperior efficiency and longevity\n\n**TOPCON Technology**\nAdvanced cell design for maximum output\n\n**Bifacial Modules**\nUp to 20% additional power from rear side\n\n**Specifications**\n• Up to 645W power output\n• 23.9% efficiency\n• 30-year warranty"
    },
    why: {
        question: "Why choose Smart City?",
        answer: "**30-Year Warranty**\nIndustry-leading performance guarantee\n\n**Expert Installation**\nCertified professional team\n\n**High Efficiency**\nUp to 23.9% module efficiency\n\n**Local Support**\nDedicated team in Zambia with ongoing maintenance"
    }
};

// Toggle chatbot
chatbotToggle.addEventListener('click', () => {
    chatbotContainer.classList.toggle('active');
    if (chatbotContainer.classList.contains('active')) {
        chatbotInput.focus();
    }
});

chatbotClose.addEventListener('click', () => {
    chatbotContainer.classList.remove('active');
});

// Handle quick question buttons
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('quick-btn')) {
        const question = e.target.dataset.question;
        handleUserQuestion(question);
    }
});

// Send message
chatbotSend.addEventListener('click', () => {
    sendMessage();
});

chatbotInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const message = chatbotInput.value.trim();
    if (message === '') return;
    
    // Add user message
    addMessage(message, 'user');
    chatbotInput.value = '';
    
    // Process message
    setTimeout(() => {
        processMessage(message);
    }, 500);
}

function handleUserQuestion(questionKey) {
    const faq = faqDatabase[questionKey];
    if (faq) {
        addMessage(faq.question, 'user');
        setTimeout(() => {
            addMessage(faq.answer, 'bot');
        }, 500);
    }
}

function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = sender === 'user' ? 'user-message' : 'bot-message';
    
    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.innerHTML = sender === 'user' ? '<i class="fas fa-user"></i>' : '<i class="fas fa-robot"></i>';
    
    const content = document.createElement('div');
    content.className = 'message-content';
    
    const p = document.createElement('p');
    p.innerHTML = text.replace(/\n/g, '<br>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    content.appendChild(p);
    
    messageDiv.appendChild(avatar);
    messageDiv.appendChild(content);
    
    chatbotMessages.appendChild(messageDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function processMessage(message) {
    const lowerMessage = message.toLowerCase();
    
    // Show typing indicator
    showTypingIndicator();
    
    setTimeout(() => {
        removeTypingIndicator();
        
        // Check for keywords and provide relevant answers
        if (lowerMessage.includes('service') || lowerMessage.includes('what do you do') || lowerMessage.includes('offer')) {
            addMessage(faqDatabase.services.answer, 'bot');
        } else if (lowerMessage.includes('project') || lowerMessage.includes('work') || lowerMessage.includes('completed')) {
            addMessage(faqDatabase.projects.answer, 'bot');
        } else if (lowerMessage.includes('warranty') || lowerMessage.includes('guarantee')) {
            addMessage(faqDatabase.warranty.answer, 'bot');
        } else if (lowerMessage.includes('contact') || lowerMessage.includes('phone') || lowerMessage.includes('email') || lowerMessage.includes('reach')) {
            addMessage(faqDatabase.contact.answer, 'bot');
        } else if (lowerMessage.includes('technology') || lowerMessage.includes('n-type') || lowerMessage.includes('topcon') || lowerMessage.includes('efficiency')) {
            addMessage(faqDatabase.technology.answer, 'bot');
        } else if (lowerMessage.includes('why') || lowerMessage.includes('choose') || lowerMessage.includes('benefit')) {
            addMessage(faqDatabase.why.answer, 'bot');
        } else if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
            addMessage("Hello! 👋 I'm here to help you learn about Smart City Solar. What would you like to know?", 'bot');
            addQuickButtons();
        } else if (lowerMessage.includes('thank') || lowerMessage.includes('thanks')) {
            addMessage("You're welcome! Feel free to ask if you have any other questions. We're here to help! 😊", 'bot');
        } else {
            addMessage("I'd be happy to help! Here are some topics I can assist you with:", 'bot');
            addQuickButtons();
        }
    }, 1000);
}

function showTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'bot-message typing-indicator-message';
    typingDiv.innerHTML = `
        <div class="message-avatar"><i class="fas fa-robot"></i></div>
        <div class="message-content">
            <div class="typing-indicator">
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
            </div>
        </div>
    `;
    chatbotMessages.appendChild(typingDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function removeTypingIndicator() {
    const typingIndicator = document.querySelector('.typing-indicator-message');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

function addQuickButtons() {
    const lastMessage = chatbotMessages.lastElementChild;
    const content = lastMessage.querySelector('.message-content');
    
    const quickDiv = document.createElement('div');
    quickDiv.className = 'quick-questions';
    quickDiv.innerHTML = `
        <button class="quick-btn" data-question="services">Services</button>
        <button class="quick-btn" data-question="projects">Projects</button>
        <button class="quick-btn" data-question="why">Why Us</button>
        <button class="quick-btn" data-question="warranty">Warranty</button>
        <button class="quick-btn" data-question="technology">Technology</button>
        <button class="quick-btn" data-question="contact">Contact</button>
    `;
    
    content.appendChild(quickDiv);
}

// Auto-show chatbot on first visit (optional)
setTimeout(() => {
    if (!sessionStorage.getItem('chatbotShown')) {
        sessionStorage.setItem('chatbotShown', 'true');
    }
}, 3000);

console.log('Smart City Chatbot - Ready to assist!');
