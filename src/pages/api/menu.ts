import type { NextApiRequest, NextApiResponse } from "next";
import { getAllMenu } from "src/lib/MenuService";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const menu = getAllMenu();
    return res.status(200).json(menu);
  }
}
