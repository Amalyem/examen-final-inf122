"use client";
import Image from "next/image";
import style from "./pokemon.module.css";
import { useState, useEffect } from "react";
function Pokemon() {
  const [imagen, setImagen] = useState("/vercel.svg");
  const [name, setName] = useState("Nombre");
  const [id, setId] = useState(115);
  const [type, setType]=useState("type");
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [abilities, setAbilities] = useState("Overgrow, Chlorophyll");
  const [states, setStates] = useState("states");
  const [attack, setAttack] = useState("states");
  const [sped, setSped]= useState()

  const url = "https://pokeapi.co/api/v2/pokemon/115";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setName(data.species.name),
          setImagen(data.sprites.front_default),
          setId(data.game_indices.id),
          setHabilidad(data.moves[1].move.name),
          setType(data.types[0].type.name),
          setHeight(data.game_indices.height),
          setWeight(data.types[0].type.weight)
          setAbilities(data.abilities[1].ability.name),
          setStates(data.stats[2].stat.name),
          setAttack(data.stats[1].stat.name);
      });
  }, []);

  return (
    <div className={style.contenedor}>
      <h1>{name}</h1>
      <Image src={imagen} width={325} height={325} />

      <h1>{id}</h1>
      <h2 className={style.about}>About</h2>
      <div className={style.caja1}>
         
        <p>type</p>
        <p>{type}</p>
        <p>Height</p>
        <p>{height}</p>
        <p>weight</p>
        <p>{weight}</p>
        <p>abilities</p>
        <p>{abilities}</p>
      </div> 
      <div className={style.caja2}>
        
        <p>Hp</p>
        <p>{}</p>
        <p>attack</p>
        <p>{attack}</p>
        <p>Defense</p>
        <p>{}</p>
        <p>speed</p>
        <p>{}</p>

      </div>
    </div>
  );
}
export default Pokemon;
