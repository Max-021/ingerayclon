export default [
    {
        path: 'mamografos',
        name: 'Mamógrafos',
        component: () => import('../components/Productos/subcategorias/mamografos.vue'),
        props: {
            slug: 'mamografos'
        }
    },
    {
        path: 'captores-digitales',
        name: 'Captores Digitales',
        component: () => import('../components/Productos/subcategorias/captoresDigitales.vue'),
        props: {
            slug: 'captores-digitales'
        }
    },
    {
        path: 'equipos-sala',
        name: 'Equipos de Sala',
        component: () => import('../components/Productos/subcategorias/equiposSala.vue'),
        props: {
            slug: 'equipos-sala'
        }
    },
    {
        path: 'equipos-sala-digital',
        name: 'Equipos de Sala',
        component: () => import('../components/Productos/subcategorias/equiposSalaDigital.vue'),
        props: {
            slug: 'equipos-sala-digital'
        }
    },
    {
        path: 'equipos-moviles',
        name: 'Equipos Móviles',
        component: () => import('../components/Productos/subcategorias/equiposMoviles.vue'),
        props: {
            slug: 'equipos-moviles'
        }
    },
    {
        path: 'equipos-moviles-digitales',
        name: 'Equipos Móviles',
        component: () => import('../components/Productos/subcategorias/equiposMovilesDigitales.vue'),
        props: {
            slug: 'equipos-moviles-digitales'
        }
    },
    {
        path: 'arcos-c',
        name: 'Arcos en C',
        component: () => import('../components/Productos/subcategorias/arcoc.vue'),
        props: {
            slug: 'arcos-c'
        }
    },
    {
        path: 'arcos-c-digitales',
        name: 'Arcos en C',
        component: () => import('../components/Productos/subcategorias/arcocDigital.vue'),
        props: {
            slug: 'arcos-c-digitales'
        }
    },
    {
        path: 'arcos-c-intervencionista',
        name: 'Arcos en C',
        component: () => import('../components/Productos/subcategorias/arcocIntervencionista.vue'),
        props: {
            slug: 'arcos-c-intervencionista'
        }
    },
    {
        path: 'panel',
        name: 'Flat Panel',
        component: () => import('../components/Productos/subcategorias/paneles.vue'),
        props: {
            slug: 'panel'
        }
    },
    {
        path: 'pacs',
        name: 'PACS',
        component: () => import('../components/Productos/subcategorias/pacs.vue'),
        props: {
            slug: 'pacs'
        }
    },
    {
        path: 'video-digital',
        name: 'Video Digital',
        component: () => import('../components/Productos/subcategorias/videoDigital.vue'),
        props: {
            slug: 'video-digital'
        }
    },
    // {
    //     path: '',
    //     name: '',
    //     component: () => import('../components/Productos/subcategorias/'),
    //     props: {
    //         slug: ''
    //     }
    // },
]