package com.cg.springdata.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cg.springdata.dto.Employee;
import com.cg.springdata.service.EmployeeService;

@RestController
public class EmployeeController {
	@Autowired
	EmployeeService employeeservice;
	
	@PostMapping(value="/addemployee")
	public ResponseEntity<Employee> addData(@ModelAttribute Employee emp){
		Employee empS=employeeservice.saveEmployee(emp);
		System.out.println(employeeservice.findName("eeee"));
		if(empS==null) {
			return new ResponseEntity("Data not added",HttpStatus.INTERNAL_SERVER_ERROR);
		}else {
		return new ResponseEntity<Employee>(empS,HttpStatus.OK);
		}}
	
	@GetMapping(value="/showdata")
	public ResponseEntity<List<Employee>> getAllData(){
		
		List<Employee> empS=employeeservice.findAllEmployee();
		if(empS.isEmpty()) {
			return new ResponseEntity("No Data Present",HttpStatus.INTERNAL_SERVER_ERROR);
		}else {
		return new ResponseEntity<List<Employee>>(empS,HttpStatus.OK);
		}}
	@GetMapping(value="/all")
	public String getAll() {
		return "Capgemini";
	}
		
	}


