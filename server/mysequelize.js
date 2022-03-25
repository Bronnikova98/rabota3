const Sequelize = require("sequelize");
// const sequelize = new Sequelize("photographer_portfolio", "root", "21W10I19K98a", {
//     dialect: "mysql",
//     host: "localhost"
// });


const sequelize = new Sequelize(
    'portfolio_photographer',
    'root',
    '21W10I19K98a',
    {
        dialect: 'mysql',
    }
)



export class Message extends Sequelize.Model { }
Message.init({
    id_client: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true

    },
    client_name: {
        type: Sequelize.STRING,
    },
    client_mail: {
        type: Sequelize.STRING,
    },
    client_text: {
        type: Sequelize.TEXT,
    },

},
    {
        sequelize
    })



sequelize.sync()