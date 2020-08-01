module.exports = {
    time: (req, res, next) => {
        const start = new Date()
        res.on("finish", () => {
            const end = new Date()
            const responseTime = end - start
            console.log(`${end.toLocaleString()} | ${req.method} from ${req.url} | total time: ${responseTime}ms`)
        })
    }
}
