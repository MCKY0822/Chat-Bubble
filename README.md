Here’s a simple and beginner-friendly `README.md` file for your project:

---

# Chat Bubble Notification System

This project demonstrates a **Chat Bubble Notification System** that dynamically displays up to 3 chat bubbles on the screen. Each bubble represents a unique chat room and includes animations and a timeout for automatic removal. 

The system is designed to be modular and reusable across different applications.

---

## Features

- **Dynamic Bubbles:** Add up to 3 chat bubbles, each representing a unique chat room.
- **Animations:** Fly-in and bounce effects on new bubbles.
- **Auto Removal:** Bubbles disappear after 60 seconds or upon user click.
- **Reordering:** Existing bubbles are moved to the top when new activity occurs.
- **Reusable:** Easy to integrate into other projects.

---

## Demo

![Demo](https://upload.wikimedia.org/wikipedia/commons/b/bb/Anonymous.jpg?20110208082913)

Try out the live demo on [CodePen](https://codepen.io/MCKY0822/pen/dPbXdNP)

---

## Technologies Used

- **HTML:** Structure for chat bubble container.
- **CSS:** Styling and animations for chat bubbles.
- **JavaScript:** Logic to manage dynamic bubble behavior.

---

## Installation and Usage

1. Clone or download this repository to your local machine:
    ```bash
    git clone https://github.com/MCKY0822/Chat-Bubble.git
    ```

2. Open the project in your code editor.

3. Paste the following code in your **HTML**, **CSS**, and **JavaScript** sections:

### HTML

```html
<div id="chat-popup-container"></div>
```

### CSS

```css
/* CSS code here */
```

### JavaScript

```javascript
/* JavaScript code here */
```

4. Open the `index.html` file in your browser or use an online platform like **CodePen** to test it.

---

## How to Simulate New Messages

In the JavaScript file, you can simulate new chat bubbles using the `simulateNewMessage` function:

```javascript
simulateNewMessage("room1"); // Creates a bubble for "room1"
simulateNewMessage("room2"); // Creates a bubble for "room2"
simulateNewMessage("room3"); // Creates a bubble for "room3"
```

---

## Customization

You can customize the following:

1. **Thumbnail Image:** Update the image URL in the JavaScript code.
   ```javascript
   const thumbnail = "https://your-image-url.com";
   ```

2. **Bubble Timeout:** Change the `60000` value in `startBubbleTimer` for a different auto-remove duration.
   ```javascript
   setTimeout(() => this.removeBubble(roomId), 60000); // Timeout in milliseconds
   ```

3. **Maximum Bubbles:** Adjust the `maxBubbles` parameter when initializing the chat manager:
   ```javascript
   const chatManager = new ChatPopupManager("chat-popup-container", 5); // Allow 5 bubbles
   ```

---

## License

This project is open-source and available under the **MIT License**.

---

## Author

Developed by **[MACKY](https://github.com/MCKY0822)**  
Feel free to contribute or reach out for questions and feedback!