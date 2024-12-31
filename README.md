# My TypeScript ToDo-List

This is a simple TODO-list application built with TypeScript. It allows users to:

- **Add new tasks:** Users can input new tasks with descriptions.
- **Mark tasks as complete:** Check off tasks that have been finished.
- **Edit existing tasks:** Update task descriptions if needed.
- **Delete tasks:** Remove one or all tasks from the list.
- **Filter tasks:** View all tasks, only completed tasks, or only active tasks.
- **Local Storage persistence:** Tasks are saved in the browser's local storage, so they persist even after the browser is closed.

## Technologies Used

- **TypeScript:** For type safety and improved code maintainability.
- **Tailwind CSS:** For easier styling with a robust framework.

## Project Structure

```
MyTypeScriptToDo-List/
├── dist/               # folder with production files
├── public/             # folder with html files
│   └── index.html
├── src/                # folder with source files
|   ├── css/            # folder with style files
│   |   └── app.css
|   ├── interfaces/     # folder with interface files
│   |   ├── ItemInterface.ts
│   |   ├── ListInterface.ts
│   |   └── ListTemplateInterface.ts
|   ├── models/         # folder with models files
│   |   ├── Item.ts
│   |   └── List.ts
|   ├── templates/      # folder with template files
│   |   └── ListTemplate.ts
│   └── index.ts
└── ...
```

## Getting Started (Example)

1. Clone the repository: `git clone https://github.com/Webvelopers/MyTypeScriptToDo-List.git`
2. Install dependencies: `npm install`
3. Build the project: `npm run build`
4. Open `dist/index.html` in your browser.

This project is a great starting point for learning TypeScript and building basic web applications. You can expand on this foundation by adding more features, implementing different design patterns, and exploring other front-end technologies.
