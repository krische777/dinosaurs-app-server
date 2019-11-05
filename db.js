const Sequelize = require('sequelize')

const databaseUrl = process.env.DATABASE_URL || 'postgres://postgres:final-app@localhost:5432/postgres'

const db = new Sequelize((databaseUrl))

db.sync({force: true})
    .then(()=> {
        console.log('database synced')
        const Dinosaur=require('./dinosaur/model')
        Dinosaur.create({
            dinosaurName: 'Epidendrosaurus',
            dinosaurPic: "http://images.dinosaurpictures.org/Epidendrosaurus_FI_pano-940x470_eca3.jpg",
        });
        Dinosaur.create({
            dinosaurName: 'Azhdarcho',
            dinosaurPic: "http://images.dinosaurpictures.org/azhdarcho_lres_by_olorotitan-d66muhd_e1f8.jpg",
        });
        Dinosaur.create({
            dinosaurName: 'Jinfengopteryx',
            dinosaurPic: "http://images.dinosaurpictures.org/jinfengopteryx_elegans_by_rah_bop-d5qjlco_d3b1.jpg",
        });
        Dinosaur.create({
            dinosaurName: 'Kulindadromeus',
            dinosaurPic: "http://images.dinosaurpictures.org/kulindadromeus_zabaikalicus_by_nachiii-d88j6df_fd50.jpg",
        });
        Dinosaur.create({
            dinosaurName: 'Mosasaurus',
            dinosaurPic: "http://images.dinosaurpictures.org/mosasaurus_hoffmani_by_olorotitan-d4esmfm_5c48.jpg",
        });
        Dinosaur.create({
            dinosaurName: 'Sciurumimus',
            dinosaurPic: "http://images.dinosaurpictures.org/Sciurumimus_20120929_4_ca91.jpg",
        });
        Dinosaur.create({
            dinosaurName: 'Einiosaurus',
            dinosaurPic: "http://images.dinosaurpictures.org/einiosaurus-4_cace.jpg",
        });
    })
    .catch(console.error)

module.exports = db