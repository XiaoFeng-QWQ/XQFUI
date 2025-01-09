(function ($) {
    // jQuery 插件
    $.fn.modal = function (options) {
        // 默认设置
        const settings = $.extend({
            openButtonSelector: '.XQFUI-main-btn[data-open-modal]', // 打开弹窗的按钮选择器
            closeButtonSelector: '.close-btn', // 关闭弹窗的按钮选择器
            overlaySelector: '.XQFUI-modal-overlay', // 弹窗覆盖层选择器
            modalSelector: '.XQFUI-modal', // 弹窗内容选择器
            animationSpeed: 200 // 弹窗动画速度
        }, options);

        const openModal = function (modalId) {
            // 打开弹窗
            $(modalId).fadeIn(settings.animationSpeed);
            // 禁用页面滚动
            $('body').css('overflow', 'hidden');
        };

        const closeModal = function (modalId) {
            // 关闭弹窗
            $(modalId).fadeOut(settings.animationSpeed);
            // 恢复页面滚动
            $('body').css('overflow', '');
        };

        $(this).on('click', settings.openButtonSelector, function () {
            const modalId = $(this).data('open-modal');
            openModal(modalId);
        });

        $(this).on('click', settings.overlaySelector + ' ' + settings.closeButtonSelector, function () {
            const modalId = $(this).closest(settings.overlaySelector);
            closeModal(modalId);
        });

        return this;
    };
})(jQuery);
$(document).ready(function () {
    // 初始化 modal 插件
    $('body').modal();
});
