import { DataProvider } from "./data-provider";

export class LearnArrayMethods {

    learnMap(): void {
        let data = new DataProvider().provideData();
        let names = data.map((val, index, arr) => {
            return val.firstName;
        });

        console.log(names);
    }

    learnFilter(): void {
        let data = new DataProvider().provideData();
        let filtered = data.filter((val, index, arr) => {
            return val.firstName.startsWith("ְ", 0);
        });

        console.log(filtered);
    }

    learnReduce(): void {
        let data = [1, 4, 5, 7, 10];
        let result = data.reduce((summ, val) => {
            return summ * val;
        }, 1);

        console.log(result);
    }

    learnSomeEvery(): void {
        let data = new DataProvider().provideData();

        let someRes = data.some(val => val.firstName === "Þנטי"); // true
        console.log(someRes);

        let everyRes = data.every(val => val.firstName === "Þנטי"); // false
        console.log(everyRes);
    }

    learnIncludes(): void {
        let data = new DataProvider().provideData();

        let firstRes = data.includes(data[3]);
        console.log(firstRes); // true

        let copyUser = Object.assign({}, data[3]);
        let secondRes = data.includes(copyUser); // false
        console.log(secondRes);
    }
}