import java.util.Scanner;
public class calculadora{
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("ingresa el primer numero: ");
        double num1= scanner.nextDouble();
        System.out.println("ingresa el segundo numero: ");
        double num2= scanner.nextDouble();
        double resultado=0;
        System.out.print("Selecciona la operación (+, -, *, /): ");
        char operacion = scanner.next().charAt(0);

        switch (operacion) {
            case '+':
                resultado = num1 + num2;
                break;
            case '-':
                resultado = num1 - num 2;
                break;
            case '*':
                resultado = num1 * num 2;
                break;
            case '/':
                break;
        }

        System.out.println("El resultado de " + num1 + " " + operacion + " " + num2 + " es: " + resultado);
    }
}
