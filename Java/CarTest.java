class Car {
    String make;
    String model;
    int year;

    void displayDetails() {
        System.out.println(year + " " + make + " " + model);
    }
}

public class CarTest {
    public static void main(String[] args) {
        Car car1 = new Car();
        car1.make = "Toyota";
        car1.model = "Corolla";
        car1.year = 2020;
        car1.displayDetails();
    }
}
