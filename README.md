#  @ School Mobile #

[![License](https://img.shields.io/badge/License-MIT-orange.svg)](https://github.com/at-school/spa/license)
[![](https://img.shields.io/badge/Version-Beta%200.1.0-brightgreen.svg)](atschool.live)

#### Future Plans: ####
* 0.1.1 Release - Improved UX and UI to make facial upload easier for consumers. Will fill in the currently empty Dashboard with updates from classes, aswell as add a sibebar with access to classroom routes.
* 0.1.2 Release - Working direct and thread messaging system with real time messaging using web sockets as well as an integrated email route.
* 0.2.x Release - After employing beta testers, improve UX and UI to make design seamless.

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

1. Go to https://snack.expo.io/@anhanhvina/github.com-at-school-mobile

2. In the right nav bar under the project click on `./api/ips.js`

3. Open terminal and run:
	1. `python3`
	2. `>>> import socket`
	3. `>>> socket.gethostbyname(socket.gethostname())`
	4. save the output *ip address*

4. Paste the ip address from step 2 into line one *ip* variable of  the `./api/ips.js` file.

5. click save in the top right hand corner of the screen

6. click run on the top nav

	<img src="./imgs/expo.gif"></img>

7. Install the Expo Client on the [app store](https://itunes.apple.com/us/app/expo-client/id982107779?mt=8) or [Android store](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_AU) on any mobile device. Create and account and sign in.

8. Once Logged into the application navigate to the Projects screen and save the id at the bottom of the screen

	<img style="width: 200px" src="./imgs/code.png"></img>

9. Now click the link under *Recently in Development*

	<img style="width: 200px" src="./imgs/link.png"></img>

:open_mouth: Wow! Now you can test the coolest app make by school students.
