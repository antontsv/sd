
$(document).ready(function () {

    if (cards != undefined) {
        for (i in cards) {
            colorIndex = (i % 6) + 1
            var cardNumber = parseInt(i) + 1
            $("#cards-container").find(".row").append(`
                <div class="col-md-4 col-sm-12 col-xs-12">
                    <div class="flash-card" id="card-`+ cardNumber +`" data-url="`+ cards[i].url + `">
                        <div class="card-header gcolor-`+ colorIndex + `">
                            <p class="card-title">`+ cards[i].name + `</p>
                            <p>`+ cards[i].description + `</p>
                        </div>
                        <div class="card-sketch">
                            <img style="width:100%" src="`+ cards[i].url + `" alt="`+ cards[i].name + `" />
                        </div>
                    </div>
                </div>
            `)
        }
    }

    $(".flash-card").click(function(){
        window.location.href = this.getAttribute("data-url");
    })

});
           
