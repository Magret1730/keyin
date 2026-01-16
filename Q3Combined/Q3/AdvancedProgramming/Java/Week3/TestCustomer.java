package Week3;

public class TestCustomer {
    public static void main(String[] args) {
        Customer customer = new Customer(1, "John Doe", 10);
        System.out.println("Customer ID: " + customer.getID());
        System.out.println("Customer Name: " + customer.getName());
        System.out.println("Customer Discount: " + customer.getDiscount() + "%");

        customer.setDiscount(15);
        System.out.println("Updated Customer Discount: " + customer.getDiscount() + "%");

        System.out.println("Customer Info: " + customer);
    }
}
