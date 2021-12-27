import parseCSV from "@/helpers/parseCSV";
import { HistoryLine } from "../../types/index";

const processHistoryFile = async (file: File) => {
  try {
    const fileParsed: Object = await parseCSV(file);
    const history: Array<HistoryLine> = [];
    Object.values(fileParsed).forEach((i) => {
      const historyLine: HistoryLine = {
        confirmed: i.Confirmed,
        date: i.Date,
        type: i.Type,
        label: i.Label,
        address: i.Address,
        amount: i["Amount (SIN)"],
        id: i.ID,
      };
      history.push(historyLine);
    });
    return history;
  } catch {
    throw new Error("Can't process this CSV file.");
  }
};

export { processHistoryFile };
