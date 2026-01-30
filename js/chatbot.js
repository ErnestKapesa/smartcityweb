// FAQ Chatbot Functionality
const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbotContainer = document.getElementById('faq-chatbot');
const chatbotClose = document.querySelector('.chatbot-close');
const chatbotMessages = document.getElementById('chatbot-messages');
const chatbotInput = document.getElementById('chatbot-input-field');
const chatbotSend = document.getElementById('chatbot-send');
const chatbotBadge = document.querySelector('.chatbot-badge');

// FAQ Database
const faqDatabase = {
    products: {
        question: "What products do you offer?",
        answer: "We offer three main product categories:\n\n**1. Commercial & Industrial Photovoltaic Solutions** (525-645W modules)\n• N-Type technology with up to 23.9% efficiency\n• Ideal for large-scale installations\n\n**2. Residential Solar Energy Solutions** (550-590W modules)\n• TOPCON technology for maximum home efficiency\n• Complete system packages available\n\n**3. Energy Storage Systems** (14.33 kWh batteries)\n• LFP Prismatic Cell technology\n• 6000+ cycles at 80% depth of discharge\n\nAll products come with a 30-year performance warranty!"
    },
    services: {
        question: "What services do you provide?",
        answer: "Smart City provides comprehensive solar energy services:\n\n**Commercial & Industrial Solutions**\n• Complete photovoltaic systems for governments, factories, mines, and commercial centers\n• Custom-designed large-scale installations\n\n**Residential Services**\n• Wholesale and retail of solar panels, batteries, and inverters\n• Professional installation and system integration\n• Ongoing maintenance and support\n\n**Project Management**\n• Full-scale solar power plant projects\n• Proven track record across Zambia and Southern Africa\n\n**Sustainability Consulting**\n• Carbon footprint management\n• Corporate sustainability planning"
    },
    warranty: {
        question: "What warranty do you offer?",
        answer: "We provide industry-leading warranties:\n\n**30-Year Performance Warranty**\n• 87.4% output guarantee after 30 years of operation\n• Industry-leading long-term reliability\n\n**Product Quality Assurance**\n• Comprehensive coverage on all modules and components\n• 100% inspection of every product\n\n**Safety Standards**\n• Fire Class A rating for superior safety\n• 5400Pa mechanical load capacity\n• 1500V system voltage rating\n\nOur commitment to quality ensures your investment is protected for decades!"
    },
    contact: {
        question: "How can I contact you?",
        answer: "You can reach us through:\n\n📍 **Location**: Avic International Lusaka West, Mumbwa Road, Lusaka, Zambia\n\n📞 **Phone & WhatsApp**:\n+260 764 171796\n+260 972 088888\n\n✉️ **Email**: smartcitysolar@vip.qq.com\n\nOur team is ready to assist you with any inquiries!"
    },
    technology: {
        question: "What technology do you use?",
        answer: "We use cutting-edge solar technology:\n\n**N-Type Solar Cells**\n• Superior efficiency and longevity compared to P-Type\n• Lower degradation over time\n\n**TOPCON Technology**\n• Advanced Tunnel Oxide Passivated Contact design\n• Maximum power output and efficiency\n\n**Bifacial Modules**\n• Capture sunlight from both sides\n• Up to 20% additional power from rear side absorption\n\n**SMBB Design**\n• Super Multi Busbar reduces electrical resistance\n• Improved reliability and performance\n\n**Half-Cut Cell Technology**\n• Enhanced shade tolerance\n• Reduced hot-spot risk and power loss"
    },
    factory: {
        question: "Where are your products manufactured?",
        answer: "**Manufacturing Base: Wuxi, Jiangsu, China**\n\nOur state-of-the-art production facility features:\n• Advanced automated production lines\n• Strict quality control with 100% product inspection\n• International certifications and standards compliance\n• Cutting-edge manufacturing technology\n\n**Zambia Office: Lusaka**\n\nOur local presence includes:\n• Avic International Lusaka West, Mumbwa Road\n• Dedicated sales and support team\n• Local project management and installation services\n• Comprehensive after-sales support\n\nThis combination ensures world-class products with local expertise and service!"
    },
    installation: {
        question: "Do you provide installation services?",
        answer: "Yes! We provide complete turnkey installation services:\n\n**Professional Installation Team**\n• Certified and experienced technicians\n• Adherence to international safety standards\n\n**Comprehensive Service**\n• Site assessment and feasibility studies\n• Custom system design and optimization\n• Professional installation and commissioning\n• System testing and quality verification\n\n**Post-Installation Support**\n• Training for system operation\n• Ongoing maintenance services\n• Technical support and troubleshooting\n\n**Proven Track Record**\n• Multiple successful power plant projects across Zambia\n• Experience in both commercial and residential installations\n• Serving customers throughout Southern Africa"
    },
    pricing: {
        question: "How much do solar systems cost?",
        answer: "Pricing is customized based on your specific needs:\n\n**Factors Affecting Price**\n• System size and power capacity required\n• Type of installation (residential/commercial/industrial)\n• Site location and conditions\n• Additional components (batteries, inverters, mounting)\n• Installation complexity\n\n**Get Your Free Quote**\n\nContact us for a personalized assessment:\n\n📞 **Phone & WhatsApp**\n+260 764 171796\n+260 972 088888\n\n✉️ **Email**\nsmartcitysolar@vip.qq.com\n\nOur team will provide:\n• Detailed site assessment\n• Custom system design\n• Transparent pricing breakdown\n• ROI analysis and savings projections"
    },
    efficiency: {
        question: "How efficient are your solar panels?",
        answer: "Our solar modules offer exceptional efficiency:\n\n**Module Efficiency**\n• Up to **23.9%** conversion efficiency\n• Among the highest in the industry\n\n**Power Output**\n• Commercial Series: **620-645W** per module\n• Residential Series: **550-590W** per module\n\n**Bifacial Technology**\n• Front side: Full rated power\n• Rear side: Up to **20% additional power gain**\n• Total system output significantly increased\n\n**Long-Term Performance**\n• **87.4%** output guarantee after 30 years\n• Low degradation rate ensures sustained performance\n• N-Type technology provides superior longevity\n\n**Real-World Performance**\n• Excellent low-light performance\n• Superior temperature coefficient\n• Consistent output in various weather conditions"
    },
    sustainability: {
        question: "How does Smart City support sustainability?",
        answer: "We're committed to creating a greener future:\n\n**Clean Energy Solutions**\n• Promoting renewable energy adoption worldwide\n• Reducing dependence on fossil fuels\n• Enabling clean, sustainable power generation\n\n**Carbon Footprint Management**\n• Helping companies track and reduce emissions\n• Supporting corporate sustainability initiatives\n• Accelerating carbon neutrality targets\n\n**Sustainable Manufacturing**\n• Eco-friendly production processes\n• Responsible resource management\n• Waste reduction and recycling programs\n\n**Global Impact**\n• Serving customers across Europe, South America, and Africa\n• Empowering communities with clean energy access\n• Contributing to global climate goals\n\n**Our Mission**\nBridging the gap between cutting-edge sustainable technology and a greener future for all—one solar installation at a time."
    }
};

