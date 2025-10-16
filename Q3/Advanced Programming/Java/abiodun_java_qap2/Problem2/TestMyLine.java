package abiodun_java_qap2.Problem2;

public class TestMyLine {
    public static void main(String[] args) {
        // Create points
        MyPoint p1 = new MyPoint(0, 0);
        MyPoint p2 = new MyPoint(3, 4);

        // Create line using points
        MyLine line1 = new MyLine(p1, p2);
        System.out.println(line1);

        // Create line using coordinates
        MyLine line2 = new MyLine(1, 2, 5, 7);
        System.out.println(line2);

        // Test getters
        System.out.println("Begin: " + line1.getBegin());
        System.out.println("End: " + line1.getEnd());
        System.out.println("BeginX: " + line1.getBeginX());
        System.out.println("EndY: " + line1.getEndY());

        // Test setters
        line1.setBeginXY(2, 2);
        line1.setEndXY(6, 6);
        System.out.println("After setting new points: " + line1);

        // Test length and gradient
        System.out.println("Length of line1: " + line1.getLength());
        System.out.println("Gradient of line1 (radians): " + line1.getGradient());
    }
}
