$(document).ready(function() {


    function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    var myArray = ["one", "one", "two", "two", "three", "three","four", "four", "five", "five","six", "six", "seven", "seven", "eight","eight", "nine", "nine", "ten", "ten","eleven", "eleven", "twelve", "twelve", "thirteen", "thirteen","fourteen", "fourteen", "fiveteen", "fiveteen","sixteen", "sixteen", "seventeen", "seventeen","eighteen","eighteen"];
    shuffle(myArray);

    var background = Math.floor(Math.random() * 5)
    $(".div-box").css("background-image",`url(img/banner-${background + 1}.jpg)`)

    var divs = $(".div");
    for( var i = 0; i < divs.length; i++){
        divs[i].classList.add(myArray[i])
        divs[i].classList.add("black")
    }
    var brojka = 0
    var counter = 0;
    $(".div").click( function() {

        counter ++
        var elem = $(this);
        elem.addClass("clicked");
        elem.removeClass("black");
        var stisnati = $(".clicked")

        if (counter > 1) {
                console.log("ivan")
            var one = stisnati[0];
            var two = stisnati[1];
            console.log(stisnati[1].classList[1])
            console.log(stisnati[0].classList[1])

            if (stisnati[1].classList[1] === stisnati[0].classList[1]) {
                setTimeout(function () {
                    brojka ++
                    console.log(brojka)
                var moment = one.classList[1]
                one.classList.remove("clicked");

                $("." + moment).css("background-image", "linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)")
                $("." + moment).css("color", "transparent")
                two.classList.remove("clicked");
                counter = 0;
                if(brojka > 17){
                    $(".div").css("border","none")
                    alert("a dali si cute?");
                }
                }, 1000);
            } else {
                setTimeout(function () {
                    one.classList.remove("clicked");
                    two.classList.remove("clicked");
                    one.classList.add("black");
                    two.classList.add("black");
                }, 1000);

            }
            counter = 0
        }

    })


})