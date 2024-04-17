class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        this.leftArmX = 400;
        this.leftArmY = 400;
        this.rightArmX = 210;
        this.rightArmY = 400;
        this.leftLegX = 370;
        this.leftLegY = 480;
        this.rightLegX = 220;
        this.rightLegY = 480;
        this.eyeX = 300;
        this.eyeY = 340;
        this.mouthX = 300;
        this.mouthY = 400;
        this.fangsX = 300;
        this.fangsY = 400;
        this.leftHornX = 350;
        this.leftHornY = 280;
        this.rightHornX = 245;
        this.rightHornY = 280;
        this.antX = 310;
        this.antY = 245;
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        //body
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_redD.png");
        //legs
        my.sprite.leftLeg = this.add.sprite(this.leftLegX, this.leftLegY, "monsterParts", "leg_redA.png");
        my.sprite.rightLeg = this.add.sprite(this.rightLegX, this.rightLegY, "monsterParts", "leg_redB.png");
        my.sprite.rightLeg.flipX = true;
        //arms
        my.sprite.leftArm = this.add.sprite(this.leftArmX, this.leftArmY, "monsterParts", "arm_blueA.png");
        my.sprite.rightArm = this.add.sprite(this.rightArmX, this.rightArmY, "monsterParts", "arm_blueB.png");
        my.sprite.rightArm.flipX = true;
        //eyes
        my.sprite.eye = this.add.sprite(this.eyeX, this.eyeY, "monsterParts", "eye_cute_light.png");
        //mouth
        my.sprite.mouth = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouth_closed_happy.png");
        my.sprite.fangs = this.add.sprite(this.fangsX, this.fangsY, "monsterParts", "mouthE.png");
        my.sprite.fangs.visible = false;
        //horns
        my.sprite.leftHorn = this.add.sprite(this.leftHornX, this.leftHornY, "monsterParts", "detail_white_horn_large.png");
        my.sprite.rightHorn = this.add.sprite(this.rightHornX, this.rightHornY, "monsterParts", "detail_white_horn_small.png");
        my.sprite.rightHorn.flipX = true;
        //ant
        my.sprite.ant = this.add.sprite(this.antX, this.antY, "monsterParts", "detail_white_antenna_small.png");

        

        this.input.keyboard.on("keydown", function(event) {
            // console.log(event.code);
            if(event.code == "KeyF") {
                my.sprite.fangs.visible = true;
                my.sprite.mouth.visible = false;
            }
            if(event.code == "KeyS") {
                my.sprite.fangs.visible = false;
                my.sprite.mouth.visible = true;
            }
            if(event.code == "KeyA") {
                for (const part in my.sprite) {
                    console.log(part);
                    my.sprite[part].x -= 5;
                    
                }
            }
            if(event.code == "KeyD") {
                for (const part in my.sprite) {
                    console.log(part);
                    my.sprite[part].x += 5;
                    
                }
            }
        });

    }

    update() {
        let my = this.my;    // create an alias to this.my for readability 
    }
}