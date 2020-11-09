import { User } from "../user";

export class DataProvider {
    provideData(): User[] {
        return [
            new User("Юрий", "Авидисьян"),
            new User("Миша", "Пупкин"),
            new User("Александр", "Ворин"),
            new User("Анатолий", "Волошин"),
            new User("Дмитрий", "Терех")
        ];
    }
}