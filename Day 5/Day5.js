// a. Print odd numbers in an array

var arr=[245,29,33,52,9];

var odd=[];


(function(){
for (var x of arr){
if(x%2==1){
    odd.push(x);
}
else{
    continue;
}
}
console.log(odd.join(" "));
})(arr)


// H)Rotate an array by k times.
var arr=[1,2,3,4,6];

var k=2;
(function(){
    
    var res=[];
    var n=arr.length;
    k=k%n;
    for(i=0;i<arr.length;i++){
        if(i<k){
        res[i]=arr[n-k+i]
        }
        else{
            res[i]=arr[i-k]
        }
    }
    console.log(res)


})(arr,k)


// B)Convert all the strings to title caps in a string array.
var array=["satya","sasi","Raju"];
(function(){
    for(i=-0;i<array.length;i++){
        var y=array[i].split("")
        if(y[0].charCodeAt()>=97&&y[0].charCodeAt()<=122){
            y[0]=String.fromCharCode(y[0].charCodeAt(0)-32)
            
            }
            array[i]=y[0]+array[i].substring(1,y.length)
    }
console.log(array);
})(array)



// C)Print sum of all numbers in array.
var arr=[3,4,1,3,2];
var sum=0;
(function(){
for(var x of arr){
    sum=sum+x
}
console.log(sum)
}(arr))



// D)Return all the prime numbers in an array.
var arr=[37,9,78,4,11,3,5];
var res=[];
var output=(function(){
    for(var x of arr){
    var repeat=0;
        for(var i=2;i<=x/2;i++){
            
        if(x%i==0){
            repeat=1;
            break;


        }
        }
        if(repeat==0){
            res.push(x)
        }
    }
    return  res


}(arr))
console.log(output);






// F)Return median of two sorted arrays of same size.

var ar1 = [1, 12, 5, 26, 38];
var ar2 = [2, 1, 17, 30, 45];
var n1 = ar1.length;
var n2 = ar2.length;
var n=n1;
(function(){
    var i = 0; 
    var j = 0; 
    var count;
    var m1 = -1, m2 = -1;
    for (count = 0; count <= n; count++)
    {       
        if (i == n)
        {
            m1 = m2;
            m2 = ar2[0];
            break;
        }
        else if (j == n)
        {
            m1 = m2;
            m2 = ar1[0];
            break;
        }
   
        if (ar1[i] <= ar2[j])
        {
            m1 = m2; 
            m2 = ar1[i];
            i++;
        }
        else
        {
            m1 = m2; 
            m2 = ar2[j];
            j++;
        }
    }


    console.log((m1 + m2)/2)
})(ar1,ar2,n1)



// G)Remove duplicates from an array.

var arr=[1,2,3,1,4,2,5,2,1,8,9,5,8];

(function(){
var res=[];
for(i=0;i<arr.length;i++){
    var repeat=0;
    for(j=0;j<arr.length;j++){
        if(arr[i]==res[j]){
            repeat=1;
        }
    }
    if(repeat==0){
        res.push(arr[i])
    }


}
console.log(res)
})(arr)



// E)Return all the palindromes in an array.
var arr=[121,"sai","bob","saias","45154","codekata",1324];
var res=[];
var output=(function(){
for(var x of arr){
    var repeat=0;
    var y=x.toString();
    for(i=0;i<=y.length/2;i++){
        if(y.charAt(i)==y.charAt(y.length-i-1)){
             repeat=1;


        }


    }
    if(repeat==1){
        res.push(x)
    }
    
}
return res
})(arr)
console.log(output)


//  arrow functions.


// A)Print odd numbers in an array.
var y=[245,299,343,512,90];
var res=((arr)=>{
    var odd=[];
for (var x of arr){




    if(x%2==1){
    odd.push(x);
       }
    else{
    continue;
      }
    }
return odd;
})

console.log(res(y));




// b)Convert all the strings to title caps in a string array.
var array=["akhil","kasi","sai","srinivas"];
var res=((array)=>{
    for(i=-0;i<array.length;i++){
        var y=array[i].split("")
        if(y[0].charCodeAt()>=97&&y[0].charCodeAt()<=122){
            y[0]=String.fromCharCode(y[0].charCodeAt(0)-32)
            
            }
            array[i]=y[0]+array[i].substring(1,y.length)
    }
console.log(array.join(" "));
})
res(array)




// c)Sum of all numbers in an array.
var arr=[3,4,1,3,2122,36,14];
var res=((arr)=>{
    var sum=0;
for(var x of arr){
    sum=sum+x
}
console.log(sum)
})
res(arr);




// d)Return all the prime numbers in an array.
 arr=[17,9,2,4,11];


var prime=((arr)=>{
    var res=[];


    for(var x of arr){
    var repeat=0;
        for(var i=2;i<=x/2;i++){
            
        if(x%i==0){
            repeat=1;
            break;


        }
        }
        if(repeat==0){
            res.push(x)
        }
    }
    return res;


})
console.log(prime(arr))

var arr=[17,9,4,5,7,1,3,2,4,11];


var prime=((arr)=>{
    var res=[];


    for(var x of arr){
    var repeat=0;
        for(var i=2;i<=x/2;i++){
            
        if(x%i==0){
            repeat=1;
            break;


        }
        }
        if(repeat==0){
            res.push(x)
        }
    }
    return res;


})
console.log(prime(arr))




// e)Return all the palindromes in an array

var arr=[121,"nirin","bob","nilin","sasisas","guvi",1324];

var palindrome=(()=>{
    var res=[];
for(var x of arr){
    var repeat=0;
    var y=x.toString();
    for(i=0;i<=y.length/2;i++){
        if(y.charAt(i)==y.charAt(y.length-i-1)){
             repeat=1;

        }

    }
    if(repeat==1){
        res.push(x)
    }
}
return res;
})
console.log(palindrome(arr));


