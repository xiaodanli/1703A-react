import React from 'react'

// import Login from '@/views/login'
// import Registry from '@/views/registry'
// import City from '@/views/city'

import Loadable from 'react-loadable'

function Loading(){
    return <div>loading</div>
}

let Login = Loadable({
    loading:Loading,
    loader:() => import('@/views/login')
})

let Registry = Loadable({
    loading:Loading,
    loader:() => import('@/views/registry')
})

let City = Loadable({
    loading:Loading,
    loader:() => import('@/views/city')
})

export const routes = [
    {
        path:'/login',
        component:Login
    },
    {
        path:'/registry',
        component:Registry
    },
    {
        path:'/city',
        component:City
    },
    {
        path:'/',
        redirect:'/city'
    }
]