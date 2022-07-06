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


export default router;