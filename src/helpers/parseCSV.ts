import Papa from "papaparse";

const parseCSV = async (csvFile: File): Promise<Object> => {
  return new Promise((resolve, reject) => {
    Papa.parse(csvFile, {
      header: true,
      dynamicTyping: true,
      complete: (resp) => {
        if (resp.data) {
          resolve(resp.data);
        }
        reject();
      },
      error() {
        reject();
      },
    });
  });
};

export default parseCSV;
