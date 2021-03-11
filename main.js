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

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);