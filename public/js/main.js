$(document).ready(function(){
    $('.delete-article').on('click', function(e){
        $target = $(e.target);
        const id = $target.attr('data-id');
        $.ajax({
            type: 'DELETE',
            url: '/articles/' +id,
            success: function(response){
                alert('Deleting Article');
                window.location.href='/';
            },
            error: function(err){
                console.log(err);
            }
        });
    });
});



/*
$(document).ready(function(){
    $('.delet-article').on('click', deleteSubscriber);
});

function deleteSubscriber(){
    event.preventDefault();

    var confirmation = confirm('Bist Du sicher?');

    if(confirmation){
        $.ajax({
            type: 'DELETE',
            url: '/subscriber/'+$('.deletesubscriber').data('id')
        }).done(function(response){
            window.location.replace('/');
        });
    }else{
        return false;
    }
}
*/