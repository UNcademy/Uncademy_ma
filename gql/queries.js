import {gql} from "apollo-boost";
export const login=gql `
query login($username:String!, $password:String!){
    login(loginBody:{
        username: $username,
        password: $password
      }){
        statusCode
        method
        message
        data{accessToken}
    }
}`;
export const register=gql `
mutation register($user_name:String!, $password:String!, $user_type: String!, $full_name: String!,
    $document: Int!, $dep_document: String!, $city_document: String!, $program: String!,
    $genre: String!, $email: String!, $un_mail: String!, $birth_place: String!, $cel: Int!, $age: Int!, 
    $country: String!, $blood_type: String!, $address: String!, $army_card: Boolean!){
    register(registerBody: {
        user_name: $user_name, 
        password: $password, 
        user_type: $user_type, 
        full_name: $full_name, 
        document: $document,
        dep_document: $dep_document, 
        city_document: $city_document,
        program: $program,
        genre: $genre, 
        email: $email, 
        un_mail: $un_mail, 
        birth_place: $birth_place, 
        cel: $cel,
        age: $age,
        country: $country, 
        blood_type: $blood_type, 
        address: $address, 
        army_card: $army_card 
      }){
        statusCode
        method
        message
    }
}`;
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
export const updateProfile = gql `
mutation updateProfile($username:String!, $Email:String!, $Cel:Float!, $Tel:Float!, $Address:String!){
  updateProfile(username:$username, profile:{
    Email:$Email
    Cel:$Cel
    Tel:$Tel
    Address:$Address
  }){
    data{
      UserName
      UNMail
      Cel
    }
  }
}
`