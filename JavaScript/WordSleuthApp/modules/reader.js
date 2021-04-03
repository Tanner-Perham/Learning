"use strict";
import { createWorker } from "tesseract.js";

export async function dataRead(image) {
  const worker = createWorker();
  await worker.load();
  await worker.loadLanguage("eng");
  await worker.initialize("eng");
  const {
    data: { text },
  } = await worker.recognize(image);
  //   console.log(text.split("\n"));
  await worker.terminate();
  return text.split("\n").filter((m) => m !== "");
}

// console.log(await dataRead("./testing/TreesGrid.jpg"));
