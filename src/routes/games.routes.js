import {
    Router
} from "express";
import {
    welcome,
    getAllGames,
    insertGame,
    deleteGame
} from '../controllers/games.ctrler';

const router = Router();

// EP WELCOME
router.get('/', welcome);
// EP GET ALL GAMES
router.get('/games', getAllGames);
// EP INSERT GAME
router.post('/games', insertGame);
// EP DELETE GAME
router.put('/games', deleteGame);

export default router;