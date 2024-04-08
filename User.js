// repository/UserRepository.js
const User = require('../models/User');
const BaseRepository = require('./BaseRepository');

class UserRepository extends BaseRepository {
    constructor() {
        super(User);
    }

    // Se houver métodos específicos para o modelo User, você pode adicioná-los aqui.
}

module.exports = new UserRepository();
