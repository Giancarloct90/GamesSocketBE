import {
    Router
} from "express";
import {
    welcome
} from '../controllers/games.ctrler';

const router = Router();

router.get('/', welcome);

export default router;