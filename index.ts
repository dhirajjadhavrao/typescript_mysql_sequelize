import express from 'express';

const app = express();

const port = 3000;

import db from './models';
import { projects } from './seeders/Project';



db.sequelize.sync().then(()=>{
    app.listen(port, ()=>{
        console.log(`App is running on ${port}`);
    })
})


app.get('/', (req, res) => {
    db.User.findAll({
        include:{
            model: db.Project
        }
    }).then((result: object) => { res.json(result)})
    .catch((err: any)=> res.send(err));
})


/* Accessing data from table */
/*db.User.findAll({
    include:{
        model: db.Project
    }
}).then((result: object) => { console.log(JSON.stringify(result))})
.catch((err: any)=>console.error(err));
*/

/* //Calling Seeder methods
import { projectAssignments } from './seeders/ProjectAssignments';
const createProjectAssignment = () => {
    projectAssignments.map( pa => {
        db.ProjectAssignments.create(pa);
    })
}
createProjectAssignment();

import { projects } from './seeders/Project';
const createProjects = () => {
    projects.map( project => {
        db.Project.create(project);
    })
};

createProjects();

import { users } from './seeders/User'
const createUsers = () => {
    users.map( (user) => {
        db.User.create(user);
    })
}

createUsers();
*/