import { gql } from "apollo-boost";

export const searchAllSubjects = gql `
query searchAllSubjects {
    searchAllSubjects{
      nombre
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