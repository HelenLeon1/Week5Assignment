/*
*The Countries Menu App helps users create different itineraries for different vacation destination.
*Inside of the Menu Class, a switch statement allows the user to access or modify their itineraries.
*When they input a number, they can either create, view, or delete a country from the itinerary.
*Each option is represented by a method that does the corresponding action
*Inside the viewCountryItinerary method, users are prompted to add or delete cities to the country they have chosen to view.
*/

class Countries {
    constructor(name) {
        this.name = name;
        this.cities = [];
    }
} 


class Menu {
    constructor() {
        this.countries = [];  
        this.selectedCountry = null;
    }
       
    start() {
        let menuOptionChosen = this.mainMenuOptions(); //method returns input given by user in the MainMenuOptions method

        while(menuOptionChosen != 0) {                  //loops through while loop until user inputs the number 0
            switch(menuOptionChosen) {
                case '1':
                    this.createCountryItinerary();
                    break;
                case '2':
                    this.viewCountryItinerary();
                    break;
                case '3':
                    this.deleteCountryItinerary();
                    break;
                default:
                    menuOptionChosen = 0;
            }
            menuOptionChosen = this.mainMenuOptions();   //displays menu options again and asks user to input another number
        }
        alert('You will now exit this page');
    }


    //shows menu options to user and asks user to select an option
    mainMenuOptions() {
        return prompt(`
        Select an option for your new travel itinerary by typing the corresponding number.
            0) Exit
            1) Create Country Itinerary
            2) View Country Details
            3) Delete a Country
            `);
    }


    createCountryItinerary() {
        let name = prompt("Enter the Name of the Country: (ex. Morocco)");
        this.countries.push(new Countries(name)); //creates a new instance of the class Countries and pushes the name to the countries array
    }

    viewCountryItinerary() {
        let index = prompt("Enter the number(index) of the country you would like to view: ");
        this.selectedCountry = this.countries[index] //sets selectedCountry property equal to country chosen by the user
        let countryInfo = `Country:  ${this.selectedCountry.name} \n Cities: \n`;

        for(let i = 0; i < this.selectedCountry.cities.length; i++) { 
            countryInfo += i + ') ' + this.selectedCountry.cities[i] + '\n'; 
        }

        //sub Menu inside ViewCountryItinerary method
        let menuOptionChosen = prompt(`
            ${countryInfo}            
        Do you want to add or delete a city in your country's itinerary?
            0) Return to Main Menu
            1) Add a City
            2) Delete a City
            `);

            switch(menuOptionChosen) {
                case '1': 
                    this.addCity();
                    break;
                case '2':
                    this.deleteCity();
            }
    }


    deleteCountryItinerary() {
        let index = prompt('Enter the assigned number(index) of the country you wish to delete: ');
            this.countries.splice(index, 1);
        
        if(this.countries[index] == undefined ) {
            alert("A country has not been assigned to the number(index) you have chosen")
        }
    }

    //Menu Options for sub menu inside of the Country Information
    addCity() {
        let city = prompt("Enter the name of the city you would like to add to the itinerary: (ex. Rome)");
        this.selectedCountry.cities.push(city); //adds city that was input by user into the cities array
    }

    deleteCity() {
        let index = prompt('Enter the assigned number(index) of the city you would like to delete: ');
        this.selectedCountry.cities.splice(index, 1); //deletes one city from the array at the index that was input by the user
    }
    
}

let menu = new Menu(); //creates an object of the Menu Class
menu.start(); //calls the start method inside of the Menu class
