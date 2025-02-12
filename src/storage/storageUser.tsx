import { USER_STORAGE } from "./storageConfig";

export async function storageUserSave(user: any) {
  localStorage.setItem(USER_STORAGE, JSON.stringify(user));
}

export async function storageUserGet() {
  const storage = localStorage.getItem(USER_STORAGE);

  const user = storage ? JSON.parse(storage) : {};

  return user;
}

export async function storageUserDelete() {
  await localStorage.removeItem(USER_STORAGE);
}
