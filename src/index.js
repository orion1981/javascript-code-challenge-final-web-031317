$(document).ready(function(){
  // your code here!

  $('#photo-form').on('submit', function(event){
      event.preventDefault();
      var image = $("#image_url").val()
      var caption = $("#caption").val()
      console.log('here', image, caption)

      // var picture = `<li><image><source src="${image}"></image></li>`
      var picture =`<img src="${image}" >`


        $('#photo-list').append(picture)
    })

})
