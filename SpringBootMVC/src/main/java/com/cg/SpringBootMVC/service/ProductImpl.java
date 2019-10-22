package com.cg.SpringBootMVC.service;

import java.util.List;

import com.cg.SpringBootMVC.dto.Product;

public interface ProductImpl {
	
	public Product addProduct(Product pro);
	
	public List<Product> showAllProduct();

}
