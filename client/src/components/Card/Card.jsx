import React from "react";



export default function Card({ money, concept, get_into, createdAt, updatedAt, category}) {
  return (
    <div >
      <div>
        <h3>Concept: {concept}</h3>
      </div>
      <div>
        <h5>$: {money}</h5>
      </div>
      <div>
        <h5>Category: {category}</h5>
      </div>
      <div >
      <h5>Ingreso: {get_into}</h5>
      </div>
      <div >
      <h5>Fecha de Creacion: {createdAt}</h5>
      </div>
      <div >
      <h5>Fecha de Modificacion: {updatedAt}</h5>
      </div>
    </div>
  );
}

