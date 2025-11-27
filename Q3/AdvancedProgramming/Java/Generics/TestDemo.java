package Generics;

public class TestDemo {
    public static void main(String[] args) {
        System.out.println("Test Demo with Generics");

        Test<Integer, String> testInstance = new Test<>(42, "Hello Generics");
        testInstance.displayTypes();
    }
}
