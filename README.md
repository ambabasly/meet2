# Project Name
**Meet-APP**

## Built With
- React

## Getting Started
**A serverless PWA using Create React App that can display and filter meetup events from the Google calender API. It is developed using Test-Drive-Development techniques to ensure a high test coverage rate..**

# Main view

### Key Features:
- Filter events by city.
- Show/hide event details.
- Specify number of events.
- Use the app when offline.
- Add an app shortcut to the home screen.
- View a chart showing the number of upcoming events by city.

### User Stories
- As a user, I would like to be able to filter events by city so that I can see the list of events that take place in that city.
- As a user, I would like to be able to show/hide event details so that I can see more/less information about an event.
- As a user, I would like to be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once.
- As a user, I would like to be able to use the app when offline so that I can see the events I viewed the last time I was online.
- As a user, I would like to be able to add the app shortcut to my home screen so that I can open the app faster.
- As a user, I would like to be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.


### Test Scenarios:
- **Featured 1: FILTER EVENTS BY CITY**
### As a user:
**I should be able to “filter events by city” So that I can see the list of events that take place in that city**

- Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.
- Scenario 2: User should see a list of suggestions when they search for a city.
- Scenario 3: User can select a city from the suggested list.

- **Given/When/Then:**
- Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.
- Given user hasn’t searched for any city
- When the user opens the app
- Then the user should see a list of all upcoming events

- Scenario 2: User should see a list of suggestions when they search for a city.
- Given the main page is open
- When user starts typing in the city textbox
- Then the user should see a list of cities (suggestions) that match what they’ve typed

- Scenario 3: User can select a city from the suggested list.
- Given the user was typing “Berlin” in the city textbox
- And the list of suggested cities is showing
- When the user selects a city (e.g., “Berlin, Germany”) from the list
- Then their city should be changed to that city (i.e., “Berlin, Germany”)
- And the user should receive a list of upcoming events in that city
- list of upcoming events in that city


- **FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS**
### As a user:
**I should be able to “Show/hide an event's details” So that I can read details about an event and hide it afterwards**

- Scenario 1: An event element is collapsed by default
- Scenario 2: User can expand an event to see its details
- Scenario 3: User can collapse an event to hide its details


**Given/When/Then:**
- Scenario 1: An event element is collapsed by default
- Given user is on the main page
- When user select and event
- Then the event element collapsed by default

- Scenario 2: User can expand an event to see its details
- Given the user clicks on an event element
- When the element expands
- Then the details of the event element should be displayed

- Scenario 3: User can collapse an event to hide its details
- Given the the details of an event element is showing  
- When the user clicks on the event element again
- Then the event element should collapse, hiding event details 


**FEATURE 3: SPECIFY NUMBER OF EVENTS**
### As a user:
**I would like to be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once.**

- Scenario 1: When user hasn’t specified a number, 32 is the default number
- Scenario 2: User can change the number of events they want to see

**Given/When/Then:**
- Scenario 1: When user hasn’t specified a number, 32 is the default number
- Given the user opens the app
- When the user sees the elements
- Then 32 events should be displayed

- Scenario 2: User can change the number of events they want to see
- Given user open the app
- When : the user specify the number of events
- Then the numbers of events should be displayed


**FEATURE 4: USE THE APP WHEN OFFLINE**
### As a user:
### I should be able to “use the app when offline” So that I can access the cached data when there is no internet connection

- Scenario 1: Show cached data when there’s no internet connection
- Scenario 2: Show error when user changes the settings (city, time range

**Given/When/Then:**
- Scenario 1: Show cached data when there’s no internet connection
- Given a user has no internet connection
- When user accesses the app
- Then cached data should be accessible

- Scenario 2: Show error when user changes the settings (city, time range).
- Given  user has no internet connection and has access to the cached data
- When user changes the city and time range settings
- Then an error message should be displayed


**FEATURE 5: DATA VISUALIZATION**
### As a user:
**I should be able to “visualise event data” So that I can see a chart of the numbers of upcoming events in each city**

- Scenario 1: Show a chart with the number of upcoming events in each city

**Given/When/Then:**
- Scenario 1: Show a chart with the number of upcoming events in each city.
- Given a user wants to know upcoming events
- When a user clicks on upcoming events button
- Then charts showing the numbers of upcoming events should be displayed

  ### dependencies
- @testing-library/jest-dom
- @testing-library/react
- @testing-library/user-event
- react
- react-dom
- react-scripts
- web-vitals
- workbox-background-sync
- workbox-broadcast-update
- workbox-cacheable-response
- workbox-core
- workbox-expiration
- workbox-google-analytics
- workbox-navigation-preload
- workbox-precaching
- workbox-range-requests
- workbox-routing
- workbox-strategies
- workbox-streams
