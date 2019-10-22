package com.cg.SpringBootMVC.dao;

import java.util.List;

import com.cg.SpringBootMVC.dto.Product;

public interface ProductDao {
public Product addProduct(Product pro);
	
	public List<Product> showAllProduct();
}
