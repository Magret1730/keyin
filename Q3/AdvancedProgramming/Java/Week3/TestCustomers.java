package Week3;

public class TestCustomers {
    public static void main(String[] args) {
        Customer customer1 = new Customer(1, "Alice", 20);
        Customer customer2 = new Customer(2, "Bob", 15);

        System.out.println("Customer 1 ID: " + customer1.getID());
        System.out.println("Customer 1 Name: " + customer1.getName());
        System.out.println("Customer 1 Discount: " + customer1.getDiscount() + "%");

        System.out.println("Customer 2 ID: " + customer2.getID());
        System.out.println("Customer 2 Name: " + customer2.getName());
        System.out.println("Customer 2 Discount: " + customer2.getDiscount() + "%");

        // Update customer discounts
        customer1.setDiscount(25);
        customer2.setDiscount(10);

        System.out.println("Updated Customer 1 Discount: " + customer1.getDiscount() + "%");
        System.out.println("Updated Customer 2 Discount: " + customer2.getDiscount() + "%");

        System.out.println("Customer 1 Info: " + customer1);
        System.out.println("Customer 2 Info: " + customer2);
    }
}
