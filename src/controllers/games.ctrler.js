import Game from '../models/gamesModel';
import {
    uploadImage
} from './utils/ctrlerUtils';

// ENDPOINT WELCOME
export const welcome = (req, res) => {
    res.status(200).json({
        ok: true,
        message: 'REST API GAMES WITH SOCKET IO',
        dateTime: "04.10.21"
    })
}

// ENDPOINT TO GET ALL GAMES
export const getAllGames = async (req, res) => {
    try {
        let gameDB = await Game.find({
            disponible: true
        });
        if (!gameDB) {
            return res.json(500).json({
                ok: false,
                message: 'Error Server'
            });
        }
        return res.status(200).json({
            ok: true,
            message: 'success',
            gameDB
        });
    } catch (e) {
        console.log(e)
        return res.status(404).json({
            ok: false,
            message: 'Error server catch',
        });
    }
}

// ENDPOINT INSERT GAME
export const insertGame = async (req, res) => {
    // console.log(req.body, req.file);
    console.log(req.body.nombre);
    console.log(req.file.filename);
    try {
        let imageUp = await uploadImage(req.file.path);
        if (!imageUp.ok) {
            return res.status(404).json({
                ok: false,
                message: 'Error trying to upload image'
            });
        }
        const game = new Game();
        game.nombre = req.body.nombre;
        game.imagen = imageUp.imageUpload.url;
        game.disponible = true;
        let gameDB = game.save();
        if (!gameDB) {
            return res.status(500).json({
                ok: false,
                message: 'Error trying to save to DB server'
            });
        }
        return res.status(200).json({
            ok: true,
            message: 'Success'
        });
    } catch (e) {
        console.log('Error ED INSERT GAME: ', e);
        return res.status(500).json({
            ok: false,
            message: 'Error insert or upload game'
        });
    }

}