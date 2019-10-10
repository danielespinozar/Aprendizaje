
// var numeros = 100;

// for(var i = 1; i <= 100; i++)
// {   
//     if(i % 3 == 0)
//     {
//         document.write("Fizz");
//     }
//     if (i % 5 == 0)
//     {
//         document.write("Bozz");
//     }

//     else if (i % 5 == 0 && i % 3 == 0)
//     {
//         document.write("FizzBozz");
//     }
//     else {
//         document.write(i);
//     }
//     document.write("<br>");
    
// }

var numeros = 100;
var divisible = false;

for(var i = 1; i <= 100; i++)
{   
    if(esDivisible(i,3))
    {
        document.write("Fizz");
    }
    if(esDivisible(i,5))
    {
        document.write("Bozz");
    }

    if(!esDivisible(i,3) && !esDivisible(i,5)) 
    {
        document.write(i);
    }
    document.write("<br>");
    
}

function esDivisible (num, divisor)
{
    if(num % divisor == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}
// var numeros = 100;
// var divisible = false;

// for(var i = 1; i <= 100000000; i++)
// {   
//     divisible = false;
//     if(i % 3 == 0)
//     {
//         document.write("Fizz");
//         divisible = true;
//     }
//     if (i % 5 == 0)
//     {
//         document.write("Bozz");
//         divisible = true;
//     }

//     if (!divisible) 
//     {
//         document.write(i);
//     }
//     document.write("<br>");
    
// }

// funtion esDivisible (num, divisor)
// {
//     if(num % divisor == 0)
//     {
//         return true;
//     }
//     else
//     {
//         return false;
//     }
// }