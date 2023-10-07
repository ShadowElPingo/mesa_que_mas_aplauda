import { btnMesa } from "./template.js";
import { capturetable } from "./eventos.js";



/* CREACION NUMERO DE MESAS */
const mesitas = document.getElementById("mesas");

btnMesa(mesitas)

const botoncitoCompritas = mesitas.querySelectorAll("button")

capturetable(botoncitoCompritas);

