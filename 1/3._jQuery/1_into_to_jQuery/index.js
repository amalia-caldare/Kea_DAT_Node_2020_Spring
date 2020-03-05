$("#teleport-btn").click(() => {
   const toTeleport = $(".input-right").val();
   $(".input-right").val($(".input-left").val());
   $(".input-left").val(toTeleport);
   
});