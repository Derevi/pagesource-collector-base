const {Builder, until} = require('selenium-webdriver');

let driver = new Builder()
    .forBrowser('firefox')
    .build();


driver.get('https://ca.finance.yahoo.com/')
    .then(() => driver.wait(until.titleIs('Yahoo Finance - Business Finance, Stock Market, Quotes, News')))
    .then(() => driver.getPageSource()
        .then(function (pageSource) {
            //TODO call pagesource function to write to file the page source
        }));