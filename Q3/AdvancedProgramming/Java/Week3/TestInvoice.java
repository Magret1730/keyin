package Week3;

public class TestInvoice {
    public static void main(String[] args) {
        Customer customer = new Customer(1, "Alice", 20);
        Invoice invoice = new Invoice(101, customer, 500.0);

        System.out.println("Invoice ID: " + invoice.getID());
        System.out.println("Customer Name: " + invoice.getCustomerName());
        System.out.println("Invoice Amount: $" + invoice.getAmount());
        System.out.println("Amount After Discount: $" + invoice.getAmountAfterDiscount());

        // Update customer discount
        customer.setDiscount(25);
        System.out.println("Updated Amount After Discount: $" + invoice.getAmountAfterDiscount());
    }
}