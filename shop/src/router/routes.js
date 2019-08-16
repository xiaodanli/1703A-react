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

let Detail = Loadable({
    loading:Loading,
    loader:() => import('@/views/detail')
}) 

let Create = Loadable({
    loading:Loading,
    loader:() => import('@/views/create')
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
        path:'/detail/:id',
        component:Detail
    },
    {
        path:'/create',
        component:Create
    },
    {
        path:'/',
        redirect:'/city'
    }
]