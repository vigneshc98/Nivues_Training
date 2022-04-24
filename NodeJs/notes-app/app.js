// 9.writing and appending text to a File.
// const fs = require('fs');
// fs.writeFileSync('notes.txt','Hello world!');
// fs.appendFileSync('notes.txt','Hello world2!');


// 10.importing from another file
// const note = require('./notes');
// const hold = note();
// console.log(hold.note1,' ',hold.note2);

// 11.importing from the validator package from node_module
// //const validator = require('validator'); will not work because added "type":"module" in package.json.
// import validator from 'validator'
// console.log(validator.isEmail('vig@gmail.com'));
// console.log(validator.isURL('vig@gmailcom'));

// 12.using chalk
// import chalk from "chalk";
// console.log(chalk.red('error found...'));
// console.log(chalk.green('successfull'));

// 15. command line argument
// const hold = process.argv;
// console.log(hold);
    // O/P: > node app.js Hello --title="welcome back"  
    //      >   [
                // 'C:\\Program Files\\nodejs\\node.exe',
                // 'D:\\Nivues_Solutions\\NodeJs\\notes-app\\app.js',
                // 'Hello',
                // '--title=welcome back'
              // ]

// 16. using yargs instead of process.argv (part:1)
    // const yargs = require('yargs');
    // console.log(yargs.argv);
        // O/P: > node app.js Hello --title="welcome back"  
        //      > { _: [ 'Hello' ], title: 'welcome back', '$0': 'app.js' }

    //change the version
    // yargs.version('1.1.0');

// 17. using yargs instead of process.argv (part:2)
    //create 'add' command
    // const yargs = require('yargs');
    // yargs.command({
    //     command:'add',
    //     describe:'add a note',
    //     builder: {
    //         title:{
    //             describe:'note title',
    //             demandOption:true, //required
    //             type:'string'
    //         }
    //     },
    //     handler:function (argv){
    //         console.log('adding a note :-',argv);
    //     }
    // })
    // // O/P: > node app.js add --title="this is title"
    // //      > adding a note :- { _: [ 'add' ], title: 'this is title', '$0': 'app.js' }

    // //create remove command
    // yargs.command({
    //     command:'remove',
    //     describe:'remove a note',
    //     builder:{
    //         //set up body option and configure description, make it required, and make its type string.
    //         body:{
    //             describe:'body of remove',
    //             demandOption:true,
    //             type:'string'
    //         }
    //     },
    //     handler:function (argv){
    //         console.log('body:'+argv.body);
    //     }
    // })
    // // O/P: > node app.js remove --body="this is body"
    // //      > body:this is body
    // yargs.parse();


