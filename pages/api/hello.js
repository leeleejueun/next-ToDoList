// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
let fs = require('fs'); //fs에 있은걸 변수 fs에 넣어 가져오겠다
let db = require('data/db.json')

export default function handler(req, res) {

  const {method,body} =req;
  switch(method){
    case 'GET' : dataGet(); break;
    case 'POST' : dataCreate(); break;
    case 'PUT' : dataUpdate(); break;
    case 'DELETE' : dataDelete(); break;
  }

  function dataGet(){
    res.status(200).json(db);
  }
  function dataCreate(){
    db.push(body);
    saveData();
  }
  function dataUpdate(){
    let newData = db.find(obj => obj.id == body.id);
    Object.assign(newData, body)
    saveData();
  }
  function dataDelete(){
    db=db.filter(obj => obj.id !== body);
    saveData();
  }
  function saveData(){
    fs.writeFileSync('data/db.json', JSON.stringify(db));
    res.status(200).json(db);
  }
}
