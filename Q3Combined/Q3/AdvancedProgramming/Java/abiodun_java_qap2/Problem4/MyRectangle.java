package abiodun_java_qap2.Problem4;

public class MyRectangle {
    // Data members
    private MyPoint topLeft;
    private MyPoint bottomRight;

    // Constructor
    public MyRectangle(MyPoint topLeft, MyPoint bottomRight) {
        this.topLeft = topLeft;
        this.bottomRight = bottomRight;
    }

    // Getters and Setters
    public MyPoint getTopLeft() {
        return topLeft;
    }

    public void setTopLeft(MyPoint topLeft) {
        this.topLeft = topLeft;
    }

    public MyPoint getBottomRight() {
        return bottomRight;
    }

    public void setBottomRight(MyPoint bottomRight) {
        this.bottomRight = bottomRight;
    }

    // Get width of rectangle
    public int getWidth() {
        return Math.abs(bottomRight.getX() - topLeft.getX());
    }

    // Get height of rectangle
    public int getHeight() {
        return Math.abs(bottomRight.getY() - topLeft.getY());
    }

    // Get area
    public int getArea() {
        return getWidth() * getHeight();
    }

    // Get perimeter
    public int getPerimeter() {
        return 2 * (getWidth() + getHeight());
    }

    // toString method
    @Override
    public String toString() {
        return "MyRectangle[topLeft=" + topLeft + ", bottomRight=" + bottomRight +
               ", width=" + getWidth() + ", height=" + getHeight() + "]";
    }
}
