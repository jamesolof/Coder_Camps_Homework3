(function ($) {

    var derp = document.getElementById('guid');
    text = "The quick brown fox jumps over the lazy dog";
    derp.innerHTML = text;
    
    function generate() {
        text2 = text.replace(/\s/g, '<br>');
        derp.innerHTML = text2;

    };

    $('#generate').on("click", function (event) {
        $('#guid').html(generate());
    });

    function generate1(){
        text2 = text.toLowerCase().split(' ');
        text2 = text2.sort();
        derp.innerHTML = text2.join().replace(/,/g,'<br>');
    }

    $('#generate1').on("click", function (event) {
        $('#guid').html(generate1());
    });
    
    function generate2(){
        text2 = text.split(' ');
        text2.sort(function(a, b){
        return b.length - a.length;
        });
        derp.innerHTML = text2.join().replace(/,/g,'<br>');
        

    }

    $('#generate2').on("click", function (event) {
        $('#guid').html(generate2());
    });

    function generate3(){
        text2 = text.split(' ');

        for(var i=0;i<text2.length;i++){
            a = text2[i].split('');
            a.reverse();
            //reversal = derp.join();
            text2[i] = a.join().replace(/,/g,'');
            console.log(text2[i]);
        }
    derp.innerHTML = text2.join().replace(/,/g,'<br>');
    console.log('heh');
    }

    $('#generate3').on("click", function (event) {
        $('#guid').html(generate3());
    });
    
    
    
})(jQuery);
