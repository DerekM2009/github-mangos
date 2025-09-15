# github-mangos
My first github repository
[js-variables-slides.html](https://github.com/user-attachments/files/22337195/js-variables-slides.html)
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Variables - Mr. Cruz's Class</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
        }

        .presentation-container {
            width: 90%;
            max-width: 1000px;
            height: 600px;
            position: relative;
        }

        .slide {
            position: absolute;
            width: 100%;
            height: 100%;
            background: white;
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            padding: 60px;
            display: none;
            animation: slideIn 0.5s ease-out;
        }

        .slide.active {
            display: block;
        }

        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateX(100px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        h1 {
            color: #667eea;
            font-size: 2.5em;
            margin-bottom: 30px;
            text-align: center;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
        }

        h2 {
            color: #764ba2;
            font-size: 2em;
            margin-bottom: 20px;
            text-align: center;
        }

        .code-example {
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            color: white;
            padding: 20px;
            border-radius: 10px;
            font-family: 'Courier New', monospace;
            font-size: 1.2em;
            margin: 20px 0;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }

        .navigation {
            position: absolute;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 20px;
        }

        button {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            padding: 12px 30px;
            border-radius: 25px;
            font-size: 16px;
            cursor: pointer;
            transition: all 0.3s;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }

        button:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(0,0,0,0.3);
        }

        button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        .slide-number {
            position: absolute;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 10px 20px;
            border-radius: 20px;
            font-weight: bold;
        }

        /* Drag and Drop Styles */
        .drag-drop-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            margin-top: 30px;
        }

        .drag-items {
            background: #f0f0f0;
            padding: 20px;
            border-radius: 10px;
            min-height: 300px;
        }

        .drop-zones {
            background: #e8f4ff;
            padding: 20px;
            border-radius: 10px;
        }

        .draggable {
            background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
            color: white;
            padding: 15px;
            margin: 10px 0;
            border-radius: 8px;
            cursor: move;
            transition: all 0.3s;
            font-weight: bold;
            text-align: center;
        }

        .draggable:hover {
            transform: scale(1.05);
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        }

        .draggable.dragging {
            opacity: 0.5;
        }

        .drop-zone {
            background: white;
            border: 2px dashed #667eea;
            padding: 15px;
            margin: 15px 0;
            min-height: 50px;
            border-radius: 8px;
            transition: all 0.3s;
        }

        .drop-zone.drag-over {
            background: #f0f8ff;
            border-color: #764ba2;
            transform: scale(1.02);
        }

        .drop-zone h4 {
            color: #667eea;
            margin-bottom: 10px;
        }

        .success-message {
            display: none;
            background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
            color: white;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
            margin-top: 20px;
            font-size: 1.2em;
            animation: pulse 2s infinite;
        }

        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }

        .assignment-box {
            background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
            padding: 30px;
            border-radius: 15px;
            margin-top: 30px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }

        .assignment-box h3 {
            color: #d84315;
            margin-bottom: 15px;
            font-size: 1.5em;
        }

        .assignment-box ol {
            margin-left: 20px;
            line-height: 1.8;
        }

        .assignment-box li {
            margin: 10px 0;
            color: #5d4037;
            font-weight: 500;
        }

        .highlight {
            background: yellow;
            padding: 2px 5px;
            border-radius: 3px;
            font-weight: bold;
        }

        .intro-animation {
            animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
        }

        .var-example {
            background: #282c34;
            color: #abb2bf;
            padding: 20px;
            border-radius: 10px;
            font-family: 'Consolas', 'Monaco', monospace;
            margin: 20px 0;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        }

        .keyword { color: #c678dd; }
        .variable { color: #e06c75; }
        .operator { color: #56b6c2; }
        .number { color: #d19a66; }
        .string { color: #98c379; }
    </style>
</head>
<body>
    <div class="presentation-container">
        <!-- Slide 1: Title -->
        <div class="slide active">
            <div class="slide-number">1 / 6</div>
            <div class="intro-animation">
                <h1>🚀 JavaScript Variables</h1>
                <h2>Understanding var and Variable Types</h2>
            </div>
            <div class="code-example">
                Welcome to Mr. Cruz's Web Design Class!
            </div>
            <p style="text-align: center; margin-top: 50px; font-size: 1.2em; color: #667eea;">
                Today we'll learn about variables - the building blocks of JavaScript!
            </p>
        </div>

        <!-- Slide 2: What is a Variable? -->
        <div class="slide">
            <div class="slide-number">2 / 6</div>
            <h1>What is a Variable? 📦</h1>
            <p style="font-size: 1.2em; margin-bottom: 30px;">
                A variable is like a <span class="highlight">storage box</span> where we can keep information to use later in our code.
            </p>
            <div class="var-example">
                <span class="keyword">var</span> <span class="variable">myName</span> <span class="operator">=</span> <span class="string">"Student"</span>;<br>
                <span class="keyword">var</span> <span class="variable">myAge</span> <span class="operator">=</span> <span class="number">16</span>;<br>
                <span class="keyword">var</span> <span class="variable">isStudent</span> <span class="operator">=</span> <span class="number">true</span>;
            </div>
            <p style="margin-top: 30px; font-size: 1.1em;">
                The <code style="background: #f0f0f0; padding: 3px 8px; border-radius: 4px;">var</code> keyword tells JavaScript: "Hey, I want to create a new variable!"
            </p>
        </div>

        <!-- Slide 3: Variable Types -->
        <div class="slide">
            <div class="slide-number">3 / 6</div>
            <h1>Types of Variables 🎨</h1>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 30px;">
                <div style="background: linear-gradient(135deg, #ff6b6b, #ff8e53); padding: 20px; border-radius: 10px; color: white;">
                    <h3>Numbers</h3>
                    <code>var score = 100;</code><br>
                    <code>var price = 19.99;</code>
                </div>
                <div style="background: linear-gradient(135deg, #4facfe, #00f2fe); padding: 20px; border-radius: 10px; color: white;">
                    <h3>Strings (Text)</h3>
                    <code>var name = "Alex";</code><br>
                    <code>var message = "Hello!";</code>
                </div>
                <div style="background: linear-gradient(135deg, #43e97b, #38f9d7); padding: 20px; border-radius: 10px; color: white;">
                    <h3>Booleans</h3>
                    <code>var isReady = true;</code><br>
                    <code>var isDone = false;</code>
                </div>
                <div style="background: linear-gradient(135deg, #fa709a, #fee140); padding: 20px; border-radius: 10px; color: white;">
                    <h3>Undefined</h3>
                    <code>var myVariable;</code><br>
                    <small>No value assigned yet!</small>
                </div>
            </div>
        </div>

        <!-- Slide 4: Working with Number Variables -->
        <div class="slide">
            <div class="slide-number">4 / 6</div>
            <h1>Working with Numbers 🔢</h1>
            <p style="font-size: 1.1em; margin-bottom: 20px;">We can do math with number variables!</p>
            <div class="var-example">
                <span class="keyword">var</span> <span class="variable">x</span> <span class="operator">=</span> <span class="number">10</span>;<br>
                <span class="keyword">var</span> <span class="variable">y</span> <span class="operator">=</span> <span class="number">5</span>;<br><br>
                <span class="keyword">var</span> <span class="variable">sum</span> <span class="operator">=</span> <span class="variable">x</span> <span class="operator">+</span> <span class="variable">y</span>;     <span style="color: #5c6370;">// 15</span><br>
                <span class="keyword">var</span> <span class="variable">difference</span> <span class="operator">=</span> <span class="variable">x</span> <span class="operator">-</span> <span class="variable">y</span>; <span style="color: #5c6370;">// 5</span><br>
                <span class="keyword">var</span> <span class="variable">product</span> <span class="operator">=</span> <span class="variable">x</span> <span class="operator">*</span> <span class="variable">y</span>;    <span style="color: #5c6370;">// 50</span><br>
                <span class="keyword">var</span> <span class="variable">quotient</span> <span class="operator">=</span> <span class="variable">x</span> <span class="operator">/</span> <span class="variable">y</span>;   <span style="color: #5c6370;">// 2</span>
            </div>
            <div style="background: #e3f2fd; padding: 20px; border-radius: 10px; margin-top: 20px;">
                <p style="color: #1976d2; font-weight: bold;">💡 Pro Tip:</p>
                <p>You can update variables: <code>x = x + 1;</code> or use shortcuts: <code>x++;</code></p>
            </div>
        </div>

        <!-- Slide 5: Interactive Drag & Drop -->
        <div class="slide">
            <div class="slide-number">5 / 6</div>
            <h1>🎮 Interactive Exercise</h1>
            <p style="text-align: center; margin-bottom: 20px;">Drag the correct variable declarations to their matching types!</p>
            
            <div class="drag-drop-container">
                <div class="drag-items">
                    <h3 style="color: #667eea; margin-bottom: 15px;">Variable Declarations</h3>
                    <div class="draggable" draggable="true" data-type="number">var age = 25;</div>
                    <div class="draggable" draggable="true" data-type="string">var city = "New York";</div>
                    <div class="draggable" draggable="true" data-type="boolean">var isOnline = true;</div>
                    <div class="draggable" draggable="true" data-type="number">var temperature = 72.5;</div>
                    <div class="draggable" draggable="true" data-type="string">var greeting = "Hello!";</div>
                </div>
                
                <div class="drop-zones">
                    <h3 style="color: #764ba2; margin-bottom: 15px;">Drop Zones</h3>
                    <div class="drop-zone" data-accept="number">
                        <h4>Numbers 🔢</h4>
                    </div>
                    <div class="drop-zone" data-accept="string">
                        <h4>Strings (Text) 📝</h4>
                    </div>
                    <div class="drop-zone" data-accept="boolean">
                        <h4>Booleans ✓✗</h4>
                    </div>
                </div>
            </div>
            
            <div class="success-message" id="successMessage">
                🎉 Excellent! You've correctly sorted all variables!
            </div>
        </div>

        <!-- Slide 6: Assignment -->
        <div class="slide">
            <div class="slide-number">6 / 6</div>
            <h1>📚 Take-Home Assignment</h1>
            
            <div class="assignment-box">
                <h3>🎯 Your Mission: Number Variable Challenge</h3>
                <ol>
                    <li>Go to <strong>Programiz.com</strong> JavaScript playground</li>
                    <li>Create a program that:
                        <ul style="margin-top: 10px;">
                            <li>Declares <strong>var price = 50;</strong></li>
                            <li>Declares <strong>var quantity = 3;</strong></li>
                            <li>Calculates <strong>var total = price * quantity;</strong></li>
                            <li>Adds tax: <strong>var tax = total * 0.08;</strong></li>
                            <li>Finds final price: <strong>var finalPrice = total + tax;</strong></li>
                            <li>Use <strong>console.log()</strong> to display all variables</li>
                        </ul>
                    </li>
                    <li>📸 Take a screenshot of your code AND output</li>
                    <li>Submit to:
                        <ul style="margin-top: 10px;">
                            <li>✅ Your GitHub repository (create a new file)</li>
                            <li>✅ OR Mr. Cruz's Web Design Classroom</li>
                        </ul>
                    </li>
                </ol>
                <p style="margin-top: 20px; color: #d84315; font-weight: bold;">
                    ⏰ Due: Next Class Session
                </p>
            </div>
        </div>

        <!-- Navigation -->
        <div class="navigation">
            <button id="prevBtn" onclick="changeSlide(-1)">← Previous</button>
            <button id="nextBtn" onclick="changeSlide(1)">Next →</button>
        </div>
    </div>

    <script>
        let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');
        const totalSlides = slides.length;

        function showSlide(n) {
            slides[currentSlide].classList.remove('active');
            currentSlide = (n + totalSlides) % totalSlides;
            slides[currentSlide].classList.add('active');
            
            // Update navigation buttons
            document.getElementById('prevBtn').disabled = currentSlide === 0;
            document.getElementById('nextBtn').disabled = currentSlide === totalSlides - 1;
        }

        function changeSlide(direction) {
            showSlide(currentSlide + direction);
        }

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') changeSlide(-1);
            if (e.key === 'ArrowRight') changeSlide(1);
        });

        // Drag and Drop functionality
        let draggedElement = null;

        document.querySelectorAll('.draggable').forEach(item => {
            item.addEventListener('dragstart', (e) => {
                draggedElement = e.target;
                e.target.classList.add('dragging');
            });

            item.addEventListener('dragend', (e) => {
                e.target.classList.remove('dragging');
            });
        });

        document.querySelectorAll('.drop-zone').forEach(zone => {
            zone.addEventListener('dragover', (e) => {
                e.preventDefault();
                zone.classList.add('drag-over');
            });

            zone.addEventListener('dragleave', () => {
                zone.classList.remove('drag-over');
            });

            zone.addEventListener('drop', (e) => {
                e.preventDefault();
                zone.classList.remove('drag-over');
                
                if (draggedElement && draggedElement.dataset.type === zone.dataset.accept) {
                    zone.appendChild(draggedElement);
                    draggedElement.style.cursor = 'default';
                    draggedElement.draggable = false;
                    
                    // Check if all items are correctly placed
                    checkCompletion();
                }
            });
        });

        function checkCompletion() {
            const remainingDraggables = document.querySelector('.drag-items').querySelectorAll('.draggable');
            if (remainingDraggables.length === 0) {
                document.getElementById('successMessage').style.display = 'block';
            }
        }

        // Initialize
        showSlide(0);
    </script>
</body>
</html>
