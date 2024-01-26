"use client"
import Image from "next/image";
import style from "./pokemon.module.css";
import { useState, useEffect } from "react";
function Pokemon() {
  const [imagen, setImagen] = useState("/vercel.svg");
  const [name, setName]=useState("Nombre");
  const [id, setId]=useState(115);
  //const [type, setType]=useState("type");
  const [height, setHeight]= useState(1);
  const [weight, setWeight]=useState(13);
  const [abilities, setAbilities]=useState("Overgrow, Chlorophyll");
  const (states, setStates)=useState(60);
  const (attack,setAttack)= useState(62);

  const url = "https://pokeapi.co/api/v2/pokemon/115";

  useEffect(() => {
    fetch(url)
      .then(res=> res.json())
      .then(data=> {
        setName(data.species.name),  
        setImagen(data.sprites.front_default),
        setId (data.game_indices.id),
        setHabilidad(data.moves[1].move.name),
       //setType(data.types[0].type.),
        setHeight(data.game_indices.height),
        setAbilities(data.abilities[1].ability.name),
        setStates(data.stats[2].stat.name),
        setAttack(data.)
  });
  }, []);

  return (
    <div className={style.contenedor}>
        <h1>{name}</h1>
        <Image src={imagen} width={325} height={325}/>
        <h1>{id}</h1>
        <div className={style.datos}>
          <p>About</p>
          <div>{type}</div>

        </div>
        
    </div>
  );
}
export default Pokemon;
 
