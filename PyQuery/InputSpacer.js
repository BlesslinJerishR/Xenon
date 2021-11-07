<!-- JQuery -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

// To add Xtra spaces before the Value & Placeholders
$("#input").focus(function() {
    if($(this).val() == "") {
        $(this).val('    ');
    }
});