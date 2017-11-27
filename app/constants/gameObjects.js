import * as objectsStyles from '../styles/gameObjects.scss';

let objects = [];

if (process.env.NODE_ENV === 'production') {
    objects = [
        {
            id: 1,
            style: objectsStyles.black_100
        },
        {
            id: 2,
            style: objectsStyles.blue_100
        },
        {
            id: 3,
            style: objectsStyles.green_100
        },
        {
            id: 4,
            style: objectsStyles.red_100
        },
        {
            id: 5,
            style: objectsStyles.yellow_100
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
