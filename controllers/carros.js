import carros  from '../models/carros';

var controller = {
    addCar: async(req, res) => {
       const { modelo, color, año, precio, email, descripcion } = req.body;

       try{
            const newCar = await carros.create({
                modelo,
                color,
                año,
                precio,
                email,
                descripcion
            }, {
                fields: ['modelo', 'color', 'año','precio','email','descripcion']
            });
        
            if(newCar){
                return res.status(200).json({
                    mensaje: "carro agregado",
                    data: newCar
                });
            }

       }catch(error){
            res.status(500).json({
                mensaje: "error servidor",
                data: {}
            });
       }  
    },
    getCars: async(req,res) => {
        
        try{
            const Cars = await carros.findAll();

            if(Cars){
                return res.status(200).json({
                    data: Cars
                });
            }

        }catch(error){
            res.status(500).json({
                mensaje: "error servidor",
                data: {}
            });
        }

    },
    updateCar: async(req, res) => {

        const { idCar, modelo, color, año, precio, email, descripcion} =  req.body;

        try{
            const updateCar = await carros.update({
                modelo, color, año, precio, email, descripcion
            },{
                where: {
                    id:idCar
                }
            });

            if(updateCar){
                return res.status(200).json({
                    mensaje: "información actualizada",
                    data: updateCar
                });
            }

        }catch(error){
            res.status(500).json({
                mensaje: "error servidor",
                data: {}
            });
        }
    },
    deleteCar: async(req, res) => {
        const { idCar } = req.params;
        
        try{

            const deleteCar =  await carros.destroy({
                where:{
                    id: idCar
                }
            });

            if(deleteCar){
                return res.status(200).json({
                    mensaje:"información eliminada"
                });
            }

        }catch(error){
            console.log(error);
            res.status(500).json({
                mensaje: "error servidor"
            });
        }
    }
}

export default controller;