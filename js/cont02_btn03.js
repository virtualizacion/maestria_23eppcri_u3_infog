$(function(){
	console.log("Image lens prueba...")

	//http://www.elevateweb.co.uk/image-zoom/examples
	$(".cont_tab_size02-2").elevateZoom({
		zoomWindowPosition: 10,
  		cursor: "crosshair"
	});

	$("div.holder").jPages({
        containerID : "itemContainer",
        perPage     : 1,
        first       : false,
        previous    : "span.arrowPrev",
        next        : "span.arrowNext",
        last        : false
    });
})