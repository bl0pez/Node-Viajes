import { Testimoniales } from "../models/Testimoniales.js";
import { Viajes } from "../models/Viajes.js";
import { validarFormulario } from "../validators/form.js";

const paginaInicio = async(req, res) => {

    //Consultar 3 viajes más recientes

    try {

        const [viajes, testimoniales] = await Promise.all([
            Viajes.findAll({
                limit: 3,
                order: [
                    ['id', 'DESC']
                ]
            }),
            Testimoniales.findAll({
                limit: 3,
                order: [
                    ['id', 'DESC']
                ]
            })
        ]);



        res.render('inicio', {
            title: 'Inicio',
            clase: 'home',
            viajes,
            testimoniales
        });
        
    } catch (error) {
        console.log('Error: ', error);
    }

}

const paginaNosotros = (req, res) => {
    res.render('nosotros', {
        title: 'Nosotros'
    });
}

const paginaViajes = async(req, res) => {
    const viajes = await Viajes.findAll();

    res.render('viajes', {
        title: 'Próximos viajes',
        viajes
    });
}

const paginaDetallesViaje = async(req, res) => {

    const { slug } = req.params;

    try {
        const viaje = await Viajes.findOne({ where: {slug} });

        res.render('viaje', {
            title: viaje.titulo,
            viaje
        });

    } catch (error) {
        console.log('Error: ', error);
    }
}

const paginaTestimoniales =  async(req, res) => {
    try {

        const testimoniales = await Testimoniales.findAll();

        res.render('testimoniales', {
            title: 'Testimoniales',
            testimoniales
        });
    } catch (error) {
        console.log('Error: ', error);
    }
}

const postTestimoniales = async(req, res) => {

    const { nombre, correo, mensaje } = req.body;

    const errors = validarFormulario({nombre, correo, mensaje});

    const testimoniales = await Testimoniales.findAll();

   if(errors.length > 0) {
       res.render('testimoniales', {
           title: 'Testimoniales',
           errors,
           nombre, correo, mensaje,
           testimoniales
       });

       return;
   }

   try {
        await Testimoniales.create({ nombre, correo, mensaje });
        res.redirect('/testimoniales');
   } catch (error) {
    console.log('Error_create: ', error);
   }


}


export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaDetallesViaje,
    paginaTestimoniales,
    postTestimoniales
}