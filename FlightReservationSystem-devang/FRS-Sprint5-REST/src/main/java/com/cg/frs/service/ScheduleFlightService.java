package com.cg.frs.service;

import java.math.BigInteger;
import java.time.LocalDate;
import java.util.List;

import com.cg.frs.dto.Airport;
import com.cg.frs.dto.ScheduleFlight;
import com.cg.frs.exception.FlightNotFoundException;
import com.cg.frs.exception.FrsException;
import com.cg.frs.exception.InvalidBookingException;

public interface ScheduleFlightService {
	
	public ScheduleFlight addScheduleFlight(ScheduleFlight scheduleflight);
	
	public List<ScheduleFlight> viewScheduleFlights(Airport source, Airport destination, LocalDate flightDate) throws FlightNotFoundException;
    
	public ScheduleFlight viewScheduleFlights(BigInteger flightId) throws FrsException;
    
	public List<ScheduleFlight > viewScheduleFlight();
    
	public ScheduleFlight modifyScheduleFlight(ScheduleFlight scheduleFlight);
    
	public boolean deleteScheduleFlight(BigInteger flightId) throws FrsException;
	
	public boolean cancelBookings(BigInteger flightId)throws InvalidBookingException;
	
}

