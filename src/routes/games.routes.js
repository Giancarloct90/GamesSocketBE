import {
    Router
} from "express";
import {
    welcome,
    getAllGames,
    insertGame
} from '../controllers/games.ctrler';

const router = Router();

// EP WELCOME
router.get('/', welcome);
// EP GET ALL GAMES
router.get('/games', getAllGames);
// EP INSERT GAME
router.post('/games', insertGame);

export default router;