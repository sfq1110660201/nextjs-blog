import { AppDataSource } from "./data-source";

async function getDataSource() {
    try {
        if(!AppDataSource.isInitialized) {
            await AppDataSource.initialize();
            console.log('AppDataSource.initialize success');
        }
    } catch (error) {
        console.log('AppDataSource.initialize', error);
    }
    return AppDataSource;
}

export default getDataSource;
