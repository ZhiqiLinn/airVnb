# About AirVnb:
AirVnb is a web application inspired by Airbnb, that provides an online marketplace for lodging, primarily homestays for vacation rentals, and tourism activities. 
[Click here to view AirVnb Live Site](http://airvnb-project.herokuapp.com)

**Please see below links to project Wiki:**\
[Feature List](https://github.com/ZhiqiLinn/airVnb/wiki/Feature-List)\
[Database Schema](https://github.com/ZhiqiLinn/airVnb/wiki/Database-Schema)\
[Frontend Routes](https://github.com/ZhiqiLinn/airVnb/wiki/Frontend-Routes)\
[API Routes](https://github.com/ZhiqiLinn/airVnb/wiki/API-Documentation)\
[Redux Store State Shape](https://github.com/ZhiqiLinn/airVnb/wiki/Redux-State-Shape)

**This project is built with:**\
JavaScript\
PostgreSQL\
Sequelize\
Express\
React\
Redux



# Features Directions: #


## Home Page Demo User: ##

You will be able to test the features without sign up by click on the "Demo User" button.

![homePageDemo](https://user-images.githubusercontent.com/90532956/176979125-8de8ffd5-5a54-46af-8e61-29c36c8dcbfc.gif)


## Signup & Login: ##

You will be able to sign up and log in.

![signupLoginDemo](https://user-images.githubusercontent.com/90532956/176979568-7f8ce50f-df46-47ba-9eba-1bc4204044f3.gif)


## Create Your Own Listing: ##

You will be able to create a listing by click on the "Become a Host" button on the navigation bar.

![createListing (2)](https://user-images.githubusercontent.com/90532956/176980425-348dc626-c470-4d68-8592-ce68f410ea3f.gif)


## Edit and Delete Your Own Listing: ##

You will be able to see an owner action section to edit and delete your own listing. 

You will not be able to see this section if you are not the owner for this listing.

![editListing](https://user-images.githubusercontent.com/90532956/176980560-3a71427d-b091-4ca6-a3f4-60ec6ff0dead.gif)

## Reserve Your Own Booking: ##

You will be able to reserve a booking inside the listing detail page.

![reserveBooking](https://user-images.githubusercontent.com/90532956/176980855-41102482-721e-465e-a479-7ef5114f44ec.gif)

## Edit and Delete Your Own Booking: ##

You will be able to edit and delete your bookings in your bookings page.

![editDeleteBooking](https://user-images.githubusercontent.com/90532956/176980927-64fe519b-34dc-49f6-816b-73d4ad76f66b.gif)



# Challenges : #


**Planning Process:**

When I first started designing my  API routes and Frontend Routes, only some basic routes for each feature were created. After went through AirBnB a couple more times, I realized one of the most important aspects on developing a web application was missing: **THE USER'S DEMANDS!!!**. I first designed it based on a student aspect, who is trying to complete a nice perfect web development project. However, after I started to re-evaluate this website from a user aspect, I listed down everything that a user wanted to see on the navigation bar,  feature pages, and user profile menu, as well as considered the connections between each route, such as where should I place this button to make it clear and easy to navigate for a user? Where can a user see their own bookings?  An example change I made to the route is that I changed the bookings detail route from "/users/:userId/bookings/:bookingId" to "/users/bookings". I eliminated the user id because there is no need to define a user's id in the frontend route, the only user profile that a user wants to see at any time will be the session user's profile who is currently logged in. I also eliminated the booking's id because I want a user to be able to view, edit and delete everything on the same page without redirecting to another page since the site doesn't have too much information about booking, an extra route will be unnecessary. This planning process allowed me to be able to comprehensively think about an idea from multiple aspects (both user's aspect and the designer's aspect). It also allowed me to concentrate on coding step by step without making huge changes that might possibly affect my other codes or routes. I would say this is a very important fundamental part to succeed in any project.
	

