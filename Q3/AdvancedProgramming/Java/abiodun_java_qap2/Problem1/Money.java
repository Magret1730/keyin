package abiodun_java_qap2.Problem1;

public class Money {
    private long dollars;
    private long cents;

    // Constructor that takes dollars and cents
    public Money(double amount) {
        dollars = (long) amount;
        cents = Math.round((amount - dollars) * 100);
    }

    // Copy constructor
    public Money(Money otherObject) {
        this.dollars = otherObject.dollars;
        this.cents = otherObject.cents;
    }

    // Adds dollars and cents and returns the total as a double
    public double toDouble() {
        return dollars + cents / 100.0;
    }

    // Adds two Money objects and returns a new Money object
    public Money add(Money otherAmount) {
        double total = this.toDouble() + otherAmount.toDouble();
        return new Money(total);
    }

    // Subtracts two Money objects and returns a new Money object
    public Money subtract(Money otherAmount) {
        double difference = this.toDouble() - otherAmount.toDouble();
        return new Money(difference);
    }

    // Compares two Money objects
    public int compareTo(Money otherObject) {
        return Double.compare(this.toDouble(), otherObject.toDouble());
    }

    // Checks if two Money objects are equal
    public boolean equals(Money otherObject) {
        return this.dollars == otherObject.dollars && this.cents == otherObject.cents;
    }

    // toString method
    @Override
    public String toString() {
        // return String.format("$%d.%02d", dollars, cents);
        return String.format("$%.2f", toDouble());
    }
}
