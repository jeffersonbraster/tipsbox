/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from "next";
import { fromBase64 } from "../../utils/parseFrom64";
import { GoogleSpreadsheet } from "google-spreadsheet";
import moment from "moment";

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID as string);

type Data = {
  showCoupon: boolean;
  message: string;
};

const genCupom = () => {
  const code = parseInt(moment().format("YYMMDDHHmmssSSS"))
    .toString(16)
    .toUpperCase();
  return code.substr(0, 4) + "-" + code.substr(4, 4) + "-" + code.substr(8, 4);
};

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    await doc.useServiceAccountAuth({
      client_email: process.env.SHEET_CLIENT_EMAIL as string,
      private_key: fromBase64(process.env.SHEET_PRIVATE_KEY),
    });
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[1];
    const data = JSON.parse(req.body);

    const sheetConfig = doc.sheetsByIndex[2];
    await sheetConfig.loadCells("A3:B3");

    const mostrarPromocaoCell = sheetConfig.getCell(2, 0);
    const textoCell = sheetConfig.getCell(2, 1);

    let Cupom = "";
    let Promo = "";
    if (mostrarPromocaoCell.value === "VERDADEIRO") {
      Cupom = genCupom();
      Promo = textoCell.value as any;
    }

    await sheet.addRow({
      Nome: data.name,
      Email: data.email,
      Phone: data.phone,
      Nota: parseInt(data.nota),
      "Data Preenchimento": moment().format("DD/MM/YYYY HH:mm:ss"),
      Cupom,
      Promo,
    });
    res.end(
      JSON.stringify({
        showCoupon: Cupom !== "",
        Cupom,
        Promo,
      })
    );
  } catch (err) {
    console.log(err);
    res.end("error");
  }
};
