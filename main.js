function popp() 
{
    var x= document.getElementById("maindiv"); //Gets the element whose ID is "popup" as described in HTML file and saves reference to the variable 'x'
    if (x.style.display === "none")
    { 
        x.style.display = "block"; //If the div is not visible, then this will make it visible.
    } 
    else 
    {
        x.style.display = "none"; //If the div is visible, then this will make it invisible.
    }
}