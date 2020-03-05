
d3.select("body")
    .append("h1")
        .text("GUESSING GAME")
d3.select("body")
    .append("p")
        .text("how to play: make a guess of what is behind the card: a cow, a pig, or chicken. Check your guess by clicking on the card. Can you guess correctly?")
        .on("mouseover",function()
        {
            d3.select(this)
                .text("are you a winner or loser?");
    
        })
        .on("mouseleave", function()
        {
            d3.select(this)
                .text("how to play: make a guess of what is behind the card: a cow, a pig, or chicken. Check your guess by clicking on the card. Can you guess correctly?");
        
        })
d3.select("body")
    .append("img")
        .attr("src","pics/blackcard.jpg")
        .attr("width","100px")
        .attr("height","140px")
    .on("click",function()
        {
        d3.select("body")
    .append("img")
    .attr("src","pics/pig.jpg")
     .attr("width","100px")
        .attr("height","140px")})
d3.select("body")
    .append("img")
        .attr("src","pics/blackcard.jpg")
        .attr("width","100px")
        .attr("height","140px")
    .on("click",function()
        {
        d3.select("body")
    .append("img")
    .attr("src","pics/Cow.jpg")
     .attr("width","100px")
        .attr("height","140px")
})
d3.select("body")
        .append("img")   
    .attr("src","pics/blackcard.jpg")
        .attr("width","100px")
        .attr("height","140px")
        
    .on("click",function()  
   {
        d3.select("body")
    .append("img")
    .attr("src","pics/Busteni_-_chicken.jpg")
     .attr("width","100px")
        .attr("height","140px")
})

 d3.select("body")
.append("br")


