package com.cg.SpringBootMVC.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cg.SpringBootMVC.dao.ProductDao;
import com.cg.SpringBootMVC.dto.Product;
@Service("productservice")
@Transactional
public class ProductServiceImpl implements ProductImpl {
    @Autowired
	ProductDao productdao;
	@Override
	public Product addProduct(Product pro) {
		// TODO Auto-generated method stub
		return productdao.addProduct(pro);
	}

	@Override
	public List<Product> showAllProduct() {
		// TODO Auto-generated method stub
		return productdao.showAllProduct();
	}

}
