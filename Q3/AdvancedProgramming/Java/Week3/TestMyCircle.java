package Week3;

public class TestMyCircle {
    public static void main(String[] args) {
        // Test default constructor
        MyCircle c1 = new MyCircle();
        System.out.println(c1);

        // Test (x,y,radius) constructor
        MyCircle c2 = new MyCircle(3, 4, 5);
        System.out.println(c2);

        // Test (MyPoint, radius) constructor
        MyPoint p = new MyPoint(5, 6);
        MyCircle c3 = new MyCircle(p, 10);
        System.out.println(c3);

        // Test getters/setters
        c1.setRadius(7);
        c1.setCenter(new MyPoint(1, 2));
        System.out.println("c1 radius: " + c1.getRadius());
        System.out.println("c1 center: " + c1.getCenter());

        // Test getCenterX/Y and setCenterX/Y
        System.out.println("c2 centerX: " + c2.getCenterX());
        c2.setCenterY(8);
        System.out.println("c2 new center: " + c2.getCenter());

        // Test area & circumference
        System.out.printf("c3 area: %.2f%n", c3.getArea());
        System.out.printf("c3 circumference: %.2f%n", c3.getCircumference());

        // Test distance between circles
        System.out.println("Distance between c2 and c3: " + c2.distance(c3));
    }
}
