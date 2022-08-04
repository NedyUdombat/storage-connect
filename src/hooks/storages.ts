import { featuredSelfStorages, activeSelfStorages } from "../store/storages";

const useStorages = () => {
  return { featuredSelfStorages, activeSelfStorages };
};

export default useStorages;
