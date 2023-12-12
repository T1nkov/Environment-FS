const fs = require("fs");

function getAllData() {
  try {
    const json = fs.readFileSync("./storage.json");
    const arr = JSON.parse(json);
    return arr;
    
  } catch (error) {
    res.status(404).send(error.message);
  }
}

function createData(label, category, priority) {
  try {
    const json = fs.readFileSync("./storage.json");
    const arr = JSON.parse(json);
  
    const newObj = {
      id: label.toLowerCase(),
      label: label,
      category: category,
      priority: priority,
    };
    arr.push(newObj);
    fs.writeFileSync("./storage.json", JSON.stringify(arr));
    return arr;
    
  } catch (error) {
    res.status(404).send(error.message);
  }
}

function updateData(id, label, category, priority) {
  try {
    const json = fs.readFileSync("./storage.json");
    const arr = JSON.parse(json);
  
    const index = arr.findIndex((el) => el.id == id);
    arr[index] = {
      id: id,
      label: label,
      category: category,
      priority: priority,
    };
    fs.writeFileSync("./storage.json", JSON.stringify(arr));
    return arr;
    
  } catch (error) {
    res.status(404).send(error.message);
  }
}

function deleteData(id) {
  try {
    const json = fs.readFileSync("./storage.json");
    const arr = JSON.parse(json);
  
    const filterArr = arr.filter((el) => el.id != id);
    fs.writeFileSync("./storage.json", JSON.stringify(filterArr));
    return filterArr;
    
  } catch (error) {
    res.status(404).send(error.message);
  }
}

module.exports = { getAllData, createData, updateData, deleteData };
