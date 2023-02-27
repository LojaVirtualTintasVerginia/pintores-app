import express from "express";
import { celebrate, Joi } from "celebrate";
import multer from "multer";
import multerConfig from "./config/multer";
import PointsController from "./controllers/PointsController";
import ItemsController from "./controllers/ItemsController";

const routes = express();
const upload = multer(multerConfig);

const pointsController = new PointsController();
const itemsController = new ItemsController();

/** Items */
routes.get("/items", itemsController.index);

/** Points */
routes.get("/points", pointsController.index);
routes.get("/points/:id", pointsController.show);

/** Create Point */
routes.post(
  "/points",
  upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'image2', maxCount: 1 },
  ]),
  celebrate(
    {
      body: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.number().required(),
        resumo: Joi.string().required(),
        cpf: Joi.string().required(),
        city: Joi.string().required(),
        bairro: Joi.string().required(),
        uf: Joi.string().required().max(2),
        link_facebook: Joi.string().required(),
        link_instagram: Joi.string().required(),
        items: Joi.string().required(),
      }),
    },
    { abortEarly: false }
  ),
  pointsController.create
);

export default routes;
