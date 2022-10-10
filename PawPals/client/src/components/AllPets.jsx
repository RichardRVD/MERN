import React, { useEffect, useState } from 'react'
import { Client } from '@petfinder/petfinder-js';
import { clientID, secretKey, token } from '../apiKeys';
import axios from 'axios';



const AllPets = () => {

    const [allPets, setAllPets] = useState([]);

    const client = new Client({apiKey: clientID, secret: secretKey, token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ0eW5WZURISFNhR0N3WWNsV1ZXVG95U0E2clMyZVd0QVM5TUc2anRrUFV5RXZTOURnaiIsImp0aSI6IjJlNDY0NjA0MDZlY2IzYmQ5NmFhZWFiMDc4ZTIyZjMxYTRhZTkyNzc5M2JhNjU2YTljNTBkZGE4Y2U0MGJiZDdiYzk3MjM5OTAyZjkyOTg4IiwiaWF0IjoxNjYzOTYyNzU1LCJuYmYiOjE2NjM5NjI3NTUsImV4cCI6MTY2Mzk2NjM1NSwic3ViIjoiIiwic2NvcGVzIjpbXX0.nNw1bmN7ghqMFiHLicxry5wAZZpCiGZopXxw7wO0Knj9rIL1QeFMuzNCgjoqfRjeL3HRJHQqlr4D59C9W2WanxyQFKTPde49QtOyLG9rQyZ-lsMWhMP8iK2Of5pXQSJOixZm0PzWo4eqfo_GLjqpZGGsQTmauqr8YAEv8ZUehCjptAHNdEi2V1uj2Yv-othfgQPUtvd2s46mm3RJK8ERHRWycSFznsQMrVFk6Yrisl37MA3oEfAeeTpuN-uFmkOuOTL7LTPF9gnk_8aMkq4R8vX-wbbxQA0_rI6A5u60pmUkXuofSfN2Vl7QYQMa8VvmNTToIZZM1z1PUWNdR48j3g"});

    client.authenticate()
    .then(resp => {
        console.log(resp)
    },[])

    useEffect(() => {
    client.animal.search()
    .then(resp => {
    // Do something with resp.data.animals
    resp.data.animals.forEach(function(animal) {
        console.log(` -- ${animal.name} id: ${animal.id} url: ${animal.url}`);
        console.log(resp.data.animals);
        setAllPets(resp.data.animals)
        axios.post("http://localhost:8000/api/pets/new", animal)
        .then( resp => {
            resp.save()
            console.log(resp.data.animals)
            setAllPets(resp.data.animals)
        })
        .catch(err => console.log(err))
    })

    });
    },[]);

  return (
    <div>
        <h1>All Pets</h1>
        <table>
        <tbody>
            {
                allPets.map((pet, index) => {
                    return (
                        <tr key={index}>
                            <td>{pet.name}</td>
                            <td><img src={pet.photos.map((p, i) => {return (p.medium)})} alt="" /></td>
                            
                        </tr>
                    )
                })
            }
        </tbody>
        </table>
    </div>
  )
}

export default AllPets;