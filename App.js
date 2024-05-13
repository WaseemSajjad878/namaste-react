import React from "react"
import ReactDOM from "react-dom/client"

const h1 = React.createElement('h1', { id: 'h1', className: 'asdjasjdajs' }, 'Slaasssm From React!')
const h2 = React.createElement('h2', { id: 'h2', className: 'asdjasjdajs' }, 'Hello World From React!')
const parent = React.createElement('div', { id: 'parent' }, React.createElement('div', { id: 'child' }, [h1, h2]))
const root = ReactDOM.createRoot(document.getElementById('root'))
console.log(root);
root.render(parent)