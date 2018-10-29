/**
 * @overview description of the component
 * @version 0.0.1
 * @author mkaul2m Manfred.Kaul@h-brs.de
 * @copyright The MIT License (MIT) mkaul2m on 28.10.18.
 */

// iterate over values of an Array
console.log( 'x of [1,2,3]' );
for (const x of [1,2,3]){
  console.log( x ); // -> 1,2,3
}

// iterate over values of an Object
console.log( 'x of { a:1, b:2 }' );
for (const x of Object.values({ a:1, b:2 })){
  console.log( x ); // -> 1,2
}

// iterate over keys of an Array
console.log( 'x in ["a","b","c"]' );
for (const x in ["a","b","c"]){
  console.log( x ); // -> 0,1,2
}

// iterate over keys of an Object
console.log( 'x in { a:1, b:2 }' );
for (const x in Object.keys({ a:1, b:2 })){
  console.log( x ); // -> a,b
}

// iterate over a range of numbers
console.log( 'i=0; i<3; i++' );
for (let i=0; i<3; i++){
  console.log( i ); // 0,1,2
}



