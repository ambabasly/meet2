import React, { Component } from 'react';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import { WarningAlert } from './Alert';
import WelcomeScreen from './WelcomeScreen';
import EventGenre from './EventGenre';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
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
      this.setState({
        warningText: 'Warning: the events you are viewing may no longer be current. To ensure you see the latest information, make sure you are connected to the internet'
      }); 
    } else {
      this.setState({
        warningText: '',
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

  getData = () => {
    const {locations, events} = this.state;
    const data = locations.map((location)=>{
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return {city, number};
    })
    return data;
  };

  render() {
    if (this.state.showWelcomeScreen === undefined)
    return <div className='App' /> 
    const { locations,  numberOfEvents } = this.state;
    
    return (
      <div className="App">
        <h1>Meet App</h1>
        <h4>Search for Upcoming Events for Full-Stack Developers Around the World</h4>
        <WarningAlert text={this.state.warningText} />
        <CitySearch locations={locations} updateEvents={this.updateEvents}/>
        <NumberOfEvents numberOfEvents={numberOfEvents} 
          updateEventCount={this.updateEventCount}/>
        <div className="data-vis-wrapper">
        <EventGenre events={this.state.events} />
        <ResponsiveContainer height={400} >
        <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <CartesianGrid />
          <XAxis type="category" dataKey="city" name="city" 
          label={{ value: 'city', position: 'insideBottomCenter', dy: 20 }}/>
          <YAxis allowDecimals={false} 
          type="number" dataKey="number" name="number of events" 
          label={{ value: 'number of events', angle: -90, position: 'insideLeft' }}/>
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter data={this.getData()} fill="#8884d8" />
        </ScatterChart>
        </ResponsiveContainer>
        </div>
        <EventList events={this.state.events}/>
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen} 
          getAccessToken={() => {getAccessToken() }} />
      </div>
    );
  }
}

export default App;