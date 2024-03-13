# Frontend Mentor - Rock, Paper, Scissors solution

This is my solution to the [IP Address Tracker](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0) challenge. 

### The challenge

The challenge is to create a responsive web application which can take IP addresses as an input and does two things with two different API's:
1. Send the IP addresses through API to gather more information (Approximate location, ISP, Timezone and Cordinates) and display that information.
2. Takes the cordinates and pinpoits them on a generated LeafletJS map.

Users should be able to:

- On page load, automatically shows the user detailed IP information and it's location on the map.
- Enter any IP Address.
- Gather more information about the entered IP from the API. I used the [IP Geolocation API by IPify](https://geo.ipify.org/) for the detailed the IP address information.
- See that information, and the approximate cordinates pinpointed on the map. I used [LeafletJS](https://leafletjs.com/) API for the generation of the map.
- *Bonus* - I also added a Layer/Terrain option menu, from which the user can change the skin of the Layer/Terrain of the map. There are three skins available: Streets, Topo, Sattelite

### Links

- Live Site URL on which you can check out the project: https://adrianptrv.github.io/IP_address_tracker_FE_Mentor

## My process

1. Analyze the provided design pictures and build the HTML structure.
2. Add all of the CSS styles through SCSS, and make the website responsive.
3. Integrate the API's and add all of the page functionalities with jQuery and JavaScript.

### Built with

- HTML
- SCSS
- JavaScript
- jQuery

### Screenshots


| Mobile layout                                                                                                                   | Desktop layout                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| <img src="https://github.com/adrianptrv/IP_address_tracker_FE_Mentor/assets/99720888/79e57068-a8ac-4113-8094-e993a4032041"  />  | <img src="https://github.com/adrianptrv/IP_address_tracker_FE_Mentor/assets/99720888/73237bd8-7acb-4f0c-a99d-1d827f369ab1" />  |


