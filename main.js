$(document).ready(function(){
    // console.log("open!");
    $("#nav").slideUp (800);
    $("#more1").slideUp (800);
    $("#more2").slideUp (800);
    $("#more3").slideUp (800);
    $("#eMore1").slideUp (800);
    $("#eMore2").slideUp (800);
    $("#eMore3").slideUp (800);


    // $("#header").hover(()=>{
    //     window.location.href = '#header';
    //     $("#nav").toggle();
    // });


    // $("#home").hover(()=>{
    //     $("#nav").slideUp (800);
    // });

    // $("#about").hover(()=>{
    //     window.location.href = '#about';
    // });

    // $("#work").hover(()=>{
    //     window.location.href = '#work';
    // });

    // $("#education").hover(()=>{
    //     window.location.href = '#education';
    // });

    // $("#footer").hover(()=>{
    //     window.location.href = '#footer';
    // });

    $("#work1").hover(()=>{
        $("#more1").toggle();
        $("#more2").slideUp (800);
        $("#more3").slideUp (800);
    })

    $("#work2").hover(()=>{
        $("#more2").toggle();
        $("#more1").slideUp (800);
        $("#more3").slideUp (800);
    })

    $("#work3").hover(()=>{
        $("#more3").toggle();
        $("#more1").slideUp (800);
        $("#more2").slideUp (800);
    })

    $("#edu1").hover(()=>{
        $("#eMore1").toggle();
        $("#eMore2").slideUp (800);
        $("#eMore3").slideUp (800);
    })

    $("#edu2").hover(()=>{
        $("#eMore2").toggle();
        $("#eMore1").slideUp (800);
        $("#eMore3").slideUp (800);
    })

    $("#edu3").hover(()=>{
        $("#eMore3").toggle();
        $("#eMore1").slideUp (800);
        $("#eMore2").slideUp (800);
    })

    // $("body").click(()=>{
    //     $("#more1").slideUp (800);
    //     $("#more2").slideUp (800);
    //     $("#more3").slideUp (800);
    //     $("#eMore1").slideUp (800);
    //     $("#eMore2").slideUp (800);
    //     $("#eMore3").slideUp (800);

    // });

});

// var x,y,n=0,ny=0,rotINT,rotYINT

// function rotateYDIV(){
//     // console.log("testing");
//     y=document.getElementById("rotate3D")
//     clearInterval(rotYINT)
//     rotYINT=setInterval("startYRotate()",10)
// }

// function rotateYDIVO(){
//     // console.log("testing");
//     y=document.getElementById("rotate3D")
//     clearInterval(rotYINT)
//     rotYINT=setInterval("startYRotate()",10)
// }


// function startYRotate() {
//     ny=ny+1
//     y.style.transform="rotateY(" + ny + "deg)"
//     if (ny==180 || ny>=360) {
//         clearInterval(rotYINT)
//         if (ny>=360){ny=0}
//     }
// }

// function startYRotateO() {
//     ny=ny+1
//     y.style.transform="rotateY(" + -ny + "deg)"
//     if (ny==180 || ny>=360) {
//         clearInterval(rotYINT)
//         if (ny>=360){ny=0}
//     }
// }

