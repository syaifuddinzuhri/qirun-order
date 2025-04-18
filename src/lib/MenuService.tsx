import fs from "fs";
import path from "path";

const dataPath = path.join(process.cwd(), "src/data", "menu.json");

export type MenuItem = {
  id: number;
  name: string;
  price: number;
  is_ready: boolean;
};

export type MenuData = {
  makanan: MenuItem[];
  minuman: MenuItem[];
  tambahan: MenuItem[];
};

export const getAllMenu = (): MenuData => {
  const data = fs.readFileSync(dataPath, "utf-8");
  return JSON.parse(data);
};

export const addMenuItem = (category: keyof MenuData, item: Omit<MenuItem, "id">): MenuItem => {
  const data = getAllMenu();

  const allIds = [
    ...data.makanan.map(item => item.id),
    ...data.minuman.map(item => item.id),
    ...data.tambahan.map(item => item.id),
  ];

  const maxId = allIds.length > 0 ? Math.max(...allIds) : 0;
  const newId = maxId + 1;

  const newItem: MenuItem = {
    id: newId,
    ...item,
  };

  data[category].push(newItem);
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
  return newItem;
};


export const updateMenuItem = (
  category: keyof MenuData,
  id: number,
  updatedItem: Omit<MenuItem, "id">
): MenuItem | null => {
  const data = getAllMenu();
  const index = data[category].findIndex(item => item.id === id);
  if (index === -1) return null;
  const newItem = { id, ...updatedItem };
  data[category][index] = newItem;
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
  return newItem;
};

export const getMenuItemById = (
  id: number
): MenuItem | null => {
  const data = getAllMenu();

  for (const category of ["makanan", "minuman", "tambahan"] as (keyof MenuData)[]) {
    const item = data[category].find(item => item.id === id);
    if (item) {
      return item;
    }
  }

  return null;
};

export const deleteMenuItem = (id: number): boolean => {
  const data = getAllMenu();
  let found = false;

  for (const category of ["makanan", "minuman", "tambahan"] as (keyof MenuData)[]) {
    const index = data[category].findIndex(item => item.id === id);
    if (index !== -1) {
      data[category].splice(index, 1);
      found = true;
      break;
    }
  }

  if (found) {
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
  }

  return found;
};
