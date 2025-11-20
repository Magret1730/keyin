package abiodun_java_qap1.Time;

public class TestTime {
    public static void main(String[] args) {
        // Creates two time objects
        Time t1 = new Time(0, 0, 0);
        Time t2 = new Time(0, 0, 0);

        // Sets their time using set methods
        t1.setTime(21, 10, 15);
        t2.setTime(10, 20, 25);

        // Displays the times before they are changed
        System.out.println("Before changes:");
        System.out.println("t1 = " + t1);
        System.out.println("t2 = " + t2);

        // Calls nextSecond() for t1 and previousSecond() for t2
        t1.nextSecond();
        t2.previousSecond();

        // Displays the final times
        System.out.println("After changes:");
        System.out.println("t1 = " + t1);
        System.out.println("t2 = " + t2);
    }
}
