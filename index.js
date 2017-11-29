var mainState = {
    preload: function() {
//        this.game.load.image('player', 'wall.PNG');
        this.game.load.image('wall', 'wall.PNG');
//        this.game.load.image('coin', 'wall.PNG');
//        this.game.load.image('enemy', 'wall.PNG');
    },
    
    create: function() {
        this.game.stage.backgroundColor = '#3598db';
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        game.world.enableBody = true;
        
        this.cursor = this.game.input.keyboard.createCursorKeys();
        
//        this.player = this.game.add.sprite(70, 100, 'player');
        
//        this.player.body.gravity.y = 600;  just don't need this
        
        this.walls = this.game.add.group();
        this.coins = this.game.add.group();
        this.enemies = this.game.add.group();
        
        //x = wall    o = coin    ! = enemy/lava
        
        var level = [
            'xxxxxxxxxxxxxxxxxxxxxxxxxxx',
            'x                         x',
            'x                         x',
            'x   xxxxxx  xx    xxxxxxxxx',        
            'x   x  !x   x             x',
            'x   x   x   x             x',
            'x   x   x   x   xxxxxx    x',
            'x   x  !x   x        x    x',
            'x   x   x   x        x    x',
            'x                xxxxxx   x',
            'xxxxx   x   xxxxxx        x',
            'xxxxx   x   x   x   xxxxxxx',
            'x   x   x   x   x         x',
            'x   xxxxx   x   x         x',
            'x !             x         x',
            'x   x           x   xxxxxxx',
            'x   x   x   x   x         x',
            'x   x   x       x         x',
            'x   x   x       x         x',            
            'x   x   xxxxxxxxx         x',
            'x                         x',
            'x                         x',
            'x                         x',
            'xxxxxxxxxxxxxxxxxxxxxxxxxxx',
        
        
        ];
        
        for (var i = 0; i < level.length; i++) {
            for (var j = 0; j < level[i].length; j++) {

                if (level[i][j] == 'x') {
                    var wall = game.add.sprite(30+20*j, 30+20*i, 'wall');
                    this.walls.add(wall);
                    wall.body.immovable = true; 
                }

                else if (level[i][j] == 'o') {
                    var coin = game.add.sprite(30+20*j, 30+20*i, 'coin');
                    this.coins.add(coin);
                }

                else if (level[i][j] == '!') {
                    var enemy = game.add.sprite(30+20*j, 30+20*i, 'enemy');
                    this.enemies.add(enemy);
                }
            }
        }
    },
    
    update: function() {
        this.game.physics.arcade.collide(this.player, this.walls);

        this.game.physics.arcade.overlap(this.player, this.coins, this.takeCoin, null, this);  //don't need this yet

        this.game.physics.arcade.overlap(this.player, this.enemies, this.restart, null, this);
        
//        if(this.cursor.left.isDown)    
//            this.player.body.velocity.x = -200;
//        else if (this.cursor.right.isDown)
//            this.player.body.velocity.x = 200;
//        else
//            this.player.body.velocity.x = 0;
//        
//        if(this.cursor.up.isDown && this.player.body.touching.down)
//            this.player.body.velocity.y = -250;
    },
    
//    takeCoin: function(player, coin){
//        coin.kill();
//    },

    restart: function() {
        game.state.start('main');
    },
}