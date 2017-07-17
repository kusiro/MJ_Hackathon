import parallaxer from 'parallaxer';
parallaxer([{
     element: $(".infocard")[0],
     distance: .5,
     offset: 900,
     stick: false,
    },{
        element: $(".block_1_img")[0],
        distance: 6,
    },{
        element: $(".block_2_img")[0],
        distance: 6,
        offset: 500,
    },
]);
