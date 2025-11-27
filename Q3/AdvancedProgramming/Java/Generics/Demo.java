package Generics;

public class Demo {
    public static <X> void display(X param) {
        System.out.println("Parameter value: " + param);
    }

    public static void main(String[] args) {
        System.out.println("Generics MyPoint Demo");

        MyPoint<Integer> ipoint = new MyPoint<>(4, 4);
        MyPoint<Double> dpoint = new MyPoint<>(4.5, 4.5);

        System.out.println("Integer Point: " + ipoint);
        System.out.println("Double Point: " + dpoint);

        ipoint.displayPoint("This is my integer generic message");
        dpoint.displayPoint("This is my double generic message");

        display(4);
        display(4.5);
        display("Generics in Java");
        display("A");
    }
}
