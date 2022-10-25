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


export const viewProfile = gql `
query viewProfile($username : String!) {
  viewProfile(username:$username){
    data{
      UserName
	    UserType 
	    FullName
	    Document
	    Email
	    DepDocument
	    CityDocument
	    Genre
	    Cel
	    Tel
	    Age
	    BirthPlace
	    Country
	    BloodType
	    Address
	    ArmyCard
	    MotherFullName
	    MotherDocument
	    FatherFullName
	    FatherDocument
    }
  }
}
`

export const getAllAcademic = gql`
    query getAllAcademic {
        getAllAcademic {
        userId
        semestre
        creditosInscritos
        creditosAprobados
        creditosPendientes
        creditosCursados
        creditosCancelados
        papa
        pa
        pappi
        avance
        }
    }
`;

export const GETRECORD = gql`
    query getAcademic($id: ID!) {
        getAcademic(id: $id) {
        userId
        semestre
        creditosInscritos
        creditosAprobados
        creditosPendientes
        creditosCursados
        creditosCancelados
        papa
        pa
        pappi
        avance
        }
    }
`;

export const GET_COURSES = gql`
    query getMaterias($id: String!) {
        getMaterias(id: $id) {
        materiaId
        tipologia
        nombre
        nota
        aprobado
        creditos
        }
    }
`;