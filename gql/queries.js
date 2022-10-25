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