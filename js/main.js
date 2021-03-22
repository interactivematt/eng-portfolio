// Note: See http://blog.garstasio.com/you-dont-need-jquery/ and http://youmightnotneedjquery.com/ for JS commands that don't require jQuery
$(document).ready(function(){

  // Medium Zoom on images in posts

  window.addEventListener('load', function () {
    // Add the zoom effect to the hero image
    const heroZoom = mediumZoom('.project img')
    // Handle the zoom on click on the button

    // Add a zoom to be detached
    const zoomToDetach = mediumZoom('#zoom-detach')
    setTimeout(function () {
      zoomToDetach.detach()
    }, 5000)
    // Add zooms to a container
    const containerZoom = [
      heroZoom,
      mediumZoom('#zoom-margin', {
        margin: 48
      }),
      mediumZoom('#zoom-background', {
        background: '#212530'
      }),
      mediumZoom('#zoom-scrollOffset', {
        scrollOffset: 0
      }),
      mediumZoom('#zoom-metaClick', {
        metaClick: false
      }),
      zoomToDetach
    ]

  })

});