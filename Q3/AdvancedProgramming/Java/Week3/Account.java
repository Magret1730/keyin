package Week3;

public class Account {
    private int id;
    private Customer customer;
    private double balance;

    // Constructors
    public Account(int id, Customer customer, double balance) {
        this.id = id;
        this.customer = customer;
        this.balance = balance;
    }

    public Account(int id, Customer customer) {
        this(id, customer, 0.0);
    }

    // Getters and setters
    public int getId() {
        return id;
    }

    public Customer getCustomer() {
        return customer;
    }

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }

    public String getCustomerName() {
        return customer.getName();
    }

    // Deposit method
    public Account deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
        return this;
    }

    // Withdraw method
    public Account withdraw(double amount) {
        if (amount > balance) {
            System.out.println("Amount withdrawn exceeds the current balance!");
        } else if (amount > 0) {
            balance -= amount;
        }
        return this;
    }

    // toString
    @Override
    public String toString() {
        return customer.toString() + " balance=$" + String.format("%.2f", balance);
    }
}