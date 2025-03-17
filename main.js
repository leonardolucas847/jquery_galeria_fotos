$(document).ready (function(){
    $('header button').click(function(){
        $('form').slideDown()
    })
    $ ("#botão-cancelar").click (function(){
        $('form').slideUp()
    })

$('form').on ('submit' , function (e){
    e.preventDefault ()
    const linkURL = $('#endereço-imagem-nova').val()
    const novoItem = $('<li style= "display: none"></li>')
    $(`<img src="${linkURL}" />`).appendTo(novoItem);
    $(`<div class="overlay-imagem-link">
        <a href="${linkURL}" title="Ver imagem em tamho real" target="_blank">
        Ver imagem em tamho real</a>
    </div>`).appendTo(novoItem);
    $(novoItem).appendTo('ul');
    $(novoItem).fadeIn();
    $('#endereço-imagem-nova').val('')
    })

})