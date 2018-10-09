$('ul').on('click', 'li', function(){
    $(this).toggleClass('completed');
});

$('ul').on('click', '#todos', function(e){
    $(this).parent().fadeOut(500, function(){
        $this.remove();
    });
    e.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        let newTodo = $(this).val();
        $(this).val('');
        $('ul').append('<li><span id="todos"><i class="fas fa-trash-alt"></i></span> ' + newTodo + '</li>');
    }
});

$('#add-todo').click(function(){
    $("input[type='text']").fadeToggle();
});