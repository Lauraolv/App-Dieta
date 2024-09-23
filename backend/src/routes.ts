import {
    FastifyInstance,
    FastifyPluginOptions,
    FastifyRequest,
    FastifyReply
} from "fastify";
import {CreateNutritionController} from './controllers/CreateNutritionController'

export async function routes(fastify:FastifyInstance, options:FastifyPluginOptions) {
    
    fastify.get("/teste", (request:FastifyRequest, reply: FastifyReply) =>{
       
        let responseText = "```json\n{\n  \"nome\": \"Laura\",\n  \"sexo\": \"Feminino\",\n  \"idade\": 22,\n  \"altura\": 1.68,\n  \"peso\": 61,\n  \"objetivo\": \"Hipertrofia\",\n  \"refeicoes\": [\n    {\n      \"horario\": \"08:00\",\n      \"nome\": \"Café da manhã\",\n      \"alimentos\": [\n        \"2 fatias de pão integral\",\n        \"2 ovos mexidos com 1 fatia de queijo minas\",\n        \"1 banana\",\n        \"1 copo de leite desnatado\"\n      ]\n    },\n    {\n      \"horario\": \"10:00\",\n      \"nome\": \"Lanche da manhã\",\n        \"alimentos\": [\n        \"1 iogurte grego natural com granola e frutas vermelhas\"\n      ]\n    },\n    {\n      \"horario\": \"13:00\",\n      \"nome\": \"Almoço\",\n      \"alimentos\": [\n        \"150g de frango grelhado\",\n        \"1 xícara de arroz integral\",\n        \"1 xícara de brócolis cozido\",\n        \"Salada verde com azeite de oliva e vinagre\"\n      ]\n    },\n    {\n      \"horario\": \"15:00\",\n      \"nome\": \"Lanche da tarde\",\n      \"alimentos\": [\n        \"1 batata doce média cozida\",\n        \"1 scoop de whey protein\"\n      ]\n    },\n    {\n      \"horario\": \"19:00\",\n      \"nome\": \"Jantar\",\n      \"alimentos\": [\n        \"150g de peixe assado\",\n        \"1 xícara de batata doce cozida\",\n        \"1 xícara de espinafre refogado\"\n      ]\n    },\n    {\n      \"horario\": \"21:00\",\n      \"nome\": \"Lanche da noite\",\n      \"alimentos\": [\n        \"1 scoop de caseína\"\n      ]\n    }\n  ],\n  \"suplementos\": [\n    \"Whey Protein\",\n    \"Creatina\",\n    \"BCAA\",\n    \"Glutamina\"\n  ]\n}\n```"


        try{
            let jsonString = responseText.replace(/```\w*\n/g,'').replace(/\n```/g, '').trim(); 

            let jsonObject = JSON.parse(jsonString)

            return reply.send({data: jsonObject});
        
        }catch(err){
            console.log(err)
        }

       
    })

    fastify.post("/create", async(request:FastifyRequest, reply: FastifyReply) => {
        return new CreateNutritionController().handle(request,reply)
    })

}

