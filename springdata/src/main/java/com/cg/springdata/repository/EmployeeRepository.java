package com.cg.springdata.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.cg.springdata.dto.Employee;

public interface EmployeeRepository extends JpaRepository<Employee,Integer> {
	//SELECT * from EMPLOYEE WHERE name="eeee"
	public Employee findByEmpName(String empName);
  //SELECT * from Employee where emp_salary=salary
  public Employee findByEmpSalary(Double salary);
  
 // @Query("FROM EMPLOYEE WHERE empSalary BETWEEN :min AND :max")
  //public List<Employee> salaryBetween(@Param("min")Double min,@Param("max") Double max);
  //SELECT * from employee where emp_salary=77 AND emp_name="oo"
  Employee findByEmpSalaryAndEmpName(double sal,String name);
}
