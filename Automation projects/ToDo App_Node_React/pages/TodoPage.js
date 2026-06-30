import { expect } from "@playwright/test";

export class TodoPage {

    constructor(page) {

        this.page = page;

        this.todoTextbox = page.getByTestId("text-input");

        this.clearCompletedButton = page.getByRole("button", {
            name: "Clear completed"
        });

        this.todoList = page.getByTestId("todo-list");

        this.todoCount = page.locator(".todo-count");
    }

    async addTodo(todo) {

        await this.todoTextbox.fill(todo);

        await this.todoTextbox.press("Enter");

    }

    async completeTodo(todoName) {

        await this.page
            .getByRole("listitem")
            .filter({ hasText: todoName })
            .getByTestId("todo-item-toggle")
            .check();

    }

    async clearCompleted() {

        await this.clearCompletedButton.click();

    }

    async verifyTodoVisible(todo) {

        await expect(this.page.getByText(todo)).toBeVisible();

    }

    async verifyTodoNotVisible(todo) {

        await expect(this.page.getByText(todo)).toHaveCount(0);

    }

    async verifyCounter(text) {

        await expect(this.todoCount).toContainText(text);

    }

    async pressEnter() {

        await this.todoTextbox.press("Enter");

    }

    async typeTodo(todo) {

        await this.todoTextbox.fill(todo);

    }

    async clickTodo(todoName) {

        await this.page
            .getByText(todoName)
            .click();

    }

    async getTodoCount() {

        return await this.page
            .locator(".todo-list li")
            .count();

    }

}