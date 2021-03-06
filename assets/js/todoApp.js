// check off todos upon click

$("ul").on("click", "li", function(){
   $(this).toggleClass("completed")
})

// delete to-do

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove()
    })
    event.stopPropagation()
})

// add new todo

$("input").on("keypress", function(event){
    if(event.which === 13){
    const todoText = $(this).val()
    $(this).val('')
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
    }
})

$("#addNew").click(function(){
    $("input").fadeToggle()  
})