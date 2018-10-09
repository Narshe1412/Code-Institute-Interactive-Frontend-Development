# Simon Game

This is a front end development game based on the famous game from Hasbro game designed by Ralph H. Baer and Howard J. Morrison

Essentially, this part is your sales pitch.
 
## UX
 
Use this section to provide insight into your UX process, focusing on who this website is for, what it is that they want to achieve and how your project is the best way to help them achieve these things.

In particular, as part of this section we recommend that you provide a list of User Stories, with the following general structure:
- As a user type, I want to perform an action, so that I can achieve a goal.

### User Stories
- As a user, I'm able to play the game by pressing a button to start
- As a user, I'm notified when I have failed the sequence, and the sequence corresponding to the previous level plays again
- As a user, I'm presented with a high scores table after the game ends so I can learn how I'm progressing in the game
- As a user, I'm able to reset or end the game prematurely, so I can choose to play a new game without waiting to end the current one
- As a user, I'm able to check the high scores at any time the game is not playing
- As a user, I can see a graph displaying the evolution on the high scores so I can learn how good I'm getting at the game

### Mockups
Main Screen:
![Main screen](/docs/images/mainscreen.PNG)
High Scores Screen:
![Hi Scores](/docs/images/hiscores.PNG)

This section is also where you would share links to any wireframes, mockups, diagrams etc. that you created as part of the design process. These files should themselves either be included in the project itself (in an separate directory), or just hosted elsewhere online and can be in any format that is viewable inside the browser.

## Features

Aside from the main game, the game also provide visual and sound cues to make it easier to remember the combination of button presses you need to perform.

The game will also allow you to register High Scores that would be stored locally.

### Game Modes

Game mode | Win condition | Lose condition | Game Over
--- | --- | --- | ---
Ladder | Complete level 20 | Goes down a level | Goes down to level 4 and fails it
Strict | Complete level 20 | Goes down a level, sequence is randomized again | Goes down to level 4 and fails it
Survival | Infinite levels | Game Over | Fails any level

### Game Rules
- When the game starts, player is presented with a series of randomized button presses. After the list of buttons to press is presented, the player needs to introduce them in the same order in order to progress to the next level.
- The game increases in difficulty with each level. Each level number indicates the amount of button presses that will be presented. On level 1 you need to repeat a 1 button sequence, level 15 will present you with 15 button presses.
- The sequence for each level will remain the same as the previous level, but with the additional button press.
- The game can be played in three modes: Ladder, Strict and Survival. Each game mode differs on when the game declares you as winner (win condition) and what happens when you fail a sequence (lose condition). 
- The game ends when the game is won, when the player closes the game screen or the browser screen or, in certain game modes, a Game Over is achieved.

### Features Left to Implement
- Persistent or online leaderboards that can be shared with friends or social media.

## Technologies Used

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.


## Testing

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).

In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:
- Different values for environment variables (Heroku Config Vars)?
- Different configuration files?
- Separate git branch?

In addition, if it is not obvious, you should also describe how to run your code locally.


## Credits

### Content
- The text for section Y was copied from the [Wikipedia article Z](https://en.wikipedia.org/wiki/Z)

### Media
- The photos used in this site were obtained from ...

### Acknowledgements

- I received inspiration for this project from X





---

## Code Institute Requirements
In this project, I have been tasked to create a create a Single-Page Application (SPA) using HTML5, CSS, JavaScript and any additional JavaScript libraries that the project requires i.e. D3 + DC + Crosstab, jQuery, EmailJS, Jasmine, etc...

Further requirements:
- Incorporate links or buttons to allow your user to navigate the site and reset/control the site functionality
- Whenever possible, strive to use semantic HTML5 elements to structure your HTML code better.
- Make sure your site is as responsive as possible. You can test this by checking the site on different screen sizes and browsers. Please note that if you are building a data dashboard, only your chart containers are expected to be responsive. Charts using D3.js are not responsive as they are designed for desktop or large-screen viewing.
- We advise that you write down user stories and create wireframes/mockups before embarking on full-blown development.
- The site can also make use of CSS frameworks such as Bootstrap, just make sure you maintain a clear separation between the library code and your code.
- You should conduct and document tests to ensure that all of your website’s functionality works well.
- Write a README.md file for your project that explains what the project does and the need that it fulfills. It should also describe the functionality of the project, as well as the technologies used. Detail how the project was deployed and tested and if some of the work was based on other code, explain what was kept and how it was changed to fit your need. A project submitted without a README.md file will FAIL.
- Use Git & GitHub for version control. Each new piece of functionality should be in a separate commit.
- Deploy the final version of your code to a hosting platform such as GitHub Pages.
