$(document).ready(function(){
  $("#search").on("submit",function(e){
    e.preventDefault();
    var formData = {
      'q'              : $('input[name=q]').val(),
      'type'             : $('input[name=type]').val()
    };
    $.ajax({
      type: "GET",
      url: 'https://api.spotify.com/v1/search',
      data: formData,
      success: function (response) {
        console.log(response.artists.items);
        var artists = response.artists.items;
        for (var i =0; i<artists.length;i++){
          console.log(artists[i].name);
        }
      }
    });
  });
});