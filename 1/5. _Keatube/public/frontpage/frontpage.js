$.get("videos?page=1", (response) =>{
    console.log(response.response);
    response.response.map((video) =>{
        $("#video-gallery")
        .append(`<a href="/player/${video.fileName}">${video.title}</a>`);
    });
});
