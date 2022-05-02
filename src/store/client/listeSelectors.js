import {createSelector} from 'reselect'
import { filterSelector } from './filterSelector';

export const listeSelector = ({liste}) => liste

export const filterListeSelector = createSelector(
    listeSelector,
    filterSelector,
    (liste, filter) => {
        if(filter == null) {
            return liste
        }
        return liste.filter( user => user.admin == filter)
    }
)

// export const filterListeSelector = ({liste , filter}) => {
//     if(filter == null) {
//         return liste
//     }
//     return liste.filter( user => user.admin == filter)
// }