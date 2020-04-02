let fileValid = false;
function validateForm() {
    const title = document.forms.videoupload.title.value;
    const description = document.forms.videoupload.description.value;
    const tags = document.forms.videoupload.tags;
    const category = document.forms.videoupload.category;
    if(title.length < 8 || title.length > 64) {
        //handle messages tot the user what went wrong;
        return false;
    }

    if( description > 2048) {
        return false;
    }

    return true && fileValid;
}

function handlefileUpload(files){
    const file = files[0];

    const mimeTypeArray = file.type("/");
    if(mimeTypeArray[0] != "video") {
    fileValid = false;
    return;
}
    const fileSize = file.size;

    const twoGbFileLimit = 2147483648;

    if(fileSize > twoGbFileLimit) {
        fileValid = false;
        return;
    }

    fileValid = true;
}
