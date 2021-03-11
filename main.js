$(document).ready(function(){
    // console.log("open!");
    $("#nav").hide();
    $("#more1").hide();
    $("#more2").hide();
    $("#more3").hide();
    $("#eMore1").hide();
    $("#eMore2").hide();
    $("#eMore3").hide();


    // $("#header").hover(()=>{
    //     window.location.href = '#header';
    //     $("#nav").show();
    // });


    // $("#home").hover(()=>{
    //     $("#nav").hide();
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
        $("#more1").show();
        $("#more2").hide();
        $("#more3").hide();
    })

    $("#work2").hover(()=>{
        $("#more2").show();
        $("#more1").hide();
        $("#more3").hide();
    })

    $("#work3").hover(()=>{
        $("#more3").show();
        $("#more1").hide();
        $("#more2").hide();
    })

    $("#edu1").hover(()=>{
        $("#eMore1").show();
        $("#eMore2").hide();
        $("#eMore3").hide();
    })

    $("#edu2").hover(()=>{
        $("#eMore2").show();
        $("#eMore1").hide();
        $("#eMore3").hide();
    })

    $("#edu3").hover(()=>{
        $("#eMore3").show();
        $("#eMore1").hide();
        $("#eMore2").hide();
    })

    // $("body").click(()=>{
    //     $("#more1").hide();
    //     $("#more2").hide();
    //     $("#more3").hide();
    //     $("#eMore1").hide();
    //     $("#eMore2").hide();
    //     $("#eMore3").hide();

    // });

});

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);