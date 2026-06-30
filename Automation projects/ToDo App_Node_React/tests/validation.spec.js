import { test, expect } from "@playwright/test";

import { HomePage } from "../pages/HomePage";

import { TodoPage } from "../pages/TodoPage";

test.describe("Todo Validation", () => {

    test("Blank todo should not be created", async ({ page }) => {

        const home = new HomePage(page);

        const todo = new TodoPage(page);

        await home.open();

        await todo.typeTodo("");

        await todo.pressEnter();

        // expect(await todo.getTodoCount()).toBe(0);

    });

    test("Spaces only should not create todo", async ({ page }) => {

        const home = new HomePage(page);

        const todo = new TodoPage(page);

        await home.open();

        await todo.typeTodo("      ");

        await todo.pressEnter();

        expect(await todo.getTodoCount()).toBe(0);

    });

    test("Leading spaces should be trimmed", async ({ page }) => {

        const home = new HomePage(page);

        const todo = new TodoPage(page);

        await home.open();

        await todo.typeTodo("     Learn Playwright");

        await todo.pressEnter();

        await todo.verifyTodoVisible("Learn Playwright");

    });

    test("Special characters are allowed", async ({ page }) => {

        const home = new HomePage(page);

        const todo = new TodoPage(page);

        await home.open();

        await todo.addTodo("@#$%^&*()");

        await todo.verifyTodoVisible("@#$%^&*()");

    });

    test("Numbers are allowed", async ({ page }) => {

        const home = new HomePage(page);

        const todo = new TodoPage(page);

        await home.open();

        await todo.addTodo("123456789");

        await todo.verifyTodoVisible("123456789");

    });

});