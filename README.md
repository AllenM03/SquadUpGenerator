# Squad Up Team Profile Generator
An application using Node.js that the user inputs information in regards to the members of a software engineering team then generates an HTML webpage stylized by CSS that displays a brief summary for each person.

### About:
This is a software engineering team generator application that creates new members depending on their position in the team. It can generate an infinite amount of members while still maintaining the structure of the HTML webpage its being displayed. The application runs on `Node.js` and also uses the `Inquirer`, `fs` and `colors` modules.

The main purpose of this application was to implement Object-Oriented Programming with using classes and keeping the file structure organized while using the `jest` framework to test these classes.

The 4 Main classes are:

- *Employee.test.js*
- *Manager.test.js*
- *Engineer.test.js*
- *Intern.test.js*

### Tests:

### Demo:

### Installation:
1. Clone this repository

2. To install dependencies:
```bash
npm install
```
3. To start the program:
```bash
node index.js
```
4. To run the tests:
```bash
npm test
```
5. After entering all the required information, the generated `HTML` will be in the `dist` directory named generatedTeam.html

### Usage:
1. After starting the application, please first enter if you would like to add a Manager to your team.
  - If yes, complete the questions regarding the Manager.
  - If no, continue with the other members.
2. Select the next employee you would like to add to the team.
  - If Engineer is selected,
      - Enter the information regarding the Engineer.
  - If Intern is selected,
      - Enter the information regarding the Intern.
3. Continue the process until the whole team is added.
4. The process can be ended whenever the option to select the new member is present.

### License:
Copyright © Allen McBroom Bey. All rights reserved.
