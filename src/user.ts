export class User {

    constructor(public firstName: string, public lastName: string) {

    }

    printFullName(): void {
        console.log(`${this.lastName} ${this.firstName}`);
    }
}