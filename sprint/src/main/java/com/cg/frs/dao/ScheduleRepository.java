package com.cg.frs.dao;
/*
 * Author Surya
 */
import java.math.BigInteger;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cg.frs.dto.Schedule;

public interface ScheduleRepository extends JpaRepository<Schedule,BigInteger> {

}
