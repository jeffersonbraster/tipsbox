/* eslint-disable import/no-anonymous-default-export */
import { fromBase64 } from "../../utils/parseFrom64";
import type { NextApiRequest, NextApiResponse } from "next";
import { GoogleSpreadsheet } from "google-spreadsheet";

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID as string);

type Data = {
  showCoupon: boolean;
  message: string;
};

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    await doc.useServiceAccountAuth({
      client_email: process.env.SHEET_CLIENT_EMAIL as string,
      private_key: fromBase64(process.env.SHEET_PRIVATE_KEY),
    });
    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[2];
    await sheet.loadCells("A3:B3");

    const mostrarPromocaoCell = sheet.getCell(2, 0);
    const textoCell = sheet.getCell(2, 1);

    res.end(
      JSON.stringify({
        showCoupon: mostrarPromocaoCell.value === "VERDADEIRO",
        message: textoCell.value,
      })
    );
  } catch (err) {
    res.end(
      JSON.stringify({
        showCoupon: false,
        message: "",
      })
    );
  }
};
