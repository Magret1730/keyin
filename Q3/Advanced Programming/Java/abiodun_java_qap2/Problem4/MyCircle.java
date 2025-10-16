package abiodun_java_qap2.Problem4;

public class MyCircle {
    private MyPoint center;
    private int radius;

    // Constructor
    public MyCircle(MyPoint center, int radius) {
        this.center = center;
        this.radius = radius;
    }

    // Getters and Setters
    public MyPoint getCenter() {
        return center;
    }

    public void setCenter(MyPoint center) {
        this.center = center;
    }

    public int getRadius() {
        return radius;
    }

    public void setRadius(int radius) {
        this.radius = radius;
    }

    // Area of circle
    public double getArea() {
        return Math.PI * radius * radius;
    }

    // Circumference
    public double getCircumference() {
        return 2 * Math.PI * radius;
    }

    @Override
    public String toString() {
        return "MyCircle[center=" + center + ", radius=" + radius + "]";
    }
}
