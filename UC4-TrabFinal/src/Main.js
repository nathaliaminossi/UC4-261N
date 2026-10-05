"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const FamilyFarmer_1 = require("./FamilyFarmer");
const CommunityGardenProducer_1 = require("./CommunityGardenProducer");
const Food_1 = require("./Food");
const Institution_1 = require("./Institution");
const Registry_1 = require("./Registry");
const producerRegistry = new Registry_1.Registry();
const foodRegistry = new Registry_1.Registry();
const institutionRegistry = new Registry_1.Registry();
let option;
do {
    console.log("\n========================================");
    console.log("       RAÍZES DA TERRA COOPERATIVE");
    console.log("========================================");
    console.log("[1] Register producer");
    console.log("[2] Register food");
    console.log("[3] Register institution");
    console.log("[4] List producers");
    console.log("[5] List food");
    console.log("[6] List institutions");
    console.log("[7] Make donation");
    console.log("[0] Exit");
    console.log("========================================");
    option = readline_sync_1.default.questionInt("Choose an option: ");
    try {
        switch (option) {
            case 1:
                registerProducer();
                break;
            case 2:
                registerFood();
                break;
            case 3:
                registerInstitution();
                break;
            case 4:
                listProducers();
                break;
            case 5:
                listFood();
                break;
            case 6:
                listInstitutions();
                break;
            case 7:
                makeDonation();
                break;
            case 0:
                console.log("System closed.");
                break;
            default:
                console.log("Invalid option.");
        }
    }
    catch (error) {
        console.log("Could not complete the operation.");
    }
} while (option !== 0);
function registerProducer() {
    const name = readline_sync_1.default.question("Producer name: ");
    const cpf = readline_sync_1.default.question("CPF: ");
    const amountFood = readline_sync_1.default.questionFloat("Amount of food produced: ");
    console.log("\n[1] Family Farmer");
    console.log("[2] Community Garden Producer");
    const type = readline_sync_1.default.questionInt("Choose producer type: ");
    if (type === 1) {
        const propertySize = readline_sync_1.default.questionFloat("Property size in hectares: ");
        const producer = new FamilyFarmer_1.FamilyFarmer(name, cpf, amountFood, propertySize);
        producerRegistry.add(producer);
    }
    else if (type === 2) {
        const numberOfVolunteers = readline_sync_1.default.questionInt("Number of volunteers: ");
        const producer = new CommunityGardenProducer_1.CommunityGardenProducer(name, cpf, amountFood, numberOfVolunteers);
        producerRegistry.add(producer);
    }
    else {
        throw new Error("Invalid producer type.");
    }
    console.log("Producer registered successfully!");
}
function registerFood() {
    const name = readline_sync_1.default.question("Food name: ");
    const category = readline_sync_1.default.question("Category: ");
    const amountKg = readline_sync_1.default.questionFloat("Amount in kg: ");
    const responsibleProducer = readline_sync_1.default.question("Responsible producer: ");
    if (amountKg < 0) {
        throw new Error("Quantity cannot be negative.");
    }
    const food = new Food_1.Food(name, category, amountKg, responsibleProducer);
    foodRegistry.add(food);
    console.log("Food registered successfully!");
}
function registerInstitution() {
    const name = readline_sync_1.default.question("Institution name: ");
    const address = readline_sync_1.default.question("Address: ");
    const numberOfPeopleServed = readline_sync_1.default.questionInt("Number of people served: ");
    const institution = new Institution_1.Institution(name, address, numberOfPeopleServed);
    institutionRegistry.add(institution);
    console.log("Institution registered successfully!");
}
function listProducers() {
    const producers = producerRegistry.list();
    if (producers.length === 0) {
        console.log("No producers registered.");
        return;
    }
    producers.forEach((producer) => {
        producer.present();
    });
}
function listFood() {
    const foods = foodRegistry.list();
    if (foods.length === 0) {
        console.log("No food registered.");
        return;
    }
    foods.forEach((food) => {
        console.log(`Food: ${food.getName()} | Category: ${food.getCategory()} | ` +
            `Quantity: ${food.getAvailableQuantity()} kg | ` +
            `Producer: ${food.getResponsibleProducer()}`);
    });
}
function listInstitutions() {
    const institutions = institutionRegistry.list();
    if (institutions.length === 0) {
        console.log("No institutions registered.");
        return;
    }
    institutions.forEach((institution) => {
        console.log(`Institution: ${institution.getName()} | ` +
            `Address: ${institution.getAddress()} | ` +
            `People served: ${institution.getNumberOfPeopleServed()} | ` +
            `Food received: ${institution.getReceivedFood()} kg`);
    });
}
function makeDonation() {
    const foods = foodRegistry.list();
    const institutions = institutionRegistry.list();
    if (foods.length === 0) {
        throw new Error("No food registered.");
    }
    if (institutions.length === 0) {
        throw new Error("No institution registered.");
    }
    console.log("\nAvailable food:");
    foods.forEach((food, index) => {
        console.log(`[${index}] ${food.getName()} - ` +
            `${food.getAvailableQuantity()} kg`);
    });
    const foodIndex = readline_sync_1.default.questionInt("Choose food: ");
    const food = foodRegistry.find(foodIndex);
    if (!food) {
        throw new Error("Food not found.");
    }
    const quantity = readline_sync_1.default.questionFloat("Quantity to donate in kg: ");
    if (quantity <= 0) {
        throw new Error("Quantity must be greater than zero.");
    }
    console.log("\nInstitutions:");
    institutions.forEach((institution, index) => {
        console.log(`[${index}] ${institution.getName()}`);
    });
    const institutionIndex = readline_sync_1.default.questionInt("Choose institution: ");
    const institution = institutionRegistry.find(institutionIndex);
    if (!institution) {
        throw new Error("Institution not found.");
    }
    const removed = food.removeQuantity(quantity);
    if (!removed) {
        throw new Error("Not enough food available.");
    }
    institution.receiveFood(quantity);
    console.log("\nDonation completed successfully!");
    console.log(`Food: ${food.getName()}`);
    console.log(`Quantity: ${quantity} kg`);
    console.log(`Institution: ${institution.getName()}`);
}
