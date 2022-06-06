var money = prompt('Alisherning pulini kiriting, iltimos');
var elContent = document.querySelector(".content")


if (money < 9666000) {
	console.log ("alisher yana ozgina sabr qilishi kerak")
	elContent.textContent = "alisher yana ozgina sabr qilishi kerak :("
} else {
	console.log ("oq yo'l alisher")
	elContent.textContent = "oq yo'l Alisher  "
}