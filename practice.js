 class Circle{
    radius;
    constructor(radius){
        this.radius=radius;
    }
    getArea(){
        return Math.PI*(this.radius**2);

    }
    getDiameter(){
        return 2*Math.PI*this.radius;
    }
 }
 const c=new Circle(4);
 console.log(c.getArea());
 console.log(c.getDiameter());
