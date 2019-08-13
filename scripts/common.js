Zepto(function($){

    // 中英文切换
    let $langUl = $('.lang-ul');
    $('.lang').tap(function(e){
        e.stopPropagation();
        $langUl.css('display', 'inline-flex');
        $langUl.animate({
            top: '0.44rem',
            opacity: 1
        },400,'ease-in-out')
    })

    $langUl.find('li').tap(function(){
        const text = $(this).text();
        $('.lang-text').text(text);
    })

    $(document).tap(function(){
        $langUl.animate({
            top: '0.74rem',
            opacity: 0
        },200,'ease-out',function(){
            $langUl.css('display', 'none');
        })
    })
})