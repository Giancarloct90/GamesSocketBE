export const welcome = (req, res) => {
    res.status(200).json({
        ok: true,
        message: 'REST API GAMES WITH SOCKET IO',
        dateTime: "04.10.21"
    })
}