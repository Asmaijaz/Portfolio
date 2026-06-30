import { test } from "@playwright/test";

import { HomePage } from "../pages/HomePage";

import { TodoPage } from "../pages/TodoPage";

import { TODOS } from "../utils/testData";

test.describe("Clear Completed Todos", () => {

    test("Verify completed todos are removed", async ({ page }) => {

        const home = new HomePage(page);

        const todo = new TodoPage(page);

        await home.open();

        await todo.addTodo(TODOS.task1);

        await todo.addTodo(TODOS.task2);

        await todo.addTodo(TODOS.task3);

        await todo.completeTodo(TODOS.task1);

        await todo.completeTodo(TODOS.task2);

        await todo.clearCompleted();

        await todo.verifyTodoNotVisible(TODOS.task1);

        await todo.verifyTodoNotVisible(TODOS.task2);

        await todo.verifyTodoVisible(TODOS.task3);

        await todo.verifyCounter("1 item left");

    });

});