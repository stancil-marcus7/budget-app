import moment from 'moment'

export default [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    //right now
    createdAt: 0  
},{
        id: '2',
        description: 'Rent',
        note: '',
        amount: 109500,
        //four days from now
        createdAt: moment(0).subtract(4, 'days').valueOf()
    }, {
        id: '3',
        description: 'Credit Card',
        note: '',
        amount: 4500,
        //four days into the future
        createdAt:  moment(0).add(4, 'days').valueOf()
    }
];