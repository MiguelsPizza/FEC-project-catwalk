const csvSplitStream = require("csv-split-stream");
const csv = require("csv-parser");
const createCsvStringifier = require("csv-writer").createObjectCsvStringifier;
const fs = require("fs");
const Transform = require("stream").Transform;

// let index = 0;
// for(index; index <=56; index++){
// return csvSplitStream.split(
//   fs.createReadStream('/Users/alexmnahas/Downloads/photos.csv'),
//   {
//     lineLimit: 100000
//   },
//   (index) => fs.createWriteStream(`./output/${index}.csv`)
// )
// .then(csvSplitResponse => {
//   console.log('csvSplitStream succeeded.', csvSplitResponse);
//   // outputs: {
//   //  "totalChunks": 350,
//   //  "options": {
//   //    "delimiter": "\n",
//   //    "lineLimit": "10000"
//   //  }
//   // }
// }).catch(csvSplitError => {
//   console.log('csvSplitStream failed!', csvSplitError);
// });
// }

const csvStringifier = createCsvStringifier({
  header: [
    { id: "id", title: "id" },
    { id: "styleId", title: "styleId" },
    { id: "url", title: "url" },
    { id: "thumbnail_url", title: "thumbnail_url" },
  ],
});

let counter2 = 0;
let counter = 0;

const wrapper = (count)=> {
      console.log("here");
      let readStream = fs.createReadStream(`./output/${count}.csv`);
      let writeStream = fs.createWriteStream(`./output/${count - 1}.csv`);

      class CSVCleaner extends Transform {
        constructor(options) {
          super(options);
        }

        _transform(chunk, encoding, next) {
          if (JSON.stringify(chunk).length > 800) {
            const funkyChunks = JSON.stringify(chunk).split("\\n");
            funkyChunks[0] = `${funkyChunks[0]}"}`;
            let parsedChunkat0 = csvStringifier.stringifyRecords([
              JSON.parse(funkyChunks[0]),
            ]);
            this.push(parsedChunkat0);
            for (let i = 1; i < funkyChunks.length - 1; i++) {
              const remainingFunkyChunks = funkyChunks[i].split(",");
              const obj = {
                id: remainingFunkyChunks[0],
                styleId: remainingFunkyChunks[1],
                url: remainingFunkyChunks[2].slice(
                  2,
                  remainingFunkyChunks[2].length - 1
                ),
                thumbnail_url: remainingFunkyChunks[3].slice(
                  remainingFunkyChunks[3].indexOf("https"),
                  remainingFunkyChunks[3].indexOf("&q=80") + 5
                ),
              };
              let parsedChunk = csvStringifier.stringifyRecords([obj]);
              this.push(parsedChunk);
            }
            next();
          } else {
            // uses our csvStringifier to turn our chunk into a csv string
            chunk = csvStringifier.stringifyRecords([chunk]);
            this.push(chunk);
            next();
          }
        }
      }

       const transformer = new CSVCleaner({ writableObjectMode: true });

      if (count === 0) {
        writeStream.write(csvStringifier.getHeaderString());
      }
        readStream
        .pipe(csv())
        .pipe(transformer)
        .pipe(writeStream)
        .on("finish", () => {
          console.log(`in stream ${count}`)
          count++
          if(count <= 56){wrapper(count)}
        });
       console.log(`on file ${count}`);
}
wrapper(counter);

