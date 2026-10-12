class planet
{
    constructor (name,fact)
    {
        this.name = name;
        this.fact = fact;
    }
    describe()
    {return this.name + ":" + this.fact;}
}

let p1= new planet ("Earth", "The only known planet with life");
document.getElementById("planet1").innerHTML=p1.describe()
let p2= new planet ("Mercury", "The smallest planet");
document.getElementById("planet2").innerHTML=p2.describe()
let p3= new planet ("Jupiter", "The Largest planet");
document.getElementById("planet3").innerHTML=p3.describe()
