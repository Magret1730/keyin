package abiodun_java_qap2.Problem1;

public class CreditCard {
    private Money balance;
    private Money creditLimit;
    private Person owner;

    // Constructor
    public CreditCard(Person newCardHolder, Money limit) {
        owner = newCardHolder;
        creditLimit = new Money(limit); // Copy constructor
        balance = new Money(0); // Initialize balance to $0
    }

    // Gets Balance
    public Money getBalance() {
        return new Money(balance);
    }

    // Gets credit limit
    public Money getCreditLimit() {
        return new Money(creditLimit);
    }

    // Owner details
    public String getPersonals() {
        return owner.toString();
    }

    // Charge method
    public void charge(Money amount) {
        Money newBalance = balance.add(amount);
        if (newBalance.compareTo(creditLimit) <= 0) {
            balance = newBalance;
            System.out.println("Charge: " + amount);
        } else {
            System.out.println("Charge denied: Exceeds credit limit.");
        }
    }

    // Payment method
    public void payment(Money amount) {
        balance = balance.subtract(amount);
        System.out.println("Payment: " + amount);
    }
}
