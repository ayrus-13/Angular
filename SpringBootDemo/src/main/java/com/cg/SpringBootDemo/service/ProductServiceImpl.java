package com.cg.SpringBootDemo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.SpringBootDemo.dao.ProductDao;
import com.cg.SpringBootDemo.dto.Product;
@Service("prodservice")
public class ProductServiceImpl implements ProductService{
	@Autowired
	ProductDao proddao;
	@Override
	public Product addProduct(Product pro) {
		// TODO Auto-generated method stub
		return proddao.addProduct(pro);
	}

	@Override
	public List<Product> showAllProduct() {
		// TODO Auto-generated method stub
		return proddao.showAllProduct();
	}

}
