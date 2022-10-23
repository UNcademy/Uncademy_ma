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

export const searchSubjectByCode = gql `
query searchSubjectByCode($courseCode : String!) {
  searchSubjectByCode(courseCode:$courseCode){
      nombre
      descripcion
      codigoMateria
      creditos
      cupos
      tipologia
      prerequisitos
    }
  }
`;

