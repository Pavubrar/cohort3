import React, { Component } from 'react';
import './CitiesApp.css';
import { CreateCityForm } from "CityForm";
import { Community } from './cities';
import serverFunctions from './serverFunctions.js';
import CityServer from 'CityServer';
import CityComponent from './CityComponent.js';
import CityPoint from './CityPoint';

class CitiesApp extends Component {
    constructor() {
        super();
        this.state = {
            totalPopulation: "",
            mostNorthern: "",
            mostSouthern: "",
            formMessage: "",
            fetchMessage: "",
            selectedCity: ""
        }
        this.province = new Community([])
    }
    componentDidMount = async () => {
        const errorMessage = await serverFunction.loadData(this.province);
        if (errorMessage) {
            this.showfetchMessage(errorMessage);
        } else if (this.province.cityList.length < 1) {
            this.showfetchMessage("Warning: server database is empty.")
        } else {
            this.calcReport()
        }
    }
    addCity = async (inputs) => {
        const { nameInput, latInput, longInput, popInput } = inputs;
        if (!nameInput) {
            this.setState({
                formMessage: "Please enter a city name."
            });
        } else {
            this.setState({
                formMessage: ""
            });
            const key = this.province.creatCity(key, nameInput, latInput, longInput, popInput)
            const errorMessage = await serverFunctions.addData(newCity);
            if (errorMessage) {
                this.province.deleteCity(key);
                this.showfetchMessage(errorMessage);
            } else {
                this.calcReport();
            }
        }
    }
    removeCity = async (key) => {
        const errorMessage = await serverFunctions.deleteData(key);
        if (errorMessage) {
            this.showfetchMessage(errorMessage);
        } else {
            this.province.deleteCity(key);
            this.setState({
                selectedCity: ""
            });
            this.calcReport();
        }
    }
    showfetchMessage = (message) => {
        this.setState({
            fetchMessage: message
        });
    }
    calcReport = () => {
        this.setState({
            totalPopulation: ""
        })
        if (this.province.cityList.length > 1) {
            document.getElementById("idCityReport").classList.remove("hidden");

            const mostNorth = this.province.getMostNorthern();
            const mostSouth = this.province.getMostSouthern();

            const totalPopulationUpdate = this.province.getPopulation();
            const mostNorthernUpdate = `${mostNorth.name} at ${mostNorth.lat} latitude`;
            const mostSouthernUpdate = `${mostSouth.name} at ${mostSouth.lat} latitude`;

            this.setState({
                totalPopulation: totalPopulationUpdate,
                mostNorthern: mostNorthernUpdate,
                mostSouthern: mostSouthernUpdate
            });
        } else {
            document.getElementById("idCityReport").classList.add("hidden");
        }
        onSelectPoint = event => {
            const selectedPointKey = Number(event.target.attributes.keyid.value);
            const newSelectedCity = this.province.getCity(selectedPointKey);
            this.setState({
                selectedCity: newSelectedCity
            });
        }
        renderPoints = () => {
            return this.province.cityList.map(city => {
                return <CityPoint
                    key={city.key}
                    keyID={city.key}
                    city={city}
                    calcReport={this.calcReport}
                    removeCity={this.removeCity}
                    classNames={this.state.selectedCity.key === city.key ? "city-point city-selected" : "city-point"}
                    onClick={this.onSelectPoint} />
            })
        }
        renderTools = () => {
            if (this.state.selectedCity) {
                return <CityServer
                    key={this.state.selectedCity.key} //***When a key changes, React will create a new component instance
                    city={this.state.selectedCity}
                    calcReport={this.calcReport}
                    removeCity={this.removeCity}
                    showFetchMessage={this.showFetchMessage}
                />
            } else {
                return null;
            }
        }
    }
    render(){
    return (
    < CityComponent 
    addCity={this.addCity}
    renderTools={this.renderTools}
    renderPoints={this.renderPoints}
    data ={this.state}/>
    
    )
}
}
export default CitiesApp;