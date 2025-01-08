import {FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply} from "fastify";
import { createNutritioncontroller } from "./controllers/createNutritionController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.get("/teste", (request: FastifyRequest, reply: FastifyReply) => {
        
        let responseText = "```json\n{\n  \"nome\": \"Ryan\",\n  \"sexo\": \"Masculino\",\n  \"idade\": 18,\n  \"altura\": 1.68,\n  \"peso\": 64,\n  \"objetivo\": \"Hipertrofia\",\n  \"refeicoes\": [\n    {\n      \"horario\": \"7:00\",\n      \"nome\": \"Cafe da manha\",\n      \"alimentos\": [\n        \"3 ovos inteiros\",\n        \"2 fatias de pao integral\",\n        \"1 colher de sopa de pasta de amendoim\",\n        \"1 banana media\",\n        \"200ml de leite desnatado\"\n      ]\n    },\n    {\n      \"horario\": \"10:00\",\n      \"nome\": \"Lanche da manha\",\n      \"alimentos\": [\n        \"1 copo de iogurte desnatado com granola\",\n        \"1 fruta (maça, pera ou laranja)\"\n      ]\n    },\n    {\n      \"horario\": \"13:00\",\n      \"nome\": \"Almoço\",\n      \"alimentos\": [\n        \"150g de frango grelhado ou peixe\",\n        \"1 concha de arroz integral\",\n        \"1 concha de feijao\",\n        \"Salada verde a vontade (alface, tomate, pepino)\"\n      ]\n    },\n    {\n      \"horario\": \"16:00\",\n      \"nome\": \"Lanche da tarde\",\n      \"alimentos\": [\n        \"Shake de proteina (whey protein) com leite desnatado e banana\",\n        \"1 punhado de castanhas\"\n      ]\n    },\n    {\n      \"horario\": \"19:00\",\n      \"nome\": \"Janta\",\n      \"alimentos\": [\n        \"150g de carne magra (patinho, alcatra)\",\n        \"Batata doce cozida (1 unidade media)\",\n        \"Salada verde a vontade\"\n      ]\n    },\n    {\n      \"horario\": \"21:00\",\n      \"nome\": \"Lanche antes de dormir\",\n      \"alimentos\": [\n        \"Caseina (2 scoops) com 200ml de leite desnatado\"\n      ]\n    }\n  ],\n  \"suplementos\": [\n    \"Whey protein\",\n    \"Creatina\",\n    \"BCAA\",\n    \"Multivitaminico\"\n  ]\n}\n```"

        try {
            //extrair o JSON
            let jsonString = responseText.replace(/```\w*\n/g, '').replace(/\n```/g, '').trim()

            let jsonObject = JSON.parse(jsonString)

            return reply.send({data: jsonObject})
        } catch (error) {
            console.log(error)
        }

        reply.send({ok: true})
    })

    fastify.post("/create", async (request: FastifyRequest, reply: FastifyReply) => {
        return new createNutritioncontroller().hanlde(request, reply)
    })
}
