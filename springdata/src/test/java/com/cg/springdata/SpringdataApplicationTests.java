package com.cg.springdata;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertEquals;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.test.context.junit4.SpringRunner;

import com.cg.springdata.dto.Employee;
import com.cg.springdata.service.EmployeeService;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
public class SpringdataApplicationTests {
	@Autowired
	TestRestTemplate restTemplate;
	@Autowired
	EmployeeService service;
	
	@Test
	public void testUrls() {
		String str=restTemplate.getForObject("/all", String.class);
		assertThat(str.contentEquals("Capgemini"));
	}
	
	@Test
	public void testUrl() {
		Employee str=restTemplate.getForObject("/addemployee", Employee.class);
		assertThat(str);
	}
	@Test
	public void checkAllData() {
		assertEquals(4,service.findAllEmployee().size());
	}
	@Test
	public void checkAllDat() {
		Employee emp=service.findName("fghf");
		assertEquals("fghf",emp.getEmpName());
	}


}
