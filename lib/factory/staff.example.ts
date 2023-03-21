class Staff {
    name: string
    salary: number

    constructor(name: string, salary: number) {
        this.name = name
        this.salary = salary
        console.log(`getting started ${name},${salary}`)
    }
}

class Teacher extends Staff {
    constructor(name:string,salary:number){
        super(name,salary)
    }
}

class Student extends Staff {
    constructor(name:string,salary:number){
        super(name,salary)
    }
    }

class StaffFactory {
    static createStaff(data:string,name:string,salary: number): Staff {
        switch(data){
            case 'Teacher':
                return new Teacher(name,salary);
            case 'Student':
                return new Student(name,salary);
            default:
                throw new Error("Please a Enter Staff type")
        }
    }
}

StaffFactory.createStaff("Teacher","Mr. Eray",20000)
StaffFactory.createStaff("Student","Mr. Recep",200)


