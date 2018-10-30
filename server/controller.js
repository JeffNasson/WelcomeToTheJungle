module.exports={
    // login/logout
    login:(req,res)=>{
        if(req.session.user){
            res.status(200).send(req.session.user);
        } else {
            res.status(401).send('User not found, please login')
        }
    },

    logout:(req,res)=>{
        req.session.destroy();
        res.redirect(`/#/`)
    },

    //departments
    getDepartment:(req,res)=>{
        const db = req.app.get('db');
        const {id} = req.params;

        db.get_departments([id])
            .then(department=>res.status(200).send(department))
            .catch(err=>console.log(err))
    },

    getAllDepartments:(req,res)=>{
        const db = req.app.get('db');
        const all = req.params;
        db.get_all_departments([all])
            .then(departments=>res.status(200).send(departments))
            .catch(err=>console.log(err))
    },

    displayDepartment:(req,res)=>{
        const db = req.app.get('db');
        const {departmentId} = req.params;

        db.display_department([departmentId])
            .then(departmentId=>res.status(200).send(departmentId))
            .catch(err=>console.log(err))
    },

    // items

    displayItem:(req,res)=>{
        const db = req.app.get('db');
        const {id} = req.params;
        console.log(req.params);

        db.get_item([id])
            .then(itemId=>console.log(itemId)||res.status(200).send(itemId))
            .catch(err=>console.log(err))
    }

}