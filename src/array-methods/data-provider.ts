import { User } from "../user";

export class DataProvider {
    provideData(): User[] {
        return [
            new User("����", "���������"),
            new User("����", "������"),
            new User("���������", "�����"),
            new User("��������", "�������"),
            new User("�������", "�����")
        ];
    }
}