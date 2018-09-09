$(document).ready(function() {


    function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    var myArray = ['green', 'green', 'blue', 'blue', 'yellow', 'yellow', 'orange', 'orange', 'red', 'red'];
    shuffle(myArray);



    var divs = $(".div");
    for( var i = 0; i < divs.length; i++){
        divs[i].classList.add(myArray[i])
        divs[i].classList.add("black")
    }
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
                one.classList.remove("clicked");
                two.classList.remove("clicked");
                counter = 0;
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