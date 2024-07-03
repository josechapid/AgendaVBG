const fs = require ("fs")
const path = require ("path")
const {Workshops} = require ("../src/db")

const loadWorkshops = async ()=> {
    const filePath = path.join(__dirname, "../api", "workshops.json")
    const data = fs.readFileSync(filePath, "utf8")
    const workshops = JSON.parse(data)

    for (const workshop of workshops) {
        await Workshops.create(workshop)
    }
    console.log("Talleres cargados exitosamente")
}
module.exports= loadWorkshops