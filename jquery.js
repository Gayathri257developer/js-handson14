// 1. Create a button , onclick of which you should be able to hide a paragraph text, create another button onclick of which this paragraph should be visible

$(".hide").click(function(){
    $("#para").hide();
})

$(".show").click(function(){
    $("#para").show();
})

// 2. Create an ajax call, by using this api "https://jsonplaceholder.typicode.com/todos/12" and print the title as the heading of the page

$(".btn").click(function(){
    $.ajax({
    url:"https://jsonplaceholder.typicode.com/todos/3",
    type: "GET",
    success: function(data){
    console.log(data);
    document.getElementById("text").innerText = data.title;
}
    })
})