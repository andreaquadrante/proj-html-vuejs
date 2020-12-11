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
                logo: 'fab fa-facebook-f',
                type: 'navbarSocial'
            },
            {
                name: 'instagra',
                logo: 'fab fa-instagram',
                type: 'navbarSocial'
            },
            {
                name: 'twitter',
                logo: 'fab fa-twitter',
                type: 'navbarSocial'
            },
            {
                name: 'youtube',
                logo: 'fab fa-youtube',
                type: 'navbarSocial'
            }
        ]

    }
})