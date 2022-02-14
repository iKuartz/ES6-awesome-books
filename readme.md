![](https://img.shields.io/badge/Microverse-blueviolet)

# Awesome Books

> Solo programming project for week seven of the Microverse Program.

![Desktop Version](./images/desktop_version.png)
![Mobile Version](./images/mobile.png)

"Awesome books" is a simple website that displays a list of books and allows you to add and remove books from that list.

For this project, we must use ES6 modules.

### First requirements:

Project requirements

    Implement only a basic UI with plain HTML:

Basic UI

    Create a collection that keeps a list of books (hint: you can use an array of objects for that).
    Create a function to add a new book to the collection, with title and author.
    Create a function to remove a book from the collection (hint: you can use the array filter() method).
    Display all books saved in the collection in the top part of the page.
    Make sure that when a user clicks the "Add" button:
        A new book is added to the collection.
        The new book is displayed in the page.
    Make sure that when a user clicks the "Remove" button:
        The correct book is removed from the collection.
        The correct book dissapears from the page.
    Make sure that data is preserved in the browser's memory by using localStorage.
    To debug your application, you can use console.log(). Remember to remove debugging code before pushing your code to the remote repository.
    Don't use any library or framework, use only plain JavaScript.

TIP: If you separated the code in multiple files and you you have the following issues with the linter: complaining about having multiple classes at the same file, or an unused variables, disable the linter check for that rule in the file with a /_ eslint-disable rule-you-want-to-disable _/ .

Check the ESLint documentation for more details on how.

> To setup the project on your machine:

## Getting Started

Clone the repository and setup the linter

## Prerequisites

- npm ( Node Package Manager )
- git and Github Account

### Setup

To get a local copy up and running follow these simple example steps.

- Open terminal
- Change the directory you want put the repo
- Then run
  i. Run git clone git@github.com:mengiefen/awesome-books.git
  ii. cd repo-name/

### Install

- **Webhint** linter

  `npm install --save-dev hint@6.x`

- **Stylelint** linter

  `npm install --save-dev stylelint@13.x stylelint-scss@3.x stylelint-config-standard@21.x stylelint-csstree-validator@1.x`

- **ESLint** linter

  `npm install --save-dev eslint@7.x eslint-config-airbnb-base@14.x eslint-plugin-import@2.x babel-eslint@10.x`

### Run tests

- **Webhint** linter -`npx hint .` on the root of your directory of your project.
- **Stylelint** linter
  - `npx stylelint "**/*.{css,scss}"` on the root of your directory of your project.
- **ESLint** linter
  - `npx eslint .` on the root of your directory of your project.

### Second requirements:

> Use JavaScript classes instead of objects and arrays.

    You can use objects and arrays, but do it inside classes.
    Create class methods to add and remove books.
    Maintain all of the original functionality of the application (i.e. no bugs were introduced while refactoring).
    Don't use any library or framework, use only plain JavaScript.
    Add CSS styles to the application to make it match the wireframe proposed by Microverse

Basic UI

    You can use the styles of your choice (colors, fonts, backgrounds, etc.), but try to follow the general layout.
    Concentrate on the general layout, rather than the details.


## Built With

- HTML
- CSS
- Javascript
- Love

## Live Demo

[Live Demo Link](https://ikuartz.github.io/awesome-books)

## Author

👤 **Ivan Silva**

- GitHub: [@iKuartz](https://github.com/iKuartz/)
- Twitter: [@iKuartz01](https://twitter.com/iKuartz01)
- LinkedIn: [Ivan Silva](https://www.linkedin.com/in/ivan-silva-a47058b3/)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/iKuartz/Module1-capstone/issues).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- A big thank you to Microverse, for providing me the knowledge and tools to finish this project.
- An even bigger thank you to all my coding partners who helped me get here.

## 📝 License

## Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)

Disclaimer: This is a human-readable summary of (and not a substitute for) the [license](https://creativecommons.org/licenses/by-nc/4.0/legalcode).

You are free to:

    Share — copy and redistribute the material in any medium or format
    Adapt — remix, transform, and build upon the material

    The licensor cannot revoke these freedoms as long as you follow the license terms.

Under the following terms:

    Attribution — You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.

    NonCommercial — You may not use the material for commercial purposes.

    No additional restrictions — You may not apply legal terms or technological measures that legally restrict others from doing anything the license permits.

Notices:

    You do not have to comply with the license for elements of the material in the public domain or where your use is permitted by an applicable exception or limitation.
    No warranties are given. The license may not give you all of the permissions necessary for your intended use. For example, other rights such as publicity, privacy, or moral rights may limit how you use the material.
