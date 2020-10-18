//Hover
$(document).ready(function() {
	$(".p1").hide();
	$(".p2").hide();
	$(".p3").hide();
	$(".p4").hide();
	$(".img").hover(function() {
		$(this).find(".p1").toggle();
		$(this).find(".p2").toggle();
		$(this).find(".p3").toggle();
		$(this).find(".p4").toggle();
	});
});

$(document).ready(function() {
	$(".p5").hide();
	$(".p6").hide();
	$(".p7").hide();
	$(".p8").hide();
	$(".img").hover(function() {
		$(this).find(".p5").toggle();
		$(this).find(".p6").toggle();
		$(this).find(".p7").toggle();
		$(this).find(".p8").toggle();
	});
});

//Main form
function getSizeCost() {
    var selectedSize = document.getElementById("size").value;
    return parseInt(selectedSize);
}

function getCrustCost() {
    var selectedCrust = document.getElementById("crust").value;
    return parseInt(selectedCrust);
}
function getNumber() {
    var selectedNumber = document.getElementById("number").value;
    return parseInt(selectedNumber);
}
function mushrooms() {
    var mushroom = 0;
    var addMushroom = document.getElementById("toppingone");
    if (addMushroom.checked === true) {
        mushroom = 150;
    }
    return parseInt(mushroom);
}
function sausages() {
    var sausage = 0;
    var addsausage = document.getElementById("toppingone");
    if (addsausage.checked === true) {
        sausage = 150;
    }
    return parseInt(sausage);
}
function onions() {
    var onion = 0;
    var addonions = document.getElementById("toppingone");
    if (addMushroom.checked === true) {
        onion = 150;
    }
    return parseInt(onion);
}
function tikkaSaucee() {
    var tikkaSauce = 0;
    var addtikkaSauce = document.getElementById("toppingone");
    if (addtikkaSauce.checked === true) {
        tikkaSauce = 150;
    }
    return parseInt(tikkaSauce);
}
function calctotalPrice(e) {
    event.preventDefault();
    var totalPrice = (getSizeCost() + getCrustCost() + mushrooms()) * (getNumber());
    
        console.log(totalPrice);
    alert("Your order of " + getNumber() + " pizzas has been processed.Your total amount payable is " + totalPrice +"." )

}
//delivery
$(document).ready(function () {
    $("#delivery").submit(function () {

        var name = $("input#name").val();
        var number = $("input#number").val();
        var location = $("input#location").val();

        alert("Hello " + name + ". Your order has been successfuly received and will be delivered to " +  location + " within one hour.The delivery will cost ksh 180/= Thank you for chosing Blaze Pizza.");
         //$(this).get(0).reset();
         //event.preventDefault();
    });
    
});

