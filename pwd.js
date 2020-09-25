
 let pwd =  `${process.cwd()}`;
 
module.exports =  () => {
    console.log(pwd)
    process.stdout.write("prompt > ");
}