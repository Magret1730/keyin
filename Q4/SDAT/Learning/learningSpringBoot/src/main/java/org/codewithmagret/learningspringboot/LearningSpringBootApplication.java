package org.codewithmagret.learningspringboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class LearningSpringBootApplication {

	public static void main(String[] args) {
//		SpringApplication.run(LearningSpringBootApplication.class, args);
		var orderService = new OrderService(new StripePaymentService());
		orderService.placeOrder();

		var orderService2 = new OrderService(new PaypalPaymentService());
		orderService2.placeOrder();

//		orderService.setPaymentService();
	}

}
