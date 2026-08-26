programa {
  funcao inicio() {
   real c, f 
   escreva("Temperatura em celcius: ")
   leia(c)

   f = c*1.8 + 32
   escreva("temperatura em fahrenheit: " + f)
   se(f > 68){
    escreva("\nTá super calor! ")
   }senao{
    escreva("\ntá calor!")
   }
   }
