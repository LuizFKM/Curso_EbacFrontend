$(document).ready(function(){

    $('form').on('reset', () => {
        $('#inTarefa').text('')
        $('.lista').html('')
    })
    
    $('.lista').on('click', 'li', function () {
        $(this).toggleClass('text-line-through')
        
    });
    
    
    
    $('form').on('submit', function(e){
        e.preventDefault();

        const tarefa = $('#inTarefa').val();
        const novaTarefa = $('.lista')
        
        $('<li>').text(tarefa)
            .css({
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                color: 'aliceblue',
                fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
                fontSize: '20px',
                padding: '8px',
                borderBottom: '1px solid aliceblue'
                
            }).appendTo(novaTarefa);

            $('#inTarefa').val('');

})
    
})