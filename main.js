"use strict";

const openModal = () =>
  document.getElementById("modal").classList.add("active");

const closeModal = () =>
  document.getElementById("modal").classList.remove("active");

const tempClient = {
  nome: "baer",
  email: "baer@gmail.com",
  contato: "16996467556",
  cidade: "Araraquara",
  processo: "Polimento",
};

//CRUD

const createClient = (client) => {
  const db_client = JSON.parse(localStorage.getItem('db_client'));
  console.log(db_client);
  db_client.push(client);
  localStorage.setItem("db_client", JSON.stringify(db_client));
};

//Eventos Modal

document
  .getElementById("cadastrarCliente")
  .addEventListener("click", openModal);

document.getElementById("modalClose").addEventListener("click", closeModal);
