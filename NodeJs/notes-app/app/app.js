const hold = require('./notes.js');
const yargs = require('yargs');

yargs.command({
    command:'add',
    describe:'add a note',
    builder: {
        title:{
            describe:'note title',
            demandOption:true, //required
            type:'string'
        },
        body:{
            describe:'note body',
            demandOption:true, //required
            type:'string'
        }
    },
    handler:function (argv){
        hold.add(argv.title, argv.body);
    }
});

yargs.command({
    command:'remove',
    describe:'remove a note',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'
        }
    },
    handler: function(argv){
        hold.remove(argv.title);
    }
});

yargs.command({
    command:'update',
    describe:'update a note',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'
        },
        updateTitle:{
            describe:'update note title',
            demandOption:true,
            type:'string'
        },
        updateBody:{
            describe:'update note body',
            demandOption:true,
            type:'string'
        }
    },
    handler: function (argv){
        hold.update(argv.title,argv.updateTitle,argv.updateBody);
    }
});

yargs.command({
    command:'read',
    describe:'read a note',
    handler: function (){
        hold.read();
    }
});

yargs.command({
    command:'find',
    describe:'find a note',
    builder:{
        title:{
            describe:'find a note',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        hold.find(argv.title)
    }
})

yargs.parse();
