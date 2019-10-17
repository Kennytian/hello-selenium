## Hello Selenium

_本文以 macOS + Chrome + TypeScript 为例_

### 驱动
1、包含 Windows、Linux 和 Mac 版本：https://npm.taobao.org/mirrors/chromedriver/77.0.3865.40/

2、解压 chromedriver_mac64.zip，在当前目录执行 `mv chromedriver /usr/local/bin`

### 编写脚本
```js
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
```

### 运行脚本
> node start.ts

### 参考
- https://seleniumhq.github.io/selenium/docs/api/javascript/index.html
- https://www.cnblogs.com/fnng/p/5854875.html
- https://juejin.im/post/5b0e53e6518825158a6697aa
- https://applitools.com/tutorials/selenium-javascript.html#quick-start-%F0%9F%9A%80

