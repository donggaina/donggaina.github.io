$(function () {
    $(".select ul li").click(function() {
        var obj = $(this);
        $(this).addClass('active');
        obj.parent('ul').parent('.select').siblings('.checked').val(obj.text());
    });

    // 阻止冒泡
    $(".checked").click(function() {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            event.stopPropagation();
        }
        var checked = $(".checked");
        for (var i = 0; i < checked.length; i++) {
            if (checked.eq(i).hasClass("active")) {
                checked.eq(i).removeClass("active");
                $(this).addClass("active");
            }
        }
    });
    $(document).click(function(event) {
        if ($(".checked").hasClass('active')) {
            $(".checked").removeClass('active');
        }
    });
});
$(".hide-menu").click(function() {
    $(".menu").toggleClass('hide');
});