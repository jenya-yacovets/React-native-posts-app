import DB from "./db"

export default async function bootstrap() {
    try {
        await DB.init()
    } catch(error) {
        console.error(error)
    }
}