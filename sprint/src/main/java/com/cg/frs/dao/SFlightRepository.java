package com.cg.frs.dao;
/*
 * Author Surya
 */
import java.math.BigInteger;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cg.frs.dto.ScheduleFlight;


public interface SFlightRepository extends JpaRepository<ScheduleFlight,BigInteger> {

		
}