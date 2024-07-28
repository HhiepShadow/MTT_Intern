import { action, makeAutoObservable, makeObservable, observable, when } from "mobx";

class EmployeeStore {
    employees = [];

    constructor() {
        makeObservable(this, {
            employees: observable,
            addEmployee: action,
            sendWelcomeEmail: action
        })
    }

    addEmployee(employee) {
        this.employees.push(employee);
        when(
            () => this.employees.length === 1,
            () => {
                this.sendWelcomeEmail(employee);
            }
        );
    }

    sendWelcomeEmail(employee) {
        console.log(`Sending welcome email to ${employee.name}`);
    }
}

const store = new EmployeeStore();
store.addEmployee({
    name: "John Doe"
});