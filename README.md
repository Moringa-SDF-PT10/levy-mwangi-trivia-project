# levy-mwangi-trivia-project

A simple trivia quiz application that fetches questions from the Open Trivia Database API and allows users to answer multiple-choice questions. At the end of the quiz, the app displays the user's score and lists the questions they got wrong.

---

## Features

- Fetches 10 trivia questions dynamically from the [Open Trivia Database API](https://opentdb.com/).
- Displays multiple-choice questions one at a time.
- Tracks the user's score and provides feedback after each question.
- Displays the user's final score and a summary of incorrect answers at the end of the quiz.
- Allows the user to restart the quiz after completion.

---

## Technologies Used

- **HTML**: For the structure of the application.
- **CSS**: For styling the app, including hover effects and responsive design.
- **JavaScript**: For fetching data, rendering questions, and handling user interactions.

---

## How It Works

1. **Fetching Questions**: 
   - The app fetches 10 trivia questions from the Open Trivia Database API using the following URL:
     ```
     https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple
     ```

2. **Rendering Questions**:
   - Each question is displayed with shuffled answer options (one correct and three incorrect answers).

3. **User Interaction**:
   - Users select an answer for the current question. If no answer is selected, they cannot proceed to the next question.

4. **Tracking Results**:
   - The app keeps track of the user's score and stores a list of questions they answered incorrectly.

5. **Final Results**:
   - At the end of the quiz, the app displays:
     - The user's total score.
     - A list of questions the user got wrong, including the correct answers and the user's selected answers.

6. **Restart Option**:
   - After completing the quiz, users can restart it with the "Restart" button.

---

## File Structure

```
root/
├── index.html      # Main HTML structure
├── styles.css      # Styles for the application
├── index.js        # JavaScript logic for fetching and rendering data
└── README.md       # Documentation for the application
```

---




## API Endpoint

The app fetches data from the Open Trivia Database API using the following endpoint:

```
https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple
```

- **amount**: Number of questions (10).
- **category**: Category of questions (18 = Science: Computers).
- **difficulty**: Difficulty level (medium).
- **type**: Question type (multiple-choice).

---


## Known Issues

1. **Answer Selection Validation**:
   - If no answer is selected, the app prompts the user to select one before proceeding to the next question.

2. **API Dependency**:
   - The app relies on the availability of the Open Trivia Database API. If the API is down, the quiz will not load.

---
## How to Run the App

1. Clone the repository or download the files.
2. Open the `index.html` file in your browser.
3. The app will automatically fetch trivia questions and start the quiz.

---