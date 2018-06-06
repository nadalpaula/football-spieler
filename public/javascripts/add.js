$('.add').on('click', function(){
	let titulo = $('.nombre').val()
  let imagen = $('.imagen').val()
$.ajax({
    method: "POST",
    url: "http://localhost:3000/add",
    data:{
      titulo: titulo,
      imagen: imagen
    }
})
})
$('.nombre').val('')
$('.imagen').val('')
