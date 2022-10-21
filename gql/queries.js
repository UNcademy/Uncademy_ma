import {gql} from "apollo-boost";
export const login=gql `
query login($username:USERNAME!, $password:PASSWORD!){
    login(username:$username, password:$password){
        statusCode
        method
        message
        data
    }
}`;