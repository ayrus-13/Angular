package com.cg.springdata.service;

import java.util.List;

import com.cg.springdata.dto.Employee;

public interface EmployeeService {

	public Employee saveEmployee(Employee emp);
	public List<Employee> findAllEmployee();
	public Employee findName(String name);
	
}
