package com.cg.SpringBootDemo.dao;

import java.util.List;

import com.cg.SpringBootDemo.dto.Product;

public interface ProductDao {
	public Product addProduct(Product pro);
	public List<Product> showAllProduct();
	public Product updateProduct(int prodId);
	public boolean deleteProduct(int prodId);

}
