package com.cg.SpringBootMVC.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cg.SpringBootMVC.dto.Product;
import com.cg.SpringBootMVC.service.ProductImpl;

@Controller
public class EmployeeController {
	@Autowired
	ProductImpl productservice;
   @GetMapping(value="/")
	public String getData() {
	  return "home";
		
	}
   @GetMapping(value="/add")
	public String addData(@ModelAttribute("my") Product pro) {
	  return "AddProduct";
		
	}
   @GetMapping(value="/show")
	public String showData() {
	  return "ShowProduct";
		
	}
   @PostMapping(value="/doadd")
   public String dataAddedDb(@ModelAttribute("my") Product pro) {
	   productservice.addProduct(pro);
	   return "home";
	   
   }
}
