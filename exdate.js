function verifdate(a,m,j)
{
const shortMonths=[4,6,9,11];
if(a<1900)
return false;
if(m<1 || m>12)
return false;
else
{
    if(shortMonths.includes(m))
    {
        console.log("short");
        if(j<=30)
        return true;
        else return false;
    }
    else if(m==2)
    {
        if(a%4==0)
        {
            if(j<=29)
            {return true;
            }
            else
            return false;
               }
               else
               {
                if(j<=28)
                return true;
                else
                return false;
               }
    }
    else
    {
        if(j<=31)
        return true;
        else 
        return false;
    }
}


}
if(verifdate(2020,4,31))
console.log("valide");
else
console.log("invalide");