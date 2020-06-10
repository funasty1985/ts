class Vehicle {
  //   A child class cannot turn a public class method with the same name to private
  //   drive(): void {
  //     console.log('chugga chungga');
  //   }

  constructor(public color: string) {}

  //   the same as
  //   color: string;

  //   constructor(color: string) {
  //     this.color = color;
  //   }

  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class Cars extends Vehicle {
  // we don't put public on color because we want to
  // make use of the color field in the parent class
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const kar = new Cars(4, 'red');
kar.startDrivingProcess();

// Car.protoType.drive is a private method
// car.drive();
