package Week2.Rectangle;

public class TestRectangle {
    public static void main(String[] args) {
        Rectangle rectangle1 = new Rectangle(3f, 4f);
        Rectangle rectangle2 = new Rectangle(2.1f, 3.5f);

        System.out.println("Rectangle1 Area: " + rectangle1.getArea());
        System.out.println("Rectangle1 Perimeter: " + rectangle1.getPerimeter());
        System.out.println("Rectangle2 Area: " + rectangle2.getArea());
        System.out.println("Rectangle2 Perimeter: " + rectangle2.getPerimeter());
    }
}
