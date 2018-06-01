$('.icono').on('click', function(){
	//console.log($(this).attr('data-id'))
    let like = $(this).siblings('p.like')
    
$.ajax({
    method: "PUT",
    url: "http://localhost:3000",
    data:{
    	id: $(this).attr('data-id')
    }
}).done(function(data){
   like.html(data.like)
   console.log(data.like)
    })
});

/*$('#icono').on('click', function(){
	console.log(this.id)
	$.ajax({
    method: "PUT",
    url: "http://localhost:3000/",
    data:{
    	id: $('#icono').attr('data-id')
    }
});
}
*/