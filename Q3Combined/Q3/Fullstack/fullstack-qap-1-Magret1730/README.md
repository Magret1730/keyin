[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/0ssJ0k2Q)
# Password Generator CLI

This is the starting point for the **Password Generator CLI** assignment. The goal of this project is to create a command-line application that generates random passwords based on user-specified flags.

For full project details, requirements, and grading criteria, refer to the [assignment sheet](https://menglishca.github.io/keyin-course-notes/fullstack/qaps/qap-1/).

## Setup Instructions
1. **Accept the GitHub Assignment** (link provided in the assignment sheet).

1. **Name your new repository** and choose its visibility (public or private).

1. Once your repository is created, **clone your new repo** to your local machine:
   ```bash
   git clone <your-new-repo-url>
   ```

1. Navigate into the project directory and install the necessary dependencies:

   ```bash
   cd <your-new-repo-name>
   npm install
   ```

2. **Run the app:**

   ```bash
   node passwordGenerator.js [flags]
   ```

   Replace `[flags]` with any supported flags such as `--length`, `--numbers`, or `--lowercase`.

3. **Run the tests:**

   ```bash
   npm test
   ```

   This will run the unit tests for the application.

4. You can now begin working on your project, adding your own code and committing your changes as you go:

   ```bash
   git add .
   git commit -m "First commit"
   git push origin main
   ```

## Development Guidelines

1. **Flags to Support**:

   * `--help`: displays a help message explaining how to use the application and its flags.
   * `--length <number>`: sets the password length.
   * `--lowercase`: includes lowercase letters.
   * `--numbers`: includes numbers.

2. **Default Behavior**:

   * If no `--length` flag is provided, default to a length of 8.
   * If neither `--lowercase` nor `--numbers` is provided, default to lowercase letters.

3. **Error Handling**:

   * Display an error if no character types are selected.
   * Handle invalid input gracefully with informative error messages.

4. **Testing**:

   * Write unit tests for the `generatePassword` function.
   * Tests must be written on a separate branch and merged into the main branch via a pull request.
   * All tests should pass before submission.

## Submission Guidelines

* Ensure the application runs correctly from the command line using `node passwordGenerator.js`.
* Ensure all tests pass using `npm test`.
* Submit your GitHub repository link via Teams under the assignment.

## My Implementation

I built a **Node.js command-line password generator** that allows users to generate secure passwords with different options.  
The generator supports enabling/disabling character types and provides proper error handling when no character set is selected.

### Features
- Generate random passwords of customizable length.
- Include or exclude lowercase letters.
- Include numbers.
- Prevent generation if no character type is selected.
- Helpful `--help` flag with usage instructions.

### Usage

Run the program with Node:

`node passwordGenerator.js [flags]`

### Available Flags
- `--help`: shows help message.
- `--length <number>`: sets password length (default: 8).
- `--lowercase`: includes lowercase letters.
- `--disable-lowercase`: explicitly removes lowercase letters.
- `--numbers`: includes numbers.

## Examples
- `node passwordGenerator.js`:Default: 8 characters, includes lowercase
- `node passwordGenerator.js --length 12 --numbers`: 12 characters, lowercase + numbers
- `node passwordGenerator.js --length 10 --numbers --disable-lowercase`:`10 characters, numbers only

## Testing
To test run `npm test`