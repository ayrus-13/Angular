<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@taglib prefix="fo" uri="http://www.springframework.org/tags/form" %>    
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<fo:form action="doadd" method="post" modelAttribute="my">
Product Id<fo:input path="prodId"/><br/>
Product Name<fo:input path="prodName"/><br/>
Product Cost<fo:input path="prodCost"/><br/>
<input type="submit"  value="Add Product">
</fo:form>
</body>
</html>