const homePage = require("../pages/home");
const homeJson = require("../fixtures/home.json");

describe('home', () => {

  it.only('botoes devem estar funcionando', () => {
      homePage.openPage()
      homePage.clickOnSomethingAndNotVisible(homeJson.Buttons.One.id, homeJson.Buttons.One.name)
      homePage.clickOnSomethingAndNotVisible(homeJson.Buttons.Two.id, homeJson.Buttons.Two.name)
      homePage.clickOnSomethingAndNotVisible(homeJson.Buttons.Three.id, homeJson.Buttons.Three.name)
      homePage.clickOnSomethingAndNotVisible(homeJson.Buttons.Four.id, homeJson.Buttons.Four.name)

  });

  it.only('iframe deve estar funcionando', () => {
    homePage.openPage()
    homePage.openAndInteractIframe(homeJson.Buttons.One.idframe, homeJson.Buttons.One.name)
    homePage.openAndInteractIframe(homeJson.Buttons.Two.idframe, homeJson.Buttons.Two.name)
    homePage.openAndInteractIframe(homeJson.Buttons.Three.idframe, homeJson.Buttons.Three.name)
    homePage.openAndInteractIframe(homeJson.Buttons.Four.idframe, homeJson.Buttons.Four.name)
    
  });
  it.only('outros elementos devem estar funcionando', () => {
    homePage.openPage();
    homePage.fillField(homeJson.Fields.Name.id, homeJson.Fields.Name.name)
    homePage.clickOnSomethingAndNotVisible(homeJson.Buttons.One.id, homeJson.Buttons.One.name)
    homePage.clickOnSomething(homeJson.CheckBox.Three.id)
    homePage.selectBox(homeJson.SelectBox.Two.id, homeJson.SelectBox.Two.box)
    homePage.clickOnSomething(homeJson.Images.Selenium.id)
  });

});