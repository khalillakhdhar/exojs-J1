function factoriel(x)
{
    // 4!=4*3*2*1
    let f=1;
    for(let i=2;i<=x;i++)
    {
        f=f*i; // f*=i;

    }
    console.log("la factoriel de "+x+" est: "+f)
}
function sommePaire(x,y)
{
    let somme =0;
    for(let i=x;i<=y;i++)
    {
        if(i%2==0) // => i est paire
        somme+=i;

    }
    console.log("la somme des entier paire entre "+x+" "+y+" est: "+somme);
}
function premier(p)
{
if(p<2)
return false;
else
{
    for(let i=2;i<Math.sqrt(p);i++)
    {
    if(p%i==0)
    return false;
    }
return true;


}
}
factoriel(5);
sommePaire(4,31);
if(premier(6))
console.log("premier");
else
console.log("n est pas premier");