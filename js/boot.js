var Jumpup = Jumpup || {};

Jumpup.Boot = function (game) {
};

Jumpup.Boot.prototype = {

    preload: function () {

        this.load.image('logo', 'assets/photonstorm.png');
        this.load.image('preload', 'assets/preload.png');

    },

    create: function () {
        this.state.start('Preloader');
    }

};