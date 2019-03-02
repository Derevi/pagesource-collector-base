const {Builder, until} = require('selenium-webdriver');

let driver = new Builder()
    .forBrowser('firefox')
    .build();


driver.get('https://ca.finance.yahoo.com/')