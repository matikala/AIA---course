import Database from 'better-sqlite3'
const db = new Database('cars.db')

export const resetDatabase = () => {
    db.exec(`
    drop table if exists cars;
    create table cars (id integer primary key autoincrement, name text not null, price int not null);
    
    insert into cars (name, price) values ('Ferarri 458 Italia', 30000);
    insert into cars (name, price) values ('Lamborghini Aventador SVJ', 50000);
    insert into cars (name, price) values ('Aston Martin DB11', 40000);
    insert into cars (name, price) values ('Maserati Gran Turismo', 60000);
    insert into cars (name, price) values ('Ferrari LaFerrari', 100000);
    insert into cars (name, price) values ('BMW M8', 25000);
    `)
}

export const getAllCars = () => {
    return db.prepare(`select * from cars;`).all()
}

export const getCarsByID = (cart) => {
    return db.prepare(`select * from cars where id in (${cart.join(',')});`).all()
}

const transaction = db.transaction((ids) => {
        for (const id of ids) {
        const car = db.prepare(`select * from cars where id = ?;`).get(id)
        if (!car) throw new Error()
        else db.prepare(`delete from cars where id = ?;`).run(id)
    }
})

export const buy = (cars) => transaction(cars)

