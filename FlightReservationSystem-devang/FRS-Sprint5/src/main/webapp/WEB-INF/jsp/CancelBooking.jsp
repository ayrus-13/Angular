<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html lang="en-US">

<head>
<title>Cancel Booking</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial scale=1">
<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
<script
	src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons"
	rel="stylesheet">
<style type="text/css">
html, body {
	background-color: #eeeeee;
	height: 100%;
	margin: 0;
}

.wrapper {
	min-height: 100%;
	margin-bottom: -50px;
}

footer {
	height: 50px;
}

a {
	color: #212121;
}

.brand-logo {
	margin-left: 20px;
}

.card {
	margin-top: 10vh;
}

.input-field {
	margin-top: -5px;
}
</style>
</head>

<body>

	<!-- Header -->
	<jsp:include page="UserHeader.jsp"></jsp:include>
	<!-- Header -->

	<div class="wrapper">
		<div class="container">
			<div class="jumbotron text-center">
				<h1>Cancel your Booking</h1>
				<p>Enter your Booking Id</p>
			</div>
			<div class="row text center">
				<form:form action="/booking/cancelview" method="GET">
					<div class="input-field col s6">
						<input id="id" type="number" class="validate" name="booking_id"
							value="${booking.bookingId}"> <label class="active">Booking
							Id:</label>
						<button class="btn waves-effect waves-teal open-button col s6"
							type="submit">
							Search <i class="fa fa-search"></i>
						</button>
					</div>
				</form:form>
			</div>
		</div>
		<div class="row" id="viewBox">
			<div class="card col s4 offset-s4 center">
				<form:form action="/booking/confirmcancel" method="POST">
					<div class="row">
						<ul class="collection with-header">
							<li class="collection-item">
								<div class="row">
									<br>
									<div class="input-field col s12">
										<input name="booking_id" id="booking_id" type="number"
											class="validate" value="${booking.bookingId}" readonly></input>
										<label for="booking_id">Booking Id</label>
									</div>
									<div class="input-field col s12">
										<input id="booking_date" type="datetime-local"
											class="validate" value="${booking.bookingDate}" readonly></input>
										<label for="booking_date">Booking Time</label>
									</div>
									<div class="input-field col s12">
										<input id="ticket_cost" type="number" class="validate"
											value="${booking.ticketCost}" readonly></input> <label
											for="ticket_cost">Ticket Cost</label>
									</div>
									<div class="input-field col s12">
										<input id="flight_number" type="number" class="validate"
											value="${booking.getScheduleFlight().getScheduleFlightId()}"
											readonly></input> <label for="ticket_cost">Ticket
											Cost</label>
									</div>
									<br> <input type="submit" value="Confirm"
										class="waves-effect waves-light btn-large"></input>
								</div>
							</li>
						</ul>
					</div>
				</form:form>
			</div>
		</div>
	</div>
	<!-- Footer -->
	<jsp:include page="Footer.jsp"></jsp:include>
	<!-- Footer -->

	<script>
		
	</script>
</body>
</html>