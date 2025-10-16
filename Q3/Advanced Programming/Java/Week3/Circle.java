package Week3;

public class Circle {
    private double radius = 1.0;
    private String color = "red";
    private static final double PI = 3.14159;

    public Circle () {
    }

    public Circle(double radius) {
        this.radius = radius;
    }

    public Circle(double radius, String color) {
        this.radius = radius;
        this.color = color;
    }

    // Getter for radius
    public double getRadius() {
        return radius;
    }

    // Getter for color
    public String getColor() {
        return color;
    }

    // Setter for radius
    public void setRadius(double radius) {
        this.radius = radius;
    }

    // Setter for color
    public void setColor(String color) {
        this.color = color;
    }

    @Override
    public String toString() {
        return "Circle[radius=" + radius + ", color=" + color + "]";
    }

    // Method to calculate area
    public double area() {
        return PI * radius * radius;
    }
}
