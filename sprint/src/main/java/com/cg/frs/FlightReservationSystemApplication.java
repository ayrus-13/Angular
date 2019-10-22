package com.cg.frs;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
public class FlightReservationSystemApplication {
	
	public static void main(String[] args) {
		SpringApplication.run(FlightReservationSystemApplication.class, args);
		System.out.println("asdf");
		
	}
	
}
