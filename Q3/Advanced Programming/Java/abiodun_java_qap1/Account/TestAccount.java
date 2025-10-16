package abiodun_java_qap1.Account;

// TestAccount class to test the Account class
public class TestAccount {
    public static void main(String[] args) {
        // Two accounts
        Account acc1 = new Account("101", "John", 5000);
        Account acc2 = new Account("102", "Jane", 4000);

        // Display balance of both accounts
        System.out.println("Account balance " + acc1.getName() + " (acc1) is " + acc1.getBalance());
        System.out.println("Account balance " + acc2.getName() + " (acc2) is " + acc2.getBalance());

        // Transfer $1000 from account 1 to account 2
        acc1.transferTo(acc2, 1000);

        // Display balance of both accounts again
        System.out.println("Account balance for " + acc1.getName() + " (acc1) is " + acc1.getBalance());
        System.out.println("Account balance for " + acc2.getName() + " (acc2) is " + acc2.getBalance());
    }
}
