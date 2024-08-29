import {registerApplication, start} from 'single-spa'


registerApplication(
    'counter',
    () => import('./packages/counter/src'),
    location => location.pathname === '/counter'
)

registerApplication(
    'todo-list',
    () => import('./packages/todo-list'),
    location => location.pathname === '/todo-list'
)