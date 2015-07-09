var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder()
  // The "9515" is the port opened by chrome driver.
  .usingServer('http://localhost:9515')
  .withCapabilities({chromeOptions: {
    binary: '/home/mvelezm/proyectos/electron-dist/electron'}})
  .forBrowser('electron')
  .build();

//driver.get('electron-example');
//driver.findElement(webdriver.By.name('q')).sendKeys('webdriver');
//driver.findElement(webdriver.By.name('btnG')).click();
driver.wait(
	function() {
		return driver.getTitle().then(
					function(title) {
						//console.log(title);
						return title === 'Hello World!';
					});
		}, 10000);

//driver.findElement(webdriver.By.xpath("//h1"));
//driver.close();
driver.quit();
