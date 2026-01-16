package Generics;

public class Test<T, U> {
    T obj1;
    U obj2;

    public Test(T obj1, U obj2) {
        this.obj1 = obj1;
        this.obj2 = obj2;
    }

    public void displayTypes() {
        System.out.println("Type of T: " + obj1.getClass().getName());
        System.out.println("Type of U: " + obj2.getClass().getName());
    }
}
