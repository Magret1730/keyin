import { useState, useEffect } from "react";
import "./petList.css";

export function PetList() {
    // const pets = [
    //     { name: "Local", type: "Dog", age: 3 },
    //     { name: "React", type: "Cat", age: 2 }
    // ];

    const [ pets, setPets ] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/api/pets')
            .then((res) => res.json())
            .then((parsedBody) => setPets(parsedBody));
    }, []);

    return (
        <>
            <h1>Adoptable Pets</h1>
            <ul>
                {pets.map((pet, i) => (
                    <li key={i}>{pet.name} ({pet.type}, {pet.age} years old)</li>
                ))}
            </ul>
        </>
    );
}
