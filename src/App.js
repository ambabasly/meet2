import React, { Component } from 'react';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
// eslint-disable-next-line
import { WarningAlert } from './Alert';
import WelcomeScreen from './WelcomeScreen';
import './App.css';
import './nprogress.css';


class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    currentLocation: 'all',
    warningText: '',
    showWelcomeScreen: undefined
  }

  componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get('code');
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ 
          events: events.slice(0, this.state.numberOfEvents), 
          locations: extractLocations(events) 
        });
      }
    });
    if(!navigator.onLine) {
      console.log('online');
      this.setState({
        warningText: 'No connection.',
      });
    } else {
      console.log('warning');
      this.setState({
        warningText: 'You are currently offline',
      });
    }
  }
}

  componentWillUnmount(){
    this.mounted = false;
  }

  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
      const { numberOfEvents } = this.state;
      this.setState({
        events: locationEvents.slice(0, numberOfEvents),
        currentLocation: location
      });
    });
  }

  updateEventCount = (eventCount) => {
    const { currentLocation } = this.state;
    this.setState({
      numberOfEvents: eventCount
    });
    this.updateEvents(currentLocation, eventCount);
  }

  render() {
    if (this.state.showWelcomeScreen === undefined)
    return <div className='App' /> 
    const { locations, events, numberOfEvents } = this.state;
    
    return (
      <div className="App">
        <warningAlert text={this.state.warningText} />
        <CitySearch 
          locations={locations} 
          updateEvents={this.updateEvents}
        />
        <NumberOfEvents  
          numberOfEvents={numberOfEvents} 
          updateEventCount={this.updateEventCount}
        />
        <EventList 
          events={events}
        />
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen} getAccessToken={() => {
          getAccessToken() }} />
      </div>
    );
  }
}

export default App;