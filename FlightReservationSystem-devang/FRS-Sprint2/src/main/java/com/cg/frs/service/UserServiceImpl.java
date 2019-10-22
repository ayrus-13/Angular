package com.cg.frs.service;

import java.math.BigInteger;
import java.util.List;
import java.util.regex.Pattern;

import com.cg.frs.dao.UserDao;
import com.cg.frs.dao.UserDaoImpl;
import com.cg.frs.dto.User;
import com.cg.frs.exception.FRSException;

public class UserServiceImpl implements UserService{
	
	UserDao userDao=new UserDaoImpl();
	
	public User addUser(User user) {
		return userDao.addUser(user);
	}
	
	public List<User> viewUser() {
		return userDao.showUser();
	}
	
	public User viewUser(BigInteger userId)	{
		List<User> userList=userDao.showUser();
		for(User user: userList) {
			if(user.getUserId().equals(userId)) {
				return user;
			}
		}
		return null;
	}
	
	public User updateUser(User user) {
		return userDao.addUser(user);
	}
	
	public boolean deleteUser(BigInteger user) {
		return userDao.removeUser(user);
	}

	@Override
	public BigInteger validateUserWithId(BigInteger userId) throws FRSException {
		if(viewUser(userId).equals(null))
			throw new FRSException("Invalid User Id.");
		return userId;
	}

	@Override
	public BigInteger validateCustomerWithId(BigInteger userId) throws FRSException {
		if(viewUser(userId).equals(null))
			throw new FRSException("Invalid User Id.");
		if(!(viewUser(userId).getUserType().equalsIgnoreCase("customer")))
			throw new FRSException("Unable to Access.");
		return userId;
	}

	@Override
	public BigInteger validateAdminWithId(BigInteger userId) throws FRSException {
		if(viewUser(userId).equals(null))
			throw new FRSException("Invalid User Id.");
		if(!(viewUser(userId).getUserType().equalsIgnoreCase("admin")))
			throw new FRSException("Unable to Access.");
		return userId;
	}

	@Override
	public boolean validatePhoneNumber(BigInteger phoneNo) throws FRSException {
		String userPhone=phoneNo.toString();
		char firstPhoneDigit=userPhone.charAt(0);
		if(userPhone.length()!=10 || firstPhoneDigit=='1' || firstPhoneDigit=='2' || firstPhoneDigit=='3' || firstPhoneDigit=='4' || firstPhoneDigit=='5')
			throw new FRSException("Invalid Phone Number.");
		return true;
	}

	@Override
	public boolean validateEmail(String email) throws FRSException {
		String emailRegex = "^[a-zA-Z0-9_+&*-]+(?:\\."+"[a-zA-Z0-9_+&*-]+)*@" +"(?:[a-zA-Z0-9-]+\\.)+[a-z" +"A-Z]{2,7}$";
		Pattern pattern=Pattern.compile(emailRegex);
		if(!pattern.matcher(email).matches())
			throw new FRSException("Invalid Email Address.");
		return true;
	}

}
