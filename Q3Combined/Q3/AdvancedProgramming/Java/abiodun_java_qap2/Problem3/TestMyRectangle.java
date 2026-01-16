package abiodun_java_qap2.Problem3;

public class TestMyRectangle {
    public static void main(String[] args) {
        // Create MyPoint objects
        MyPoint p1 = new MyPoint(2, 7);
        MyPoint p2 = new MyPoint(10, 2);

        // Create MyRectangle using p1 and p2
        MyRectangle rect = new MyRectangle(p1, p2);

        // Display rectangle info
        System.out.println(rect);

        // Test area and perimeter
        System.out.println("Width: " + rect.getWidth());
        System.out.println("Height: " + rect.getHeight());
        System.out.println("Area: " + rect.getArea());
        System.out.println("Perimeter: " + rect.getPerimeter());

        // Change corners
        rect.setTopLeft(new MyPoint(1, 9));
        rect.setBottomRight(new MyPoint(12, 3));

        // Display updated info
        System.out.println("\nAfter modifying corners:");
        System.out.println(rect);
        System.out.println("Area: " + rect.getArea());
        System.out.println("Perimeter: " + rect.getPerimeter());
    }
}
