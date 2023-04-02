$("#btn").click(function(){
    alert('hello')
})
//this is to select from a particular input you want the action to take place
$(input [type ="email"]).click(function(){
    alert("hello")
})
// this to select by pseudo selector
$("button:lastchild").click(function(){
    alert("hello")
})
$("button:nth-child(2)").dblclick(function(){
    alert("hello")
})
function handleClick(){

let fname = $("#fname").val();
let lname = $("name").val()
let email = $("#email").val()
let pwd = $("#pwd").val()
let phone = $("#phone").val()
}