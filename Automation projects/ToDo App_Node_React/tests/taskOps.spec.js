// import { test } from "@playwright/test";

// import { HomePage } from "../pages/HomePage";

// import { TodoPage } from "../pages/TodoPage";

// import { TODOS } from "../utils/testData";

// test("Todo Operations", async ({ page }) => {

//     const home = new HomePage(page);

//     const todo = new TodoPage(page);

//     await home.open();

//     // Add Tasks

//     await todo.addTodo(TODOS.task1);

//     await todo.addTodo(TODOS.task2);

//     await todo.addTodo(TODOS.task3);

//     await todo.addTodo(TODOS.task4);

//     // Complete first two tasks

//     await todo.completeTodo(TODOS.task1);

//     await todo.completeTodo(TODOS.task2);

//     // Filters

//     await todo.clickTodo(TODOS.task3);

//     await todo.clickActive();

//     await todo.clickAll();

//     await todo.clickCompleted();

//     await todo.clickAll();

//     await todo.clickActive();

//     await todo.clickAll();

//     await todo.clickTodo(TODOS.task1);

//     await todo.clickCompleted();

//     await todo.clickAll();

//     // Assertions

//     await todo.verifyTodoVisible(TODOS.task3);

//     await todo.verifyTodoVisible(TODOS.task2);

//     await todo.clickActive();

//     await todo.clickAll();

//     await todo.verifyTodoVisible(TODOS.task1);

//     await todo.clickFooter();

//     await todo.verifyCompletedVisible();

//     // Clear completed

//     await todo.clickActive();

//     await todo.clickAll();

//     await todo.clearCompleted();

//     // Remaining tasks

//     await todo.clickTodo(TODOS.task3);

//     await todo.verifyTodoVisible(TODOS.task3);

//     await todo.completeTodo(TODOS.task3);

//     await todo.verifyTodoVisible(TODOS.task4);

//     await todo.completeTodo(TODOS.task4);

//     await todo.clickCompleted();

//     await todo.verifyTodoListContains(TODOS.task3);

//     await todo.clickTodo(TODOS.task4);

//     await todo.clickTodo(TODOS.task3);

//     await todo.verifyTodoListContains(TODOS.task3);

//     await todo.verifyTodoListContains(TODOS.task4);

// });