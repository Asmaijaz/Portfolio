import { BASE_URL } from "../utils/constants";

export class HomePage {

    constructor(page) {
        this.page = page;
    }

    async open() {
        await this.page.goto(BASE_URL);

       const before = await this.page.evaluate(() => localStorage.length);
        console.log("Before clear:", before);

        await this.page.evaluate(() => localStorage.clear());

        const after = await this.page.evaluate(() => localStorage.length);
        console.log("After clear:", after);

        await this.page.reload();

    }

}