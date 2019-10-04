const { Given, When, Then } = require('cucumber');
const { defineSupportCode } = require('cucumber');
const expect = require('expect');
const MainPage = require('../pages/MainPage.js')
const CarsFilterPage = require('../pages/CarsFilterPage.js');
const CarPage = require('../pages/CarPage.js');
const expectedCarPrice = '$19,995';
const expectedCarCapacity = '5';

defineSupportCode(({ setDefaultTimeout }) => {
    setDefaultTimeout(20 * 1000);
});

Given('The Ford home page opened', function () {
    browser.ignoreSynchronization = true;
    return MainPage.open();
});

When("Click all vehicles", function () {
    return MainPage.clickExploreAllVehicles();
})

Then("Fill the filter", function () {
    return CarsFilterPage.clickEcoBoost().then(() => {
        return CarsFilterPage.clickbodySource();
    }).then(() => {
        return CarsFilterPage.chooseColor();
    }).catch(message => {
        Promise.reject(message.message);
    })
})

When("Choose car", function () {
    return CarsFilterPage.chooseCar();
})

Then("Check car price", function () {
    return CarPage.getCarPrice().then((actualPrice) => {
        expect(expectedCarPrice).toEqual(actualPrice);
    }).catch(message => {
        Promise.reject(message.message);
    })
})