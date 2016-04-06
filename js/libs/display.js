// Immediately test and setup for mobile mode
(function setupMobile() {
    var pageElement = $('#page');

    if (isMobileBrowser() && hasMobileMode()) {
        toggleLayoutModes();
        pageElement.css('overflow-x','hidden');
    }

    if (isDeviceBrowser()) {
        pageElement.css('overflow-x', 'hidden');
    }

    // set the viewport width to the `#page` width
    var desktopWidth = pageElement.outerWidth();
    var content = 'width=' + desktopWidth;

    // set the viewport to the width of the page
    var metaTag = $('<meta name="viewport">');
    $('head').prepend(metaTag);
    metaTag.attr('content', content);
}());