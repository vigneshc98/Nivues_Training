const fs = require('fs');
const chalk = require('chalk')

const add = (title, body) => {
    const data = loadData();
    if( !checkRepeatedData(data,title) ){
        data.push({
            "title":title,
            "body":body
        });
        saveData(data);
        console.log(chalk.green('note added successfully'));
    }else{
        console.log(chalk.red("Can't add duplicate note!!!"));
    }
}

const remove = (title) => {
    const data = loadData();

    if(checkRepeatedData(data,title)){
        //using filter
        const res = data.filter((d)=> {return d.title!=title})
        console.log(res);
        saveData(res);

        // VC method
        // data.forEach((d,i)=> {
        //     if(d.title===title){
        //         data.splice(i,1);
        //     }
        // });
        // saveData(data);
        console.log(chalk.green(`Succesfully removed titile:${title}`));
    }else{
        console.log(chalk.inverse.red(`title '${title}' doesnt exists!`));
    }
}

const update = (title,update_title,update_body)=>{
    const data = loadData();

    if(checkRepeatedData(data,title)){
        data.forEach((d,i)=> {
            if(d.title===title){
                d.title=update_title;
                d.body=update_body;
            }
        });
        saveData(data);
        console.log(chalk.green(`title updated successfully`));
    }else{
        console.log(chalk.inverse.red(`title '${title}' doesnt exists!`));
    }
}

const read = () => {
    const buffer_data = fs.readFileSync('notes.json');
    const readable = buffer_data.toString();
    const parse = JSON.parse(readable);
    parse.forEach((d,i)=>{
        console.log(`${chalk.blue(i+1)}. ${chalk.green('Title')} :${d.title} ${chalk.green('Body')}:${d.body}`);
    })
}

const find = (title) => {
    const data = loadData();
    const res_note = data.find((d)=> d.title===title);

    debugger

    if(res_note){
        console.log(`Title:${res_note.title} Body:${res_note.body}`);
    }else{
        console.log(chalk.red('Cant find the title!!!'));
    }
}

const loadData = ()=> {
    try {
        const buffer = fs.readFileSync('notes.json');
        const strigify = buffer.toString();
        return JSON.parse(strigify);
    } catch (error) {
        return [];
    }
}

const saveData = (data) => {
    const strigify = JSON.stringify(data);
    fs.writeFileSync('notes.json',strigify);
}

const checkRepeatedData = (data, title) => {
    // VC method
    // let flag = false;
    // data.map((d)=>{ 
    //     if(d.title===title){
    //         console.log('inside:',d.title===title);
    //         flag=true;
    //     }
    // })
    // return flag;

    const res = data.filter((d)=>{ return d.title===title}); //filter will return an array if condition is true.
    if(res.length==0){
        return false;
    }else{
        return true;
    }
}
module.exports = {
                    'add':add,
                    'remove':remove,
                    'update':update,
                    'read':read,
                    'find':find
                };