package com.cg.frs.service;
/*
 * Author Surya
 */
import java.math.BigInteger;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.frs.dao.SFlightRepository;
import com.cg.frs.dao.ScheduleRepository;
import com.cg.frs.dto.Airport;
import com.cg.frs.dto.Schedule;
import com.cg.frs.dto.ScheduleFlight;
import com.cg.frs.exception.FrsException;
@Service("scheduleflightservice")
public class SFlightServiceImpl implements SFlightService{
	@Autowired
	SFlightRepository sflightRepository;
	@Autowired
	ScheduleRepository sRepository;

	@Override
	public ScheduleFlight addScheduleFlight(ScheduleFlight scheduleflight) {
		return sflightRepository.save(scheduleflight);
	}
	
	@Override
	public List<ScheduleFlight> viewScheduleFlights(Airport source, Airport destination, LocalDateTime flightDate) throws FrsException{
		List<ScheduleFlight> scheduleFlightList= sflightRepository.findAll();
		List<ScheduleFlight> scheduleFlightList2 = null;
		if(source==null | destination==null | flightDate==null)
			throw new FrsException("Enter complete details");
		for(ScheduleFlight scheduleFlight : scheduleFlightList) {
			if(scheduleFlight.getSchedule().getSourceAirport().equals(source) && scheduleFlight.getSchedule().getDestinationAirport().equals(destination) && scheduleFlight.getSchedule().getDepartureDateTime().equals(flightDate))
				scheduleFlightList2.add(scheduleFlight);				
		}
		if(scheduleFlightList2==null)
			throw new FrsException("No available Flights on requested details");
		else
			return scheduleFlightList2;
	}

	@Override
	public ScheduleFlight viewScheduleFlights(BigInteger flightId) throws FrsException {
		if(flightId==null)
			throw new FrsException("Enter flight Id");
		ScheduleFlight scheduleFlight=sflightRepository.getOne(flightId);
		if(scheduleFlight==null)
			throw new FrsException("Enter a valid Flight Id");
		else
			return scheduleFlight;
	}

	@Override
	public List<ScheduleFlight> viewScheduleFlight() {
		return sflightRepository.findAll();
	}

	@Override
	public ScheduleFlight modifyScheduleFlight(ScheduleFlight scheduleFlight) {
		ScheduleFlight updateScheduleFlight = sflightRepository.getOne(scheduleFlight.getScheduleFlightId());
		Schedule updateSchedule = sRepository.getOne(scheduleFlight.getSchedule().getScheduleId());
		updateScheduleFlight.setAvailableSeats(scheduleFlight.getAvailableSeats());
		updateScheduleFlight.setTicketCost(scheduleFlight.getTicketCost());
		updateSchedule.setSourceAirport(scheduleFlight.getSchedule().getSourceAirport());
		updateSchedule.setDestinationAirport(scheduleFlight.getSchedule().getDestinationAirport());
		updateSchedule.setArrivalDateTime(scheduleFlight.getSchedule().getArrivalDateTime());
		updateSchedule.setDepartureDateTime(scheduleFlight.getSchedule().getDepartureDateTime());
		return scheduleFlight;	
		}

	@Override
	public boolean deleteScheduleFlight(BigInteger flightId) throws FrsException {
 		if(flightId==null)
			throw new FrsException("Enter flight Id");
		ScheduleFlight scheduleFlight=sflightRepository.getOne(flightId);
		if(scheduleFlight==null)
			throw new FrsException("Enter a valid Flight Id");
		else
			sflightRepository.deleteById(flightId);
		
		return false;
	}

}
