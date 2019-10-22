package com.cg.SpringBootDemo.service;



import java.util.List;

import com.cg.SpringBootDemo.dto.Product;

public interface ProductService {
	public Product addProduct(Product pro);
	public List<Product> showAllProduct();

}
