var score = 0,roll,dice
document.getElementById("roll").addEventListener("click",roll)


function roll()
{
    roll = Math.floor(Math.random()*6)+1
    dice = document.getElementById("dice")
    dice.src = roll+"-dice.png"
 if(roll==6){
    score +=roll
    document.getElementById('p').innerHTML = score  
 }
 else if(roll<6){
    score += roll
    document.getElementById('p').innerHTML = score
}
if(score>=20)
{
    document.getElementById("roll").style.display = "none" 
    document.getElementById('p1').innerHTML = "Winner" 
}
}