import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.render('inicio', {
        title: 'Inicio'
    });
})


router.get("/nosotros", (req, res) => {
    res.render('nosotros', {
        title: 'Nosotros'
    });
})

router.get("/viajes", (req, res) => {
    res.render('viajes', {
        title: 'Viajes'
    });
})

router.get("/testimoniales", (req, res) => {
    res.render('testimoniales', {
        title: 'Testimoniales'
    });
})

export default router;