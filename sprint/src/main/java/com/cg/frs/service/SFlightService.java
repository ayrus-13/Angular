package com.cg.frs.service;
/*
 * Author Surya
 */
import java.math.BigInteger;
import java.time.LocalDateTime;
import java.util.List;

import com.cg.frs.dto.Airport;
import com.cg.frs.dto.ScheduleFlight;
import com.cg.frs.exception.FrsException;

public interface SFlightService {
	
	public ScheduleFlight addScheduleFlight(ScheduleFlight scheduleflight);
	
	public List<ScheduleFlight> viewScheduleFlights(Airport source, Airport destination, LocalDateTime flightDate) throws FrsException;
    
	public ScheduleFlight viewScheduleFlights(BigInteger flightId) throws FrsException;
    
	public List<ScheduleFlight > viewScheduleFlight();
    
	public ScheduleFlight modifyScheduleFlight(ScheduleFlight scheduleFlight);
    
	public boolean deleteScheduleFlight(BigInteger flightId) throws FrsException;
	
}