import { rmApi } from "./config";
import { character } from "./routes";

export function getCharacters(page = 1, nameSearch: string, status: string) {
  return rmApi.get(character, {
    params: { page: page, name: nameSearch ?? "", status: status || "" },
  });
}
