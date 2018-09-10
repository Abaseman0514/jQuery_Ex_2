const down = $("ul");
$("button").on("click", () => {
	down.slideToggle();
})

$(".numbers").on("click", () => {
	$("section").html("1 2 3 4 5 6 7 8 9 10");
	down.slideToggle();
})

$(".letters").on("click", () => {
	$("section").html("A B C D E F G H I J K L M N O P Q R S T U V W X Y Z");
	down.slideToggle();
})
