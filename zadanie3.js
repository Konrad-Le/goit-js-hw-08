try{
    const data = JSON.parse("Test, of the west");
}
catch(error){
    console.log(error.name);
    console.log(error.message);
}
