const {Builder, until} = require('selenium-webdriver');

let driver = new Builder()
    .forBrowser('firefox')
    .build();

//TODO page navigation added here, This is only the foundation to build on,
driver.get('https://ca.finance.yahoo.com/')
    .then(() => driver.wait(until.titleIs('Yahoo Finance - Business Finance, Stock Market, Quotes, News')))
    .then(() => driver.getPageSource()
        .then(function (pageSource) {
                let pagesaver = require('./../lib/save-pagesource.js');
                pagesaver(pageSource);
        }));
