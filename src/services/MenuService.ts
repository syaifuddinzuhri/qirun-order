// src/lib/MenuService.ts
import { collection, doc, getDocs, getDoc, setDoc, updateDoc, deleteDoc, addDoc } from "firebase/firestore";
import { db } from "src/lib/firebase";

export type MenuItem = {
  id: string; // Ubah ke string karena Firestore pakai string ID
  name: string;
  price: number;
  is_ready: boolean;
};

export type MenuData = {
  makanan: MenuItem[];
  minuman: MenuItem[];
  tambahan: MenuItem[];
};

// 🔸 Ambil semua data dari koleksi 'menu'
export const getAllMenuItems = async (): Promise<MenuData> => {
  const categories: (keyof MenuData)[] = ["makanan", "minuman", "tambahan"];
  const result: MenuData = { makanan: [], minuman: [], tambahan: [] };

  for (const cat of categories) {
    const querySnapshot = await getDocs(collection(db, "menu", cat, "items"));
    result[cat] = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }) as MenuItem);
  }

  return result;
};

// 🔸 Tambah item baru ke kategori tertentu
export const addMenuItem = async (category: keyof MenuData, item: Omit<MenuItem, "id">): Promise<MenuItem> => {
  const docRef = await addDoc(collection(db, "menu", category, "items"), item);
  return { id: docRef.id, ...item };
};

// 🔸 Update item berdasarkan ID
export const updateMenuItem = async (
  category: keyof MenuData,
  id: string,
  updatedItem: Omit<MenuItem, "id">
): Promise<MenuItem | null> => {
  const ref = doc(db, "menu", category, "items", id);
  await updateDoc(ref, updatedItem);
  return { id, ...updatedItem };
};

// 🔸 Ambil item berdasarkan ID (cari di semua kategori)
export const getMenuItemById = async (id: string): Promise<MenuItem | null> => {
  const categories: (keyof MenuData)[] = ["makanan", "minuman", "tambahan"];

  for (const cat of categories) {
    const items = await getDocs(collection(db, "menu", cat, "items"));
    for (const item of items.docs) {
      if (item.id === id) {
        return { id: item.id, ...item.data() } as MenuItem;
      }
    }
  }

  return null;
};

// 🔸 Hapus item berdasarkan ID
export const deleteMenuItem = async (id: string): Promise<boolean> => {
  const categories: (keyof MenuData)[] = ["makanan", "minuman", "tambahan"];
  for (const cat of categories) {
    const items = await getDocs(collection(db, "menu", cat, "items"));
    for (const item of items.docs) {
      if (item.id === id) {
        await deleteDoc(doc(db, "menu", cat, "items", id));
        return true;
      }
    }
  }
  return false;
};

export const handlePredefined = async () => {
  const data: MenuData = {
    makanan: [
      { id: "", name: "Nasi + Ayam Goreng", price: 25000, is_ready: false },
      { id: "", name: "Nasi + Bebek Goreng", price: 20000, is_ready: false },
      { id: "", name: "Nasi + Rempelo Ati", price: 30000, is_ready: true },
      { id: "", name: "Nasi + Telur", price: 22000, is_ready: true },
      { id: "", name: "Nasi + Tempe/Tahu", price: 27000, is_ready: true },
    ],
    minuman: [
      { id: "", name: "Es Jeruk", price: 5000, is_ready: true },
      { id: "", name: "Es Teh", price: 5000, is_ready: true },
      { id: "", name: "Teh Panas/Hangat", price: 5000, is_ready: true },
      { id: "", name: "Jeruk Panas/Hangat", price: 5000, is_ready: true },
      { id: "", name: "Kopi", price: 5000, is_ready: true },
      { id: "", name: "Air Mineral", price: 5000, is_ready: true },
    ],
    tambahan: [
      { id: "", name: "Sambal Pedes", price: 5000, is_ready: true },
      { id: "", name: "Bumbu Hitam", price: 7000, is_ready: true },
      { id: "", name: "Lalapan", price: 2000, is_ready: true },
    ],
  };

  const promises: Promise<MenuItem>[] = [];

  for (const category of Object.keys(data) as (keyof MenuData)[]) {
    for (const item of data[category]) {
      const { name, price, is_ready } = item;
      const promise = addMenuItem(category, { name, price, is_ready });
      promises.push(promise);
    }
  }

  await Promise.all(promises);
};
