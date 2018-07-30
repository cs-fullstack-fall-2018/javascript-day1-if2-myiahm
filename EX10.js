var card1 = parseInt(prompt("Enter card 1:  "));
var card2 = parseInt(prompt("Enter card 2:  "));
var card3 = parseInt(prompt("Enter card 3:  "));

if (card1+card2+card3 === 21)
{
    alert("BlackJack!")
}
else if (card1+card2+card3 > 21)
{
    alert("Bust!!!")
}
else if (card1+card2+card3 < 21)
{
alert("The Total is:" +(card1+card2+card3))
}
