#  @ School Mobile #

[![License](https://img.shields.io/badge/License-MIT-orange.svg)](https://github.com/at-school/spa/license)
[![](https://img.shields.io/badge/Version-Beta%200.1.0-brightgreen.svg)](atschool.live)

#### Future Plans: ####
* 0.1.1 Release - Improved UX and UI to make facial upload easier for consumers. Will fill in the currently empty Dashboard with updates from classes, aswell as add a sibebar with access to classroom routes.
* 0.1.2 Release - Working direct and thread messaging system with real time messaging using web sockets aswell as an integrated email route.
* 0.2.x Release - After emplying beta testers, improve UX and UI to make design seamless.

Welcome to **@ School**'s single web app **Beta**!

This will be updated every time a new beta is released. It is here to show core functionalities, progress and our adherence to time line for anyone wanting to support or contribute to the project. If you are interested in supporting the project, please contact one of our [team members]('https://atschool.live/about/team').

If you are interested in viewing our weekly progress please take a look at our weekly [blog posts](https://atschool.live/blog).

## Features ##

* Upload Route
	* Student users able to upload pictures, which is sent to the server in base64 to be used to feed our facial recognition model.
* Message Route
	* Loads 'mock' data with instantaneous loading times.
* Socket IO integration to update data real time.

### Expectations ###
With the Mobile app we had planned to have the ability to create and edit classrooms from a teachers account and be able to upload and view students marks and reports. Neither of these features were able to be functionally implemented before the beta release. This was due to time constraints and the reviewed importance of each feature.

Instead of focusing our attention evenly among the web and mobile app, we chose to focus primarily on the Web application. Once the Web application is running, we will have a viable product that is available in the market more soon. The core functionalities will also be finished, therefore, making the Mobile application easier to implement.

Instead of reinventing features already in the Web app we decided to implement the only essential feature, the ability to upload student photos to the database in the absence of a webcam.

Time that would have been otherwise spent re-implementing features in the mobile app was spent creating a mail application capable of connecting to a students Gmail account. This [mail application](http://github.com/Charlkie) was [documented](https://atschool.live/blog/post/00001) although not planned to be worked on before the release of the beta.

## Documentation

> Before running Mobile application be sure to run the [server](https://github.com/at-school/sever)

1. `cd Mobile/api/auth.js`

2. Change the IP addresses in lines **2** and **16** `https://<yourIPaddress>/auth/signin`
3. `cd Mobile/api/camera.js`
4. Change the IP addresses in lines **2** `https://<yourIPaddress>/camera/save`
5. Now in order to test to mobile application you will need to create an account with [Expo](https://expo.io/)
6. Install the expo app on any mobile device and sign in\
7. run `npm install -g expo-cli`
8. cd to `Mobile/` and run `yarn start`
	<!-- <div style="width:50%">
		<img src="https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg" alt="">
	</div> -->
9. Now with you phone either follow the **link** or **QR code** provided in the terminal,and follow the instructions provided.

:open_mouth: Wow! Now you can test the coolest beta on GitHub.
