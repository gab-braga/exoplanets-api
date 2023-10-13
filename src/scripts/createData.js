import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// import fs from "fs";
// (() => {
//     fs.readFile("csvjson.json", "utf8", (err, data) => {
//         if(err) return;

//         const vetor = JSON.parse(data);
//         (async () => {
//             for(let item of vetor) {
//                 if(item.st_age == "") delete item.st_age;
//                 else item.st_age = String(item.st_age)
//                 await prisma.exoplanet.create({data: item})
//             }
//         })();
//     })
// })()