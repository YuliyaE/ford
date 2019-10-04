const AbstractElement = require('../general/abstract.methods.js');

class CarsFilterPage {

    constructor() {
        this.ecoBoost = element(by.xpath("//*[@class='txt-label ng-binding' and text()='EcoBoost']"));
        this.bodySource = element(by.xpath("//*[@class='txt-label ng-binding' and text()='SUV & Crossover']"));
        this.carColor = element(by.xpath("//li[@aria-label='Diamond White']//span[@class='type-hover load-anchor']"));
        this.carName = element(by.xpath("//div[@class='vehicle-title']"));
    }

    clickExploreAllVehicles() {
        return AbstractElement.waitAndClick(this.exploreVehicles);
    };

    clickEcoBoost() {
        return AbstractElement.waitAndClick(this.ecoBoost);
    };

    clickbodySource() {
        return AbstractElement.waitAndClick(this.bodySource);
    };

    chooseColor() {
        return AbstractElement.scroll(this.carColor).then(() => {
            return AbstractElement.waitAndClick(this.carColor);
        })
    };

    chooseCar() {
        return AbstractElement.waitAndClick(this.carName);
    };

}

module.exports = new CarsFilterPage();