# Todo-list

**Todo-list**, или список задач, - это приложение, позволяющее пользователю управлять своими задачами: добавлять, редактировать, отмечать выполненные и удалять их. Этот проект реализован с использованием технологий **React, Redux, React Beautiful DnD (rbdnd), SCSS и TypeScript**. Он задумывался как демонстрационный, чтобы показать возможности интеграции этих технологий.

## Функционал

Проект предоставляет следующие возможности:

1. **Добавление задачи.**
2. **Редактирование задачи.**
3. **Отметка задачи как выполненной.**
4. **Удаление задачи.**
5. **Сортировка задач** по имени (по возрастанию и убыванию) и по времени (по возрастанию и убыванию).
6. **Фильтрация задач** (все задачи, только выполненные).
7. **Удаление всех задач** или только выполненных.
8. **Реализация drag-and-drop:** задачи можно переставлять мышкой.
9. **Сохранение данных в localStorage:** задачи сохраняются при перезагрузке страницы.
10. **Поиск по задачам.**
11. **Адаптивный дизайн,** поддерживающий различные разрешения устройств.

Весь функционал, за исключением поиска и интерактивного UI (всплывающие окна, изменение цвета ссылок при их активации и т.п.), реализован на Redux.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
