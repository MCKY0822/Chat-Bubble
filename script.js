class ChatPopupManager {
    constructor(containerId, maxBubbles = 3) {
        this.chatPopupContainer = document.getElementById(containerId);
        this.chatPopupLimit = maxBubbles;
        this.chatBubbles = [];
        this.timers = {};
    }

    addChatBubble({ roomId }) {
        if (!this.chatPopupContainer) {
            console.error("Chat Popup Container not found!");
            return;
        }

        const existingBubbleIndex = this.chatBubbles.findIndex(bubble => bubble.roomId === roomId);

        if (existingBubbleIndex !== -1) {
            this.updateBubbleOrder(roomId);
            return;
        }

        const bubbleElement = document.createElement("div");
        bubbleElement.className = "chat-bubble";
        bubbleElement.id = `bubble-${roomId}`;
        bubbleElement.innerHTML = `
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Anonymous.jpg?20110208082913" alt="Thumbnail" class="bubble-thumbnail">
        `;

        bubbleElement.addEventListener("click", () => {
            alert(`Opening chat for Room ID: ${roomId}`);
            this.removeBubble(roomId);
        });

        this.chatPopupContainer.appendChild(bubbleElement);

        this.chatBubbles.push({ roomId, element: bubbleElement });
        if (this.chatBubbles.length > this.chatPopupLimit) {
            this.removeOldestBubble();
        }

        bubbleElement.style.animation = "flyIn 0.5s ease forwards, bounce 1s ease-in-out 2";
        setTimeout(() => this.stopAnimation(bubbleElement), 2000);

        this.startBubbleTimer(roomId);
    }

    updateBubbleOrder(roomId) {
        const bubbleIndex = this.chatBubbles.findIndex(bubble => bubble.roomId === roomId);
        if (bubbleIndex !== -1) {
            const [bubbleData] = this.chatBubbles.splice(bubbleIndex, 1);
            this.chatBubbles.push(bubbleData);
            this.chatPopupContainer.appendChild(bubbleData.element);
        }
    }

    removeOldestBubble() {
        const oldestBubble = this.chatBubbles.shift();
        if (oldestBubble?.element) {
            oldestBubble.element.style.animation = "fadeOut 0.3s ease forwards";
            setTimeout(() => oldestBubble.element.remove(), 300);
        }
    }

    startBubbleTimer(roomId) {
        this.timers[roomId] = setTimeout(() => this.removeBubble(roomId), 60000);
    }

    stopAnimation(element) {
        element.style.animation = "none";
        element.style.transform = "translateY(0)";
        element.style.visibility = "visible";
        element.style.opacity = "1";
    }

    removeBubble(roomId) {
        const bubbleIndex = this.chatBubbles.findIndex(bubble => bubble.roomId === roomId);
        if (bubbleIndex !== -1) {
            const [bubbleData] = this.chatBubbles.splice(bubbleIndex, 1);
            bubbleData.element.style.animation = "fadeOut 0.3s ease forwards";
            setTimeout(() => bubbleData.element.remove(), 300);
            clearTimeout(this.timers[roomId]);
            delete this.timers[roomId];
        }
    }
}

const chatManager = new ChatPopupManager("chat-popup-container", 3);

function simulateNewMessage(roomId) {
    chatManager.addChatBubble({ roomId });
}

// Simulate new chat bubbles
simulateNewMessage("room1");
simulateNewMessage("room2");
simulateNewMessage("room3");
