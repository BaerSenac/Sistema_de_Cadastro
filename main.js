"use strict";

// Janela para novo registro
const openModal = () =>
  document.getElementById("modal").classList.add("active");

const closeModal = () =>
  document.getElementById("modal").classList.remove("active");

// Dados cadastrais JSON
const tempClient = {
  nome: "bryan",
  email: "bryan@gmail.com",
  contato: "16996467556",
  cidade: "Araraquara",
  processo: "Polimento",
};

// Dados inseridos e coletados apartir do localstorage
const getLocalStorage = () =>
  JSON.parse(localStorage.getItem("db_client")) ?? [];
const setLocalStorage = (dbClient) =>
  localStorage.setItem("db_client", JSON.stringify(dbClient));



  //CRUD - create , reade , update , delete


//CRUD - delete
const deleteClient = (index) => {
  const dbClient = readClient()
  dbClient.splice(index,1)
  setLocalStorage(dbClient)
}

//CRUD - update
const updateCliente = (index, client) => {
  const dbClient = readClient();
  dbClient[index] = client;
  setLocalStorage(dbClient)
};

//CRUD - read
const readClient = () => getLocalStorage();

//CRUD - create
const createClient = (client) => {
  const dbClient = getLocalStorage();
  dbClient.push(client);
  setLocalStorage(dbClient);
};

//Eventos Modal

document
  .getElementById("cadastrarCliente")
  .addEventListener("click", openModal);

document.getElementById("modalClose").addEventListener("click", closeModal);
