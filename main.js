var width = screen.width;
var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;
var new_canvas_width_variable = screen.width-60;
var new_canvas_height_variable = screen.height-200;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    

    if (width<992) {
        document.getElementById("myCanvas").width=new_canvas_width_variable;
        document.getElementById("myCanvas").height=new_canvas_height_variable;
    }
    canvas.addEventListener("touchstart", my_mousedown);
    
    function my_mousedown(e)
    {
colour= document.getElementById("colour").value ;
    width_of_line= document.getElementById("width_of_line").value ;

    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
        last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
    }
    

canvas.addEventListener("touchmove", my_mousemove);
    function my_mousemove(e)
    {

         current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = colour;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();

        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;

        
    }

    function clearArea()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
