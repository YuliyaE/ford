class AbstractElement {

    waitAndClick(element) {
        return this.waitUntilClickable(element).then(() => {
            console.log(`wait and click ${element.locator()} `)
            return element.click();
        }).catch(message => {
            Promise.reject(message);
        })
    }
    
    waitUntilClickable(element) {
        return browser.wait(protractor.ExpectedConditions.elementToBeClickable(element), 60000);
    }

    scroll(element) {
        return browser.executeScript("arguments[0].scrollIntoView();", element);
    }

}

module.exports = new AbstractElement();