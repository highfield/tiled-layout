var slong = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";

var sshort = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.";


function refresh() {
    var ctrcv1 = $("#ctrcv1");
    var w = ctrcv1.width();
    var h = ctrcv1.height();

    var cv1 = $("#cv1");
    cv1[0].width = w;
    cv1[0].height = h;

    var ctx = cv1[0].getContext("2d");

    ctx.fillStyle = "lime";
    ctx.fillRect(0, 0, w, h);

}


$(function () {
    $("div[data-long]").html(slong);
    $("div[data-short]").html(sshort);

    $("div.box-body").each(function (index) {
        if ($(this).siblings(".box-header").length) {
            $(this).addClass("box-body-headered");
        }
        if ($(this).siblings(".box-footer").length) {
            $(this).addClass("box-body-footered");
        }
    });

    refresh();

    var mapOptions = {
        center: {
            lat: -34.397,
            lng: 150.644
        },
        zoom: 8
    };
    var map1 = new google.maps.Map(document.getElementById('map-canvas1'), mapOptions);
    var map2 = new google.maps.Map(document.getElementById('map-canvas2'), mapOptions);

    /*
    //Definition of the function (non-global, because of the previous line)
    function hi(){
        alert("hi");
    }

    //set an interval
    setInterval(hi, 30000);

    //Call the function
    hi();
    */

    //http://stackoverflow.com/questions/172821/detecting-when-a-divs-height-changes-using-jquery
});


$(window).resize(function () {
    refresh();
});