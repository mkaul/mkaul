/**
 * @overview description of the component
 * @version 0.0.1
 * @author mkaul2m Manfred.Kaul@h-brs.de
 * @copyright The MIT License (MIT) mkaul2m on 29.10.18.
 */

class BaseClass {
  constructor(a,b){
    this.x = a;
    this.y = b;
  }
}

const addMethod = function( AnyBaseClass ){
  return class extends AnyBaseClass {
    method() { return this.x + this.y }
  }
};

const ClassWithMethod = addMethod( BaseClass );
const instance = new ClassWithMethod(1,2);

console.log( instance.method() );

 
 
