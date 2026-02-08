package org.codewithmagret.learningspringboot;

public class PaypalPaymentService implements PaymentService {
    @Override
    public void processPayment(double amount) {
        System.out.println("PAYPAL");
        System.out.println("Processing payment of $" + amount + " through PayPal.");
    }
}
