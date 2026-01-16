package Generics;

public class MyPoint<T> {
    private T x;
    private T y;

    // Default constructor

    public MyPoint () {
        this.x = null;
        this.y = null;
    }

    // Parameterized constructor
    public MyPoint(T x, T y) {
        this.x = x;
        this.y = y;
    }

    // Getter for x
    public T getX() {
        return x;
    }

    // Setter for x
    public void setX(T x) {
        this.x = x;
    }

    // Getter for y
    public T getY() {
        return y;
    }

    // Setter for y
    public void setY(T y) {
        this.y = y;
    }

    // Setter for XY
    public void setXY(T x, T y) {
        this.x = x;
        this.y = y;
    }

    @Override
    public String toString() {
        return "(" + x + ", " + y + ")";
    }

    public<Y> void displayPoint(Y msg) {
        System.out.println(this.x + " and " + this.y + " Message = " + msg);
    }

    // // Method to calculate distance from this point to a given point at (x, y)
    // public double distance(int x, int y) {
    //     return Math.sqrt(Math.pow(this.x - x, 2) + Math.pow(this.y - y, 2));
    // }

    // // Method to calculate distance from this point to a given instance of MyPoint
    // public double distance(MyPoint another) {
    //     return distance(another.x, another.y);
    // }

    // // Method to calculate distance from this point to the origin (0,0)
    // public double distance() {
    //     return distance(0, 0);
    // }
    
}

