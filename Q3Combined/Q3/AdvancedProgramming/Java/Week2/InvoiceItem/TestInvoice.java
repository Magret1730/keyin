package Week2.InvoiceItem;

public class TestInvoice {
    public static void main(String[] args) {

        InvoiceItem inv1 = new InvoiceItem("A101", "Laptop", 2, 1200.50);
        InvoiceItem inv2 = new InvoiceItem("A102", "Phone", 5, 800.75);
        InvoiceItem inv3 = new InvoiceItem("A103", "Tablet", 3, 450.00);

        InvoiceItem inv4 = new InvoiceItem(inv2);

        System.out.println(inv1);
        System.out.println(inv2);
        System.out.println(inv3);
        System.out.println(inv4);

        System.out.println("Total invoices created: " + InvoiceItem.invoiceCount);
    }
}
