const app = new Vue ({

    el: '#root',

    data: {

        navbar: [
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
                type: 'navbarButton',
                active: 0
            }
        ]

    }
})