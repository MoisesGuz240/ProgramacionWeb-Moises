<?php
if($_SERVER ["REQUEST_METHOD"]=="POST"){
    $num1 = intval(htmlspecialchars($_POST["num1"]));
    $num2 = intval(htmlspecialchars($_POST["num2"]));
    $operacion=htmlspecialchars(($_POST["operacion"]));
    if ($operacion == "+"){
        $resultado=$num1+$num2;
        echo"<h1> El resultado de la suma es $resultado </h1>";
    }
    if ($operacion == "-"){
        $resultado=$num1-$num2;
        echo"<h1> El resultado de la resta es $resultado </h1>";
    }
    if ($operacion == "*"){
        $resultado=$num1*$num2;
        echo"<h1> El resultado de la multiplicacion es $resultado </h1>";
    }
    if ($operacion == "/"){
        $resultado=$num1/$num2;
        echo"<h1> El resultado de la divicion es $resultado </h1>";
    }
    if ($operacion == "^"){
        $resultado=$num1*$num1;
        $resultado2=$num2*$num2;

        echo"<h1> El resultado de la potencia al cuadrado de $num1 es $resultado </h1>";
        echo"<h1> El resultado de la potencia al cuadrado de $num2 es $resultado2 </h1>";

    }
    if ($operacion == "sqrt"){
        $resultado=sqrt($num1);
        $resultado2=sqrt($num2);


        echo"<h1> El resultado de la raiz cuadrada de $num1 es $resultado </h1>";
        echo"<h1> El resultado de la raiz cuadrada de $num2 es $resultado2 </h1>";


    }
}else{
        print ("no se encontro los datos");
        echo"<h1> no se encontrarom los datios </h1>";
}