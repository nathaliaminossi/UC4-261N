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
// vão armazenar os produtores, alimentos e instituições
const producerRegistry = new Registry_1.Registry();
const foodRegistry = new Registry_1.Registry();
const institutionRegistry = new Registry_1.Registry();
// cadastra um novo produtor
const registerProducer = () => {
    const name = readline_sync_1.default.question("Producer name: ");
    const cpf = readline_sync_1.default.question("CPF: ");
    const amountFood = readline_sync_1.default.questionFloat("Amount of food produced: ");
    console.log("[1] Family Farmer");
    console.log("[2] Community Garden Producer");
    const type = readline_sync_1.default.questionInt("Please select the producer type (1-2): ");
    let producer;
    switch (type) {
        case 1:
            const propertySize = readline_sync_1.default.questionFloat("Property size in hectares: ");
            producer = new FamilyFarmer_1.FamilyFarmer(name, cpf, amountFood, propertySize);
            break;
        case 2:
            const numberOfVolunteers = readline_sync_1.default.questionInt("Number of volunteers: ");
            producer = new CommunityGardenProducer_1.CommunityGardenProducer(name, cpf, amountFood, numberOfVolunteers);
            break;
        default:
            console.log("Invalid selection.");
            return;
    }
    // adiciona o produtor ao registro
    producerRegistry.add(producer);
    console.log(`${producer.getName()} has been registered successfully.`);
};
// percorre o registro de produtores e mostra as informações
const listProducers = () => {
    const producers = producerRegistry.list();
    if (producers.length === 0) {
        console.log("No producers registered.");
        return;
    }
    for (const producer of producers) {
        producer.present();
    }
};
// cadastra um novo alimento
const registerFood = () => {
    const name = readline_sync_1.default.question("Food name: ");
    const category = readline_sync_1.default.question("Category: ");
    const amountKg = readline_sync_1.default.questionFloat("Amount in kg: ");
    const responsibleProducer = readline_sync_1.default.question("Responsible producer: ");
    if (amountKg < 0) {
        console.log("Quantity cannot be negative.");
        return;
    }
    const food = new Food_1.Food(name, category, amountKg, responsibleProducer);
    // adiciona o alimento ao registro
    foodRegistry.add(food);
    console.log(`${food.getName()} has been registered successfully.`);
};
// percorre o registro de alimentos e mostra as informações
const listFood = () => {
    const foods = foodRegistry.list();
    if (foods.length === 0) {
        console.log("No food registered.");
        return;
    }
    for (const food of foods) {
        console.log(`Name: ${food.getName()}, ` +
            `Category: ${food.getCategory()}, ` +
            `Quantity: ${food.getAvailableQuantity()} kg, ` +
            `Producer: ${food.getResponsibleProducer()}`);
    }
};
// cadastra uma nova instituição
const registerInstitution = () => {
    const name = readline_sync_1.default.question("Institution name: ");
    const address = readline_sync_1.default.question("Address: ");
    const numberOfPeopleServed = readline_sync_1.default.questionInt("Number of people served: ");
    const institution = new Institution_1.Institution(name, address, numberOfPeopleServed);
    // adiciona a instituição ao registro
    institutionRegistry.add(institution);
    console.log(`${institution.getName()} has been registered successfully.`);
};
// percorre o registro de instituições e mostra as informações
const listInstitutions = () => {
    const institutions = institutionRegistry.list();
    if (institutions.length === 0) {
        console.log("No institutions registered.");
        return;
    }
    for (const institution of institutions) {
        console.log(`Name: ${institution.getName()}, ` +
            `Address: ${institution.getAddress()}, ` +
            `People served: ${institution.getNumberOfPeopleServed()}, ` +
            `Food received: ${institution.getReceivedFood()} kg`);
    }
};
// realiza uma doação de alimento para uma instituição
const makeDonation = () => {
    const foods = foodRegistry.list();
    const institutions = institutionRegistry.list();
    // verifica se existem alimentos cadastrados
    if (foods.length === 0) {
        console.log("No food registered.");
        return;
    }
    // verifica se existem instituições cadastradas
    if (institutions.length === 0) {
        console.log("No institutions registered.");
        return;
    }
    console.log("\nAvailable food:");
    // mostra os alimentos disponíveis
    foods.forEach((food, index) => {
        console.log(`[${index}] ${food.getName()} - ` +
            `${food.getAvailableQuantity()} kg`);
    });
    const foodIndex = readline_sync_1.default.questionInt("Choose the food: ");
    // procura o alimento escolhido
    const food = foodRegistry.find(foodIndex);
    if (food === undefined) {
        console.log("Food not found.");
        return;
    }
    const quantity = readline_sync_1.default.questionFloat("Quantity to donate in kg: ");
    if (quantity <= 0) {
        console.log("Quantity must be greater than zero.");
        return;
    }
    console.log("\nInstitutions:");
    // mostra as instituições cadastradas
    institutions.forEach((institution, index) => {
        console.log(`[${index}] ${institution.getName()}`);
    });
    const institutionIndex = readline_sync_1.default.questionInt("Choose the institution: ");
    // procura a instituição escolhida
    const institution = institutionRegistry.find(institutionIndex);
    if (institution === undefined) {
        console.log("Institution not found.");
        return;
    }
    // tenta retirar a quantidade do estoque
    const removed = food.removeQuantity(quantity);
    if (!removed) {
        console.log("There is not enough food available.");
        return;
    }
    // registra o recebimento na instituição
    institution.receiveFood(quantity);
    console.log("\nDonation completed successfully!");
    console.log(`Food: ${food.getName()}`);
    console.log(`Quantity: ${quantity} kg`);
    console.log(`Institution: ${institution.getName()}`);
};
// variável que controla o funcionamento do programa
let running = true;
// enquanto running for true, o menu continua aparecendo
while (running) {
    // pergunta a opção toda vez que o loop roda novamente
    const chose = readline_sync_1.default.questionInt(`
    ========================================

          RAÍZES DA TERRA COOPERATIVE

    ========================================

    [1] Register producer
    [2] Register food
    [3] Register institution
    [4] List producers
    [5] List food
    [6] List institutions
    [7] Make donation
    [0] Exit

    Please select an option: `);
    try {
        switch (chose) {
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
                console.log("Exiting the program. Goodbye!");
                // muda running para false
                // na próxima verificação o while será encerrado
                running = false;
                break;
            default:
                console.log("Invalid option.");
        }
    }
    catch (error) {
        // impede que o programa seja encerrado por um erro previsto
        console.log("Could not complete the operation.");
    }
}
