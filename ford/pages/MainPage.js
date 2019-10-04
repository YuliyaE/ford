const URL = 'https://www.ford.com/';
const AbstractElement = require('../general/abstract.methods.js');

class MainPage {
    constructor() {
        this.vehicle = element(by.xpath("//a[text()='Vehicles']"));
        this.exploreVehicles = element(by.xpath("//a[@class='btn-primary authored-color ']//*[@data-fgx-cta-text-template='All Vehicles']"));
    }

    open() {
        return browser.get(URL);
    }

    clickExploreAllVehicles(){
        return AbstractElement.waitAndClick(this.exploreVehicles);
    };
}

module.exports = new MainPage();