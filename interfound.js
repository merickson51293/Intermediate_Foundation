function sigma(num){
    var sum=0;
    for(var i=1; i<=num; i++){
        sum=i+sum;
    
    }
    return sum;
}
console.log(sigma(5))

function factorial(num){
    var mult=1
    for(var i=1; i<=num; i++){
        mult = i * mult;
    }
    return mult;
}

console.log(factorial(5))

function fib(num){
    var a=0, b =1, sum=1;

    for(var i=2; i<=num; i++){
        sum=a+b;
        a=b;
        b=sum;
    }
    return sum;
}

console.log(fib(6))



function second(arr){
if(arr.length<2){
    return null;
}
else{
    return arr[arr.length-2];
}
}

console.log(second([1,2,3,4,5]));
console.log(second([1]));

function n(arr,th){
if(arr.length<th){
    return null;
}
else{
    return arr[arr.length-th];
}
}
console.log(n([1,2,3,4,5],4));
console.log(n([1],2));

function secLarge(arr){
    var max = arr[0];
    var sec = arr[0];
    for(var i=0;i<arr.length; i++){
        if(arr.length<2){
            return null;
        }
        else if(arr[i]>max){
            sec=max;
            max=arr[i];
        }
        else if(arr[i]>sec && arr[i] < max)
        sec = arr[i];
    }
    return sec;
}

console.log(secLarge([1,2,3,4,5]))


var double = [4,'ulysses',42,false];

double.splice(1, 0, 4); 
double.splice(3,0,'ulysses');
double.splice(5,0, 42);
double.splice(6,0,false);
console.log(double)