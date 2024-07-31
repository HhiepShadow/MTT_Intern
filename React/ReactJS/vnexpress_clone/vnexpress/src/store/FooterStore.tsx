import { makeAutoObservable } from "mobx";
import { FooterItem } from "../models/FooterItem";

export default class FooterStore {
    footerItems: FooterItem[] = [];

    constructor(footerItems: FooterItem[]) {
        makeAutoObservable(this);
        this.footerItems = footerItems;
    }
}