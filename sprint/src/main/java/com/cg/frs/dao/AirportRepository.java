package com.cg.frs.dao;
/*
 * Author Surya
 */

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cg.frs.dto.Airport;


public interface AirportRepository extends JpaRepository<Airport,String> {
	

		
}
