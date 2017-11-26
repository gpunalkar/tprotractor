browser.get('https://developer.servicenow.com');
browser.
fucntion getId(id){
    retrun element(by.id("dp-hdr-login-link"));
}

fucntion setId(id){
    var ele;
    if (ele == null || ele == undefined) {
      setTimeout(function() {
          setID();
      }, 5000);
    }
}
setID();
ele.click();