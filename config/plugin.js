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

exports.oss = {
    enable: true,
    package: 'egg-oss'
};

exports.io = {
    enable: true,
    package: 'egg-socket.io'
};
