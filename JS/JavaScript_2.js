function validateForm() {
    let x = document.forms["contactForm"]["fname"].value;
    if (x == "")    {
        alert("Please provide a name");
        return false;
    }  
    
 }
