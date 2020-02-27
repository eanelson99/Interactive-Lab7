
d3.select("body")
    .append("h1")
        .text("GUESSING GAME")
d3.select("body")
    .append("p")
        .text("how to play: hover your mouse over an image and click to see the options:Cow,Pig,Chicken!")
        .on("mouseover",function()
        {
            d3.select(this)
                .text("are you a winner or loser?");
    
        })
        .on("mouseleave", function()
        {
            d3.select(this)
                .text("how to play:hover your mouse over an image and click to see the options:Cow,Pig,Chicken! ");
        
        })
d3.select("body")
.append("br")
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


