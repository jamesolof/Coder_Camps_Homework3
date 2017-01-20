(function ($) {

    var textBox = document.getElementById('guid');
    text = "The quick brown fox jumps over the lazy dog";
    textBox.innerHTML = text;
    
    function newlines() {
        text2 = text.replace(/\s/g, '<br>');
        return text2;
    };

    $('#newlines').on("click", function (event) {
        $('#guid').html(newlines());
    });

    function alphabetize(){
        text2 = text.toLowerCase().split(' ');
        text2 = text2.sort();
        return text2.join('<br>');
    }

    $('#alphabetize').on("click", function (event) {
        $('#guid').html(alphabetize());
    });
    
    function lengthSort(){
        text2 = text.split(' ');
        text2.sort(function(a, b){
        return b.length - a.length;
        });
        return text2.join('<br>');
        

    }

    $('#lengthSort').on("click", function (event) {
        $('#guid').html(lengthSort());
    });

    function reverser(){
        text2 = text.split(' ');

        for(var i=0;i<text2.length;i++){
            a = text2[i].split('');
            a.reverse();
            text2[i] = a.join('');
            console.log(text2[i]);
        }
    return text2.join('<br>');
    }

    $('#reverser').on("click", function (event) {
        $('#guid').html(reverser());
    });
    
    
    
})(jQuery);