// Toggle chatbot
chatbotToggle.addEventListener('click', () => {
    chatbotContainer.classList.toggle('active');
    if (chatbotContainer.classList.contains('active')) {
        chatbotBadge.style.display = 'none';
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
        if (lowerMessage.includes('product') || lowerMessage.includes('module') || lowerMessage.includes('panel')) {
            addMessage(faqDatabase.products.answer, 'bot');
        } else if (lowerMessage.includes('service') || lowerMessage.includes('what do you do')) {
            addMessage(faqDatabase.services.answer, 'bot');
        } else if (lowerMessage.includes('warranty') || lowerMessage.includes('guarantee')) {
            addMessage(faqDatabase.warranty.answer, 'bot');
        } else if (lowerMessage.includes('contact') || lowerMessage.includes('phone') || lowerMessage.includes('email') || lowerMessage.includes('reach')) {
            addMessage(faqDatabase.contact.answer, 'bot');
        } else if (lowerMessage.includes('technology') || lowerMessage.includes('n-type') || lowerMessage.includes('topcon')) {
            addMessage(faqDatabase.technology.answer, 'bot');
        } else if (lowerMessage.includes('factory') || lowerMessage.includes('manufacture') || lowerMessage.includes('made')) {
            addMessage(faqDatabase.factory.answer, 'bot');
        } else if (lowerMessage.includes('install') || lowerMessage.includes('installation')) {
            addMessage(faqDatabase.installation.answer, 'bot');
        } else if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('quote')) {
            addMessage(faqDatabase.pricing.answer, 'bot');
        } else if (lowerMessage.includes('efficiency') || lowerMessage.includes('performance') || lowerMessage.includes('output')) {
            addMessage(faqDatabase.efficiency.answer, 'bot');
        } else if (lowerMessage.includes('sustainability') || lowerMessage.includes('carbon') || lowerMessage.includes('environment')) {
            addMessage(faqDatabase.sustainability.answer, 'bot');
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
        <button class="quick-btn" data-question="products">Our Products</button>
        <button class="quick-btn" data-question="services">Our Services</button>
        <button class="quick-btn" data-question="warranty">Warranty Info</button>
        <button class="quick-btn" data-question="contact">Contact Us</button>
        <button class="quick-btn" data-question="technology">Technology</button>
        <button class="quick-btn" data-question="pricing">Get Quote</button>
    `;
    
    content.appendChild(quickDiv);
}

// Auto-show chatbot on first visit (optional)
setTimeout(() => {
    if (!sessionStorage.getItem('chatbotShown')) {
        chatbotBadge.style.display = 'flex';
        sessionStorage.setItem('chatbotShown', 'true');
    }
}, 3000);

console.log('Smart City Chatbot - Ready to assist!');
