//contains code needed for camera plugin

function capturePhoto(){
    
    navigator.camera.getPicture(uploadPhoto,null,{sourceType:1,quality:60});

}

function uploadPhoto(data){
    //this is where you would send the image file to server
    
    cameraPic.src = data;
        //cameraPic.src = "data:image/jpeg;base64," + data;
        //successful upload to the server
    navigator.notification.aler(
        "Your photo has been loaded",       //message
        okay,                               //callback
        "Photo Uploaded",                   //tittle
        "OK"                                //buttonName
    );
}

function okay(){
    //do something
}


