document.addEventListener('DOMContentLoaded', () => {
    // let value = 'I am butterfly';

    // if (value === 'Hello World') {
    //     console.log(value);
    // } else {
    //     console.log(`Not 'Hello World'`);
    // }


    //ternary operator
    // value === 'Hello World' ? console.log(value) : console.log
    //     (`Not 'Hello World'`)

    // indexOF()
    // const names = ['Sati', 'Azem', 'Eli', 'Arlen', 'Azem', 'Eli', 'Azem'];

    // console.log(names.indexOf('Azem'));



    // const array = ['Apple', 'orange', 'Kivi'];
    // const obj = { name: 'Arlen' };
    // const num = 34567;

    // console.log(Array.isArray(obj) ? obj.map((item) => console.log(item)) : consolel.log('is not arrey'));



    //join()
    // const array = ['Bmw', 'Matis', 'Lexus'];

    // console.log(array.join()); //Bmw,Matis,Lexus
    // console.log(array.join(', '));
    // console.log('I love ' + array.join(' i love') + '.');
    //I love Bmw I love Matis I love Lexus.



    //keys()
    // const array = ['Book', 'Magazine', 'Newspaper'];
    // const keys = array.keys();

    // console.log(keys);
    // for (const sati of keys) {
    //     console.log('🐎', azem);
    // }



    //lastIndexOf()
    // const array = ['Red', 'Bule', 'Green', 'Orenge', 'Red',
    //     'Green'];

    // console.log('🦀', Array.lastIndexOf('Red'));



    //of()
    // const array = [
    //     {
    //         name: 'Azem',
    //         student: 1,
    //     },
    //     {
    //         name: 'Eli',
    //         student: 2,
    //     },
    // ];

    // const newArr = Array.of();

    // array.map((item) => {
    //     return newArr.push(item);
    // });


    // console.log(Array.of('red', 'blue', 'white'));



    //pop()
    // const array = ['Arlen', 'Sati', 'Abay'];

    // console.log(array.pop());
    // console.log(array);


    // //push
    // const array = ['Arlen', 'Sati', 'Abay'];
    // array.push('Oroz');
    // console.log(array);


    //reduce;
    const arrayOfNumbers =[1, 2, 3];  

    const newValue = arrayOfNumbers.reduce((acc, value) => {
     acc * value});

    console.log(newValue);

});