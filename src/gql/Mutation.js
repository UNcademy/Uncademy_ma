import { gql } from "apollo-boost";

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