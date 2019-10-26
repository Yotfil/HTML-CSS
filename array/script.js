const people = [
    {
        name: 'Juan',
        age: 18,
        type: 'male'
    },
    {
        name: 'Jose',
        age: 19,
        type: 'male'
    },
    {
        age: 19,
        name: 'Natalia',
        type: 'female'
    },
    {
        name: 'Tatiana',
        age: 19,
        type: 'female'
    },
    {
        name: 'Camila',
        type: 'female',
        age: 19
    },
    {
        age: 19,
        name: 'Juana',
        type: 'female'
    }
];

const isOverage = (age) => {
    return age >= 18;
};

const peopleCanDrink = () => {
    let personCanDrink = [];

    for (let i = 0; i < people.length; i += 1) {
        // console.log(people[i]);
        let person = people[i];
        // para obtener una propiedad de un objeto se hace como està abajo
        if (isOverage(person.age)) {
            // console.log(person);
            personCanDrink.push(person.name);
        }
    }
    return personCanDrink;
};

// const peopleInGroups = () => {
//     let personCantDrink = [];
//     let personCanDrink = [];
//     for (let i = 0; i < people.length; i += 1) {
//         let person = people[i];
//         if (isOverage(person.age)) {
//             personCanDrink.push(person.name);
//         } else {
//             personCantDrink.push(person.name);
//         }
//     }
//     return [personCantDrink, personCanDrink];
// };

// const allPeopleCanDrink = () => {
//     const personCantDrink = peopleInGroups()[0];
//     if (personCantDrink.length >= 1) {
//         return false;
//     } else {
//         return true;
//     }
// };

// const someoneCanDrink = () => {
//     debugger;
//     const personCanDrink = peopleInGroups()[1];
//     if (personCanDrink.length >= 1) {
//         return true;
//     } else {
//         return false;
//     }
// };
const allPeopleCanDrink = () => {
    const personCanDrink = peopleCanDrink();
    if (personCanDrink.length === people.length) {
        return true;
    } else {
        return false;
    }
};

const someoneCanDrink = () => {
   // debugger;
    const personCanDrink = peopleCanDrink();
    if (personCanDrink.length >= 1) {
        return true;
    } else {
        return false;
    }
};
// TAREA solo usando la funciòn peopleCanDrink hacer funcionar las ultimas dos funciones
