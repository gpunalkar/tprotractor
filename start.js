var properties=require('./properties')
var StartPage= function(){

    this.gotoButton= function()
    {
        return element(by.id(properties.gotoButton));
    }

    this.gotoButtonClick= function(){
        this.gotoButton().click();
    }
}

module.exports= new StartPage();