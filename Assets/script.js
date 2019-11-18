$(document).ready(function(){
    let template = $(".itemRow:eq(0)").clone();
    //$(".itemRow:eq(0)").clone();
    
$(".btn-primary").on("click", function(){
    let entry = document.getElementById("createItem");
    let text = "";
    for (let i = 0; i < entry.length; i++){
        text+= entry.elements[i].value;
    }
    if (text === ""){
        alert("Not a valid item.");
    } else{
        let check =  confirm("Add '" + text + "' to your list?");
        if (check === true){
            let newEntry = template.clone();
            newEntry.appendTo("#theList")
            .addClass("newItem")
            .find("h2")
            .replaceWith("<h2>" + text + "<h2>")
            .addClass("toDoItem");         
        }
    }
})

$("ul").on("click", "li", function(){
    if ($(this).find(".btn-light").text() === "Complete"){
        $(this).find(".toDoItem").wrap("<strike>");
        $(this).find(".btn-light").text("Undo");
        $(this).find(".btn-light").css("background-color", "red");
    } else if($(this).find(".btn-light").text() === "Undo"){
        $(this).find(".toDoItem").unwrap();
        $(this).find(".btn-light").text("Complete");
        $(this).find(".btn-light").css("background-color", "");
    }
})

$("li").on("dblclick", function(){
    $(this).remove();
})

$(".btn-danger").on("click", function(){
    let answer = confirm("Hit OK to remove all items.")
        if (answer === true){
            $("li").remove();
        }
})

$(".btn-success").on("click", function(){
    if ($(this).text() === "Complete All"){
        $(".btn-light").hide();
        $("li").wrap("<strike>");
        $(this).text("Undo All");
        $(this).css("background-color", "red");
    }else if($(this).text() === "Undo All"){
        $(".btn-light").show();
        $(this).text("Complete All");
        $(this).css("background-color", "");
        $("li").unwrap();
    }
})

});