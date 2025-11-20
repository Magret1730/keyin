package abiodun_java_qap1.Account;

public class Account {
    // Data fields
    private String id;
    private String name;
    private int balance = 0;

    // Constructor
    public Account(String id, String name) {
        this.id = id;
        this.name = name;
    }

    // Parameterized Constructor
    public Account(String id, String name, int balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }

    // Method to get id
    public String getId() {
        return id;
    }

    // Method to get name
    public String getName() {
        return name;
    }

    // Method to get balance
    public int getBalance() {
        return balance;
    }

    // Method to credit an amount to the account
    public int credit(int amount) {
        balance += amount;
        return balance;
    }

    // Method to debit an amount from the account
    public int debit(int amount) {
        if (amount <= balance) {
            balance -= amount;
        } else {
            System.out.println("Amount exceeded balance");
        }
        return balance;
    }

    // Method to transfer an amount from this account to another account
    public int transferTo(Account another, int amount) {
        if (amount <= balance) {
            balance -= amount;
            another.credit(amount);
        } else {
            System.out.println("Amount exceeded balance");
        }
        return balance;
    }

    // Override toString method
    @Override
    public String toString() {
        return "Account[id=" + id + ", name=" + name + ", balance=" + balance + "]";
    }
}
