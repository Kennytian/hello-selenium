const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://www.baidu.com');
    await driver.findElement(By.id('kw')).sendKeys('webdriver', Key.RETURN);
    await driver.wait(until.titleIs('webdriver_百度搜索'), 50 * 1000);
  } finally {
    await driver.quit();
  }
})();

