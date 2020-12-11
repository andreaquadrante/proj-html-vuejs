const app = new Vue ({

    el: '#root',

    data: {

        headerMenu: 
        [
            {
                name: 'home',
                type: 'navbarItem',
                active: 1
            },
            {
                name: 'mission',
                type: 'navbarItem',
                active: 0
            },
            {
                name: 'causes',
                type: 'navbarItem',
                active: 0
            },
            {
                name: 'journal',
                type: 'navbarItem',
                active: 0
            },
            {
                name: 'donate',
                type: 'navbarCta',
                active: 0
            }
        ],

        footerMenu: 
        [
            {
                name: 'facebook',
                logo: '<i class="fab fa-facebook-f"></i>',
                type: 'navbarSocial'
            },
            {
                name: 'instagran',
                logo: '<i class="fab fa-instagram"></i>',
                type: 'navbarSocial'
            },
            {
                name: 'twitter',
                logo: '<i class="fab fa-twitter"></i>',
                type: 'navbarSocial'
            },
            {
                name: 'youtube',
                logo: '<i class="fab fa-youtube"></i>',
                type: 'navbarSocial'
            }
        ]

    }
})