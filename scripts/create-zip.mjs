import archiver from "archiver";
import fs from "fs";
import path from "path";

const output = fs.createWriteStream("C:/Users/Admin/Desktop/site-hermann.zip");
const archive = archiver("zip", { zlib: { level: 9 } });

output.on("close", () => {
  console.log("ZIP criado: " + archive.pointer() + " bytes");
  console.log("Arquivo: C:/Users/Admin/Desktop/site-hermann.zip");
});

archive.on("error", (err) => { throw err; });

archive.pipe(output);

// Adiciona todo o conteúdo de out/ na raiz do zip (sem subpasta)
archive.directory("out/", false);

archive.finalize();
