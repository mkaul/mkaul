/**
 * @overview description of the component
 * @version 0.0.1
 * @author mkaul2m Manfred.Kaul@h-brs.de
 * @copyright The MIT License (MIT) mkaul2m on 29.10.18.
 */

const s = `In JavaScript '\n' is a line-feed.`

// Multiline ES6 Backtick strings
const t =  `In JavaScript this is
 not legal.`

// ES6 Backtick string interpolation
const name = "Bob", time = "today";
console.log( `Hello ${name}, how are you ${time}?` );

// even with expressions to be evaluated
console.log( `The time is ${new Date().toLocaleTimeString()}.` );

// Tagged Template Literals
function myTag(strings, person, age) {

  console.log( strings ); // [ 'that ', ' is a ', '.' ]

  return strings.slice(0,-1).join( person ) + ( age > 99 ? 'centenarian' : 'youngster' ) + strings.slice(-1);

}

console.log( myTag`that ${ 'Mike' } is a ${ 28 }.` );

POST`http://foo.org/bar?a=${a}&b=${b}
     Content-Type: application/json
     X-Credentials: ${credentials}
     { "foo": ${foo},
       "bar": ${bar}}`(myOnReadyStateChangeHandler);

function POST(strings, a, b, credentials, foo, bar){
  return function(myOnReadyStateChangeHandler){
    fetch(new Request( strings[0] + a + strings[1] + b ), {
      method: 'POST',
      body: { foo: foo, bar: bar},
      headers:{
        'Content-Type': 'application/json',
        'X-Credentials': credentials
      }
    });
  }
}

 
 
