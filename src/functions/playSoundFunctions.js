import UIfx from "uifx";

import mp3InfoFile from "../assets/audio/info.mp3";
import mp3ErrorFile from "../assets/audio/error.mp3";
import mp3WarningFile from "../assets/audio/warning.mp3";
import mp3SuccessFile from "../assets/audio/success.mp3";
import {getLocaleStorageItem} from "./localStorageFunctions";
import {LOCAL_STORAGE_SETTINGS} from "../constants/localStorageConstants";

// Play info sound
export function playInfoSound() {
    const infoSound = new UIfx(mp3InfoFile, {volume: 1.0, throttleMs: 100});
    try {
        const canPlay = getLocaleStorageItem(LOCAL_STORAGE_SETTINGS).sound;
        canPlay && infoSound.play();
    } catch (e) {
        infoSound.play();
        if(process.env.NODE_ENV !== 'production') console.log({e})
    }
}

// Play success sound
export function playSuccessSound() {
    const successSound = new UIfx(mp3SuccessFile, {volume: 1.0, throttleMs: 100});
    try {
        const canPlay = getLocaleStorageItem(LOCAL_STORAGE_SETTINGS).sound;
        canPlay && successSound.play();
    } catch (e) {
        successSound.play();
        if(process.env.NODE_ENV !== 'production') console.log({e})
    }
}

// Play waring sound
export function playWarningSound() {
    const warningSound = new UIfx(mp3WarningFile, {volume: 1.0, throttleMs: 100});
    try {
        const canPlay = getLocaleStorageItem(LOCAL_STORAGE_SETTINGS).sound;
        canPlay && warningSound.play();
    } catch (e) {
        warningSound.play();
        if(process.env.NODE_ENV !== 'production') console.log({e})
    }
}

// Play Error sound
export function playErrorSound() {
    const errorSound = new UIfx(mp3ErrorFile, {volume: 1.0, throttleMs: 100});
    try {
        const canPlay = getLocaleStorageItem(LOCAL_STORAGE_SETTINGS).sound;
        canPlay && errorSound.play();
    } catch (e) {
        errorSound.play();
        if(process.env.NODE_ENV !== 'production') console.log({e})
    }
}