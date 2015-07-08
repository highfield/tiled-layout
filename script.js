var slong = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";

var sshort = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.";

var gauge = undefined;

    
function redraw() {
    var ctrcv1 = $("#ctrmeter1");
    var w = ctrcv1.width();
    var h = ctrcv1.height();

    var cv1 = $("#meter1");
    cv1[0].width = w;
    cv1[0].height = h;

    //var ctx = cv1[0].getContext("2d");

    //ctx.fillStyle = "lime";
    //ctx.fillRect(0, 0, w, h);

    if (gauge) {
        gauge.updateConfig({
            width  : w,
            height : h
        });
    }
    else {
        gauge = new Gauge({
            renderTo    : 'meter1',
            width       : w,
            height      : h,
            glow      : true,
            units     : 'V',
            title     : 'Input voltage',
            strokeTicks : false,
            minValue: 0,
            maxValue: 20,
            highlights : [{
                from  : 0,
                to    : 8,
                color : 'LightSalmon'
            }, {
                from  : 8,
                to    : 10,
                color : 'Khaki'
            }, {
                from  : 10,
                to    : 15,
                color : 'PaleGreen'
            }, {
                from  : 15,
                to    : 17,
                color : 'Khaki'
            }, {
                from  : 17,
                to    : 20,
                color : 'LightSalmon'
            }],
            animation : {
                delay : 10,
                duration: 300,
                fn : 'bounce'
            }
        });
        gauge.setValue(12.6);

        /*
            gauge.onready = function() {
                setInterval( function() {
                    gauge.setValue( Math.random() * 110-30);
                }, 3000);
            };
        */
        }

    gauge.draw();
}


function refresh() {
    /*
    var ctrcv1 = $("#ctrcv1");
    var w = ctrcv1.width();
    var h = ctrcv1.height();

    var cv1 = $("#cv1");
    cv1[0].width = w;
    cv1[0].height = h;

    var ctx = cv1[0].getContext("2d");

    ctx.fillStyle = "lime";
    ctx.fillRect(0, 0, w, h);
    //console.log("w=" + w + "; h=" + h);
    */
    
    redraw();
}


$(function () {
    $("div[data-long]").each(function(index) {
        $(this).html(slong);
        $(this).addClass("tile-body-scrollable");
    });
    
    $("div[data-short]").each(function(index) {
        $(this).html(slong);
        $(this).addClass("tile-body-scrollable");
    });

    $("div.tile-body").each(function (index) {
        if ($(this).siblings(".tile-header").length) {
            $(this).addClass("tile-body-headered");
        }
        if ($(this).siblings(".tile-footer").length) {
            $(this).addClass("tile-body-footered");
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