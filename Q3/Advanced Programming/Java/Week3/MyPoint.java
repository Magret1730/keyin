package Week3;

public class MyPoint {
    private int x;
    private int y;

    // Default constructor

    public MyPoint () {
        this.x = 0;
        this.y = 0;
    }

    // Parameterized constructor
    public MyPoint(int x, int y) {
        this.x = x;
        this.y = y;
    }

    // Getter for x
    public int getX() {
        return x;
    }

    // Setter for x
    public void setX(int x) {
        this.x = x;
    }

    // Getter for y
    public int getY() {
        return y;
    }

    // Setter for y
    public void setY(int y) {
        this.y = y;
    }

    // Setter for XY
    public void setXY(int x, int y) {
        this.x = x;
        this.y = y;
    }

    @Override
    public String toString() {
        return "(" + x + ", " + y + ")";
    }

    // Method to calculate distance from this point to a given point at (x, y)
    public double distance(int x, int y) {
        return Math.sqrt(Math.pow(this.x - x, 2) + Math.pow(this.y - y, 2));
    }

    // Method to calculate distance from this point to a given instance of MyPoint
    public double distance(MyPoint another) {
        return distance(another.x, another.y);
    }

    // Method to calculate distance from this point to the origin (0,0)
    public double distance() {
        return distance(0, 0);
    }
    
}
