package com.cg.SpringBootMVC.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;

import com.cg.SpringBootMVC.dto.Product;
@Repository("productdao")
public class ProductDaoImpl implements ProductDao {
    @PersistenceContext
	EntityManager manager;
	@Override
	public Product addProduct(Product pro) {
		// TODO Auto-generated method stub
		 manager.persist(pro);
		 return pro;
	}

	@Override
	public List<Product> showAllProduct() {
		// TODO Auto-generated method stub
		return null;
	}

}
