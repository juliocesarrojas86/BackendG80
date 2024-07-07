const Proveedor = require('../models/Proveedor');

//funcion agregar proveedores
exports.agregarProveedores = async (req, res) => {
    try {

        let proveedores;
        proveedores = new Proveedor(req.body);
        await proveedores.save();
        res.send(proveedores);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al agregar un proveedor');
    }
}

// funcion que nos va a mostrar todos proveedores
exports.mostrarProveedores = async (req, res) => {


    try {

        const proveedores = await Proveedor.find();
        res.json(proveedores);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al mostar los proveedores');
    }
}


// funcion que nos va a buscar cliente
exports.buscarProveedores = async (req, res) => {


    try {

        let proveedor = await Proveedor.findById(req.params.id);

        if (!proveedor) {
            res.status(404).json({ msg: 'Nose encuentra el proveedor' });
        } else {
            res.json(proveedor);
        }


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al consultar el proveedor');
    }
}
 
// funcion que nos va actualizar proveedor
exports.actualizarProveedores = async (req, res) => {
    try {
        const proveedor = await Proveedor.findOneAndUpdate(
            { _id: req.params.id }, req.body);

        if (!proveedor) res.status(404).send("Proveedor no encontrado");
        else
            res.json(proveedor);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al actualizar el proveedor");
    }
};


 // funcion que nos va modificar proveedor  
exports.modificarProveedores = async (req, res) => {
    try {
        const proveedor = await Proveedor.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!proveedor) {
            return res.status(404).send('Proveedor no encontrado');
        }
        res.json(proveedor);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al modificar el proveedor');
    }
};


// funcion que nos va a eliminar proveedor
exports.eliminarProveedores = async (req, res) => {
    try {

        let proveedores = await Proveedor.findById(req.params.id);
        if (!proveedores) {
            res.status(404).json('proveedor no encontado');
        } else {
            await Proveedor.findOneAndDelete({ _id: req.params.id });
            res.json({ msg: 'El proveedor ha sido eliminado' });
        }


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al eliminar el proveedor');
    }
}

   