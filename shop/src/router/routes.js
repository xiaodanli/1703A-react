import React from 'react'

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

let Goods = Loadable({
    loading:Loading,
    loader:() => import('@/views/goods')
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
        path:'/goods/:id',
        component:Goods
    },
    {
        path:'/',
        redirect:'/city'
    }
]