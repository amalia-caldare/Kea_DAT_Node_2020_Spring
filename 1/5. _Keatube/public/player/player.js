var fullURL = window.location.href
var videoId = fullURL.substr(fullURL.lastIndexOf("/"))
console.log(videoId)

const player = `<video  width="320" height="240" controls>
                <source src="/${videoId}" type="video/mp4" >
                </video>`
$('#player-repo').append(player);