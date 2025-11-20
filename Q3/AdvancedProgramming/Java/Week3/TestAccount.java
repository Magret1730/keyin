package Week3;

public class TestAccount {
    public static void main(String[] args) {
        Customer c1 = new Customer(101, "Alice", 'f');

        Account acc1 = new Account(1, c1, 1000.0);
        System.out.println("Account ID: " + acc1.getId());
        System.out.println("Account Holder: " + acc1.getCustomerName());
        System.out.println("Account Balance: $" + acc1.getBalance());

        acc1.deposit(500.0);
        System.out.println("After deposit $500, Balance: $" + acc1.getBalance());

        acc1.withdraw(200.0);
        System.out.println("After withdrawing $200, Balance: $" + acc1.getBalance());

        acc1.withdraw(2000.0); // Should warn about insufficient funds

        System.out.println("Account Info: " + acc1);
    }
}
