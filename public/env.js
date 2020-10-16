console.log('hello world')
$(Document).ready(function(){
    console.log('Document ready')
    $('@calculateBtn').click(function(){
    var number1=$('@Number1').val()
    var number2=$('@Number2').val()
    var numbers={
        num1:number1,
        num2:number2
    }
        $.get("http://localhost:4000/adder",numbers,function(data){
            console.log('Data has returned'+data)
            $('@Result').val(data);
        });
  })

})