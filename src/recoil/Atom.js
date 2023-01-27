import { atom } from "recoil"
import { recoilPersist } from "recoil-persist"

const { persistAtom } = recoilPersist();

export const mainAtom = atom({
    key: "mainAtom",
    default: [],
    effects_UNSTABLE: [persistAtom]
})
