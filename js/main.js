function textscroll(text) {
    document.title = text;
    setTimeout(function () { textscroll(text.substr(1) + text.substr(0, 1)); }, 500);
};
textscroll('🤙DobriyDev🤙');
