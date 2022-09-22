

$(document).ready(function(){


    // var h1= document.querySelector('h1')

    // h1.addEventListener('click', myFunction)


    $('h1').click(function(){
        this.innertext = "I Love Web Fund"
    })

    $('button').click(function(){
        if(this.innerText == "Blue"){
        $('.row').css('background-color', this.innerText)
        $('h1').css('color', 'white')
        }
        else{
            $('h1').css('color', 'black')
            $('.row').css('background-color', this.innerText)
        }
    })

    $('.fade-toggle').click(function(){
        $('.row').slideToggle(2000)
    })
})