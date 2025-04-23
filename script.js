// Enhanced animal database with behaviors
const animals = {
    seal: { 
        emoji: "🦭", 
        color: "#5C6BC0",
        keywords: ["seal", "otter", "water"],
        behaviors: ["splashes in the water", "claps its flippers", "barks happily"] 
    },
    dog: { 
        emoji: "🐕", 
        color: "#8D6E63",
        keywords: ["dog", "puppy", "canine"],
        behaviors: ["wags its tail", "brings you a ball", "licks your face"] 
    },
    turtle: { 
        emoji: "🐢", 
        color: "#43A047",
        keywords: ["turtle", "tortoise", "shell"],
        behaviors: ["slowly blinks at you", "hides in its shell", "nibbles lettuce"] 
    },
    hippo: { 
        emoji: "🦛", 
        color: "#7E57C2",
        keywords: ["hippo", "hippopotamus"],
        behaviors: ["yawns widely", "splashes mud", "grunts loudly"] 
    },
    cat: { 
        emoji: "🐈", 
        color: "#FF7043",
        keywords: ["cat", "kitty", "feline"],
        behaviors: ["purrs contently", "knocks things over", "ignores you"] 
    },
    bear: { 
        emoji: "🐻", 
        color: "#5D4037",
        keywords: ["bear", "grizzly"],
        behaviors: ["gives you honey", "stands on hind legs", "takes a nap"] 
    },
    zebra: { 
        emoji: "🦓", 
        color: "#616161",
        keywords: ["zebra", "stripes"],
        behaviors: ["gallops around", "nuzzles your hand", "eats grass"] 
    },
    polar_bear: { 
        emoji: "🐻‍❄️", 
        color: "#B3E5FC",
        keywords: ["polar bear", "ice bear", "arctic"],
        behaviors: ["slides on ice", "shakes off water", "hugs you gently"] 
    },
    giraffe: { 
        emoji: "🦒", 
        color: "#FFCA28",
        keywords: ["giraffe", "long neck"],
        behaviors: ["stretches its neck", "licks leaves", "blinks slowly"] 
    },
    rhino: { 
        emoji: "🦏", 
        color: "#78909C",
        keywords: ["rhino", "rhinoceros", "horn"],
        behaviors: ["charges playfully", "rolls in mud", "snorts loudly"] 
    },
    elephant: { 
        emoji: "🐘", 
        color: "#9E9E9E",
        keywords: ["elephant", "tusks", "trunk"],
        behaviors: ["sprays water", "trumpets happily", "offers you a ride"] 
    },
    kangaroo: { 
        emoji: "🦘", 
        color: "#FF8A65",
        keywords: ["kangaroo", "joey", "marsupial"],
        behaviors: ["hops around", "boxes playfully", "shows you its joey"] 
    },
    crocodile: { 
        emoji: "🐊", 
        color: "#4CAF50",
        keywords: ["crocodile", "alligator", "reptile"],
        behaviors: ["sunbathes", "snaps playfully", "slides into water"] 
    }
};

// Initialize game when DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
    const story = document.getElementById("story");
    const input = document.getElementById("userInput");
    const button = document.getElementById("sendButton");
    
    // Enhanced welcome message
    const welcomeMsg = [
        "🌿 Welcome to Mega Animal Sanctuary! 🌿",
        "We care for: 🦭 🐕 🐢 🦛 🐈 🐻 🦓 🐻‍❄️ 🦒 🦏 🐘 🦘 🐊",
        "Type an animal's name to interact with them specifically!",
        "Try: 'hippo', 'feed the giraffe', or 'play with the seal'"
    ];
    
    welcomeMsg.forEach((msg, i) => {
        setTimeout(() => {
            story.innerHTML += `<p class="ai-msg"><strong>Sanctuary:</strong> ${msg}</p>`;
            story.scrollTop = story.scrollHeight;
        }, i * 800);
    });
    
    // Handle user input function
    function handleInput() {
        const text = input.value.trim().toLowerCase();
        if (!text) return;
        
        // Add player message
        story.innerHTML += `<p class="player-msg"><strong>You:</strong> ${input.value}</p>`;
        input.value = "";
        
        // Generate response
        setTimeout(function() {
            // Check if any animal was mentioned
            let mentionedAnimal = null;
            for (const animalName in animals) {
                if (animals[animalName].keywords.some(keyword => 
                    text.includes(keyword)
                )) {
                    mentionedAnimal = animalName;
                    break;
                }
            }

            let response;
            if (mentionedAnimal) {
                // Respond with the mentioned animal
                const animal = animals[mentionedAnimal];
                const behavior = animal.behaviors[Math.floor(Math.random() * animal.behaviors.length)];
                const displayName = mentionedAnimal.replace("_", " ");
                response = `<span style="color:${animal.color}">${animal.emoji}</span> The ${displayName} ${behavior}!`;
            } else {
                // Random animal response if none mentioned
                const animalKeys = Object.keys(animals);
                const randomAnimal = animalKeys[Math.floor(Math.random() * animalKeys.length)];
                const animal = animals[randomAnimal];
                const behavior = animal.behaviors[Math.floor(Math.random() * animal.behaviors.length)];
                const displayName = randomAnimal.replace("_", " ");
                response = `<span style="color:${animal.color}">${animal.emoji}</span> The ${displayName} ${behavior}!`;
            }

            story.innerHTML += `
                <p class="ai-msg">
                    <strong>Sanctuary:</strong> 
                    ${response}
                </p>
            `;
            story.scrollTop = story.scrollHeight;
        }, 600);
    }
    
    // Set up event listeners
    button.addEventListener("click", handleInput);
    input.addEventListener("keypress", function(e) {
        if (e.key === "Enter") handleInput();
    });
});
