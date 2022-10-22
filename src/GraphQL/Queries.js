import {gql} from '@apollo/client';

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