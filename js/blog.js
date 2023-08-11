
var i = 0;   // Creating variable i and Initalizing value of i to 0
var images = ["Image/impact1.jpg", "Image/impact2.jpg", "Image/impact3.jpg"]  //Creating array images and giving the path of image

function showImage(){    //Creating function showImage
   var show =  document.getElementById("slides");  //Creating variable show grabbing the element with its id
    show.src = images [i];  //putting the image in variable show

    if(i < 2) {  //if i is less than 2
        i++;     // increasing i by 1
    }
    else{
        i = 0;  //if i is greater 2 i is again initialized to 0
    }

    setTimeout("showImage()", 2000); // Calling function showImage and 2 second timer is set
    
}

window.onload = function() {showImage()};  // Calling function showImage on js while load