const AbstractElement = require('../general/abstract.methods.js');

class CarPage {
    constructor() {
        this.carPrice = element(by.xpath("//p[@class='item-value price-value']"));
        this.carSpecifications = element(by.xpath("//h2[@data-accordion='specifications']"));
        // this.carCapacity = element(by.xpath("(//div[@class='table-responsive']//td)[2]"));
        this.carCapacity = element(by.xpath("(//span[@data-ng-if='model.seatingMax']//*[@class='ng-binding'])[1]"));
        this.wheelBase = element(by.xpath("(//div[@class='table-responsive']//td)[8]"));
        this.compareModelsButton = element(by.xpath("//*[@id='compare-models-btn']//a"));//(//*[text()='Compare Models'])[1]
    }

    getCarPrice() {
        return this.carPrice.getText();
    };

    clickCompareModels() {
        return AbstractElement.waitAndClick(this.compareModelsButton);
    }


    clickCarSpecifications() {
        return AbstractElement.waitAndClick(this.carSpecifications);
    }

    getCarCapacity() {
        return this.carCapacity.getText();
    }

    getCarWheelBase() {
        return this.wheelBase.getText();
    }

}

module.exports = new CarPage();