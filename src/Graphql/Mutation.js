import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser(
    $FirstName: String!
    $SecondName: String!
    $Email: String!
    $MobileNumber: Int!
    $DOB: Int!
  ) {
    createUser(
        FirstName: $FirstName
        SecondName: $SecondName
        Email: $Email
        MobileNumber: $MobileNumber
        DOB: $DOB
    )
  }
`;
