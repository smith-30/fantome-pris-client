import * as objectsStyles from '../styles/gameObjects.scss';

let objects = [];

if (process.env.NODE_ENV === 'production') {
    objects = [
        {
            id: 1,
            style: objectsStyles.ghost
        },
        {
            id: 2,
            style: objectsStyles.bottle
        },
        {
            id: 3,
            style: objectsStyles.mouse
        },
        {
            id: 4,
            style: objectsStyles.chair
        },
        {
            id: 5,
            style: objectsStyles.book
        },
    ];
} else {
    objects = [
        {
            id: 1,
            style: objectsStyles.dev_ghost
        },
        {
            id: 2,
            style: objectsStyles.dev_bottle
        },
        {
            id: 3,
            style: objectsStyles.dev_mouse
        },
        {
            id: 4,
            style: objectsStyles.dev_chair
        },
        {
            id: 5,
            style: objectsStyles.dev_book
        },
    ];
}

export default objects;
