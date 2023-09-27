const connection = require("./connection");

const getAll = async () => {
    /* usando [] estamos usando um destructor, pegamos nesse caso somente a primeira parte do objeto criado
     nesse caso pegamos somente somente os dados relevantes a table que ciamos no banco*/
    const [tasks] = await connection.execute("SELECT * FROM tasks");
    return tasks;
};

module.exports = {
    getAll,
};
