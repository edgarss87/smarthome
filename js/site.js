/*
    Shuffle Text
*/

$(document).ready(function() {

    displayDesignContent();

    var shuffleText = $("#shuffleText");
    var textArray = new Array("Lorem ipsum dolor sit amet, consectetuer adipiscing", "Morbi in sem quis dui placerat ornare. Pellentesque ", " tortor neque egestas augue, eu vulputate magna eros eu");
    shuffleText.shuffleLetters({
            "text": textArray[0]
        });
    var shuffleIndex=1;
    
    setInterval(function(){
        if(shuffleIndex==textArray.length)shuffleIndex=0;
        
        // Shuffle the container with custom text
        shuffleText.shuffleLetters({
            "text": textArray[shuffleIndex]
        });
        
        shuffleIndex++;
        
    },8000);


    $('#menuContact').click(function(){

        $('#myModal').modal('show');
    });
    
    $('.contentLink').click(function(){
        resetServicesContent();
        var target = $(this).attr('value');
        $('.contentLink').removeClass("currentLink");
        $(this).addClass("currentLink");
        if(target ==="smartHomeDesign"){
            $("#smartHomeDesign").css('margin-top','0px');

            displayDesignContent();
        }
        else{
            $("#smartHomeDesign").css('margin-top','-500px');
            displayRedesignContent();
        }
        
    });
    
    });

function displayDesignContent(){
    setTimeout(function() {$("#designBkg1").css('width','950px')}, 500);
    setTimeout(function() {$("#designText1").css('opacity','1')}, 550);
    setTimeout(function() {$("#designBkg2").css('width','950px')}, 650);
    setTimeout(function() {$("#designText2").css('opacity','1')}, 700);
    setTimeout(function() {$("#designBkg3").css('width','950px')}, 800);
    setTimeout(function() {$("#designText3").css('opacity','1')}, 850);
    setTimeout(function() {$("#designBkg4").css('width','950px')}, 950);
    setTimeout(function() {$("#designText4").css('opacity','1')}, 1000);
}

function displayRedesignContent(){
    setTimeout(function() {$("#redesignBkg1").css('height','500px')}, 500);
    setTimeout(function() {$("#redesignText1").css('opacity','1')}, 600);
    setTimeout(function() {$("#redesignBkg2").css('height','500px')}, 800);
    setTimeout(function() {$("#redesignText2").css('opacity','1')}, 900);
}

function resetServicesContent(){
    $("#smartHomeDesign .serviceContent").css('width','0px');
    $("#smartHomeRedesign .serviceContent").css('height','0px');
    $(".serviceContentText").css('opacity','0');
}

