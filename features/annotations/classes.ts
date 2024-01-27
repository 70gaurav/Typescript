// class Vehicle {
//   drive(): void {
//     console.log("start");
//   }

//   honk(): void {
//     console.log("beep");
//   }
// }

// class Car extends Vehicle {
//   drive(): void {
//     console.log("vroom");
//   }
// }

// const car = new Car();

// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();

// // Modifiers
// //public: This method can be called any where, any time

// //private: This method can only be called by other methods in this class

// //protected: This method can be called by other methods in this class, or by other methods in child classes

// class Vehicle1 {
//   protected honk(): void {
//     console.log("beep");
//   }
// }

// const vehicle1 = new Vehicle1();
// // vehicle1.honk()

// class Car1 extends Vehicle1 {
//   private drive(): void {
//     console.log("vroom");
//   }

//   startDrivingProcess(): void{
//     this.drive()
//     this.honk()
//   }
// }

// const car1 = new Car1()
// car1.startDrivingProcess()
// // car1.honk()



class Vehicle {
    constructor(public color: string) {}

    protected honk(): void {
        console.log('beep')
    }
}

const vehicle = new Vehicle('orange')
console.log(vehicle.color)