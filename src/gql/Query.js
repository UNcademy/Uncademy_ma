import { gql } from "apollo-boost";

export const searchAllSubjects = gql `
query searchAllSubjects {
    searchAllSubjects{
      nombre
      descripcion
      codigoMateria
    }
  }
`;
