﻿# GoodRx

link: https://tomergev.github.io/goodrx/

I had a great time making this small project and I am looking forward for your feedback to the assignment. I just wanted to go over a few decisions I made while creating this project here in the readme

## File Structure

```
├───components
│   ├───Button
│   ├───NavBar
│   └───PharmacyView
│       ├───FilterPharmacies
│       ├───LocationSearchBar
│       └───PharmacyList
├───services
└───utils
```

I decided to keep the file structure extremely simply for readability purposes and because the scope thie assignment is fairly small. Each directory located within the component's directory contains an index.js file and a [directory-name].css file. 

The services directory contains all logic dealing with external API's (the Geolocation API & the /pharmacies API). The utils directory contains a pure JavaScript utility function which creates a query string based off of an argument of an array of objects. 

## Implementation of the /pharmacies and Geolocation API Calls

I wanted to discuss my implementation of the /pharmacies and Geolocation API calls because there are some techniques which I believed I could have used to make these API calls more effective, but I believe that they were outside the scope of the current project. 

1. Currently, every-time a user checks or unchecks a checkbox, I am making an API call to the server with the corresponding chain_ids. Instead, I would have rather simply filtered over the pharmacies which is fetched depending on the user's location or an address / zip code which the user inputs. However, the individual pharmacy object didnt contain the chain_id as a property. If the chain_id was a property in the individual pharmacy object, I would have filtered over the pharmacies and displayed the filtered pharmacies in this manner as opposed to making repeated calls to the api. 

2. The flow for what would occur if a user did not allow their browser to know their location was also not outlined in the assignment. If a user does not allow the browser to know their location, I currently dont display the "My Location: lat, lng" which is located under the address/zip code search bar. 

3. In my implementation, I am not handling errors which may occur from the /pharmacies or Geolocation API. This was not explicitly required in the scope of the project so I decided not to implement it in order to focus on other required aspects of the assignemnt.  

## Bonus

I chose to do the Themable CSS bonus point. In the app.js folder located in the src directory, you can change the value of the context provider by change which property is passed from the themes object (either theme.default or theme.bonus). 

## Styling

I tried extremely hard to make all features of the application look exactly like they are in the mock-ups, but there are nonetheless still a few small differences between the mock-up and my finished product. I am aware of these minor discrepancies and therefore I am very eager to hear any feedback which you will have on how I can improve my styling in the future. Also, for the search bar icon, I used a font awesome icon which I imported via a link tag in the index.html file. This was the only external resource I used in the completion of this assignment 

## Conclusion

I had a great time accomplishing this small project and I am greatly looking forward for your feedback. I tried to follow each instruction to the letter and I hope that I fulfilled all of them to your liking. 
