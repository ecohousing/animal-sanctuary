window.onload = function() {
    // Get elements
    const storyDiv = document.getElementById("story");
    const userInput = document.getElementById("userInput");
    const sendButton = document.getElementById("sendButton");

    // Available pets with emojis
    const pets = {
        dog: { emoji: "🐕", color: "#a1d6ff" },
        cat: { emoji: "🐈", color: "#ff9faa" },
        rabbit: { emoji: "🐇", color: "#d9b19c" },
        parrot: { emoji: "🦜", color: "#4CAF50" },
        hamster: { emoji: "🐹", color: "#ffde7d" },
        unicorn: { emoji: "🦄", color: "#b19cd9" }
    };

    // Show welcome message
    storyDiv.innerHTML = `
        <p class="ai-message">
            Welcome to our colorful sanctuary! 
            <span class="pet" style="color:${pets.dog.color}">${pets.dog.emoji}</span>
            <span class="pet" style="color:${pets.cat.color}">${pets.cat.emoji}</span>
            <span class="pet" style="color:${pets.rabbit.color}">${pets.rabbit.emoji}</span>
            are waiting for you!
        </p>
    `;

    // Handle user input
    sendButton.onclick = function() {
        const text = userInput.value.trim();
        if (!text) return;
        
        // Add player message
        storyDiv.innerHTML += `<p class="player-message">You: ${text}</p>`;
        userInput.value = "";
        
        // Generate random pet response
        setTimeout(function() {
            const petNames = Object.keys(pets);
            const randomPet = petNames[Math.floor(Math.random() * petNames.length)];
            const pet = pets[randomPet];
            
            const actions = [
                `${pet.emoji} ${randomPet} comes to greet you!`,
                `${pet.emoji} The ${randomPet} seems happy!`,
                `${pet.emoji} ${randomPet} brings you a gift!`,
                `${pet.emoji} The ${randomPet} wants to play!`
            ];
            
            const response = actions[Math.floor(Math.random() * actions.length)];
            storyDiv.innerHTML += `<p class="ai-message" style="border-left: 3px solid ${pet.color}">${response}</p>`;
            storyDiv.scrollTop = storyDiv.scrollHeight;
        }, 500);
    };

    // Handle Enter key
    userInput.onkeypress = function(e) {
        if (e.key === "Enter") sendButton.click();
    };
};