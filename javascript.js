document.addEventListener('keydown', function(event) {
    if (event.ctrlKey) {
        switch (event.key) {
            case 'c':
                document.execCommand('copy');
                break;
            case 'x':
                document.execCommand('cut');
                break;
            case 'v':
                document.execCommand('paste');
                break;
            case 's':
                event.preventDefault();
                document.querySelector('form').submit();
                break;
        }
    }
});
