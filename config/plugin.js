'use strict';

// had enabled by egg
// exports.static = true;
exports.validate = {
    enable: true,
    package: 'egg-validate',
};

exports.sequelize = {
    enable: true,
    package: 'egg-sequelize'
};

exports.jwt = {
    enable: true,
    package: 'egg-jwt'
};

exports.io = {
    enable: true,
    package: 'egg-socket.io'
};
