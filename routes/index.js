import { Router } from "express";
import { paginaDetallesViaje, paginaInicio, paginaNosotros, paginaTestimoniales, paginaViajes, postTestimoniales } from "../controllers/PaginasController.js";

const router = Router();

router.get("/", paginaInicio)


router.get("/nosotros", paginaNosotros)

router.get("/viajes", paginaViajes)
router.get("/viajes/:slug", paginaDetallesViaje)

router.get("/testimoniales", paginaTestimoniales)
router.post("/testimoniales", postTestimoniales)

export default router;