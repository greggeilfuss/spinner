import { Url } from 'url';

export interface Settings {
    server: string;
    apiBase: string;

    customer_list: string;
    customer: string;
    notes: string;
    note: string;
}

export class TurbineConfig {
    get server(): string {
        return this.server;
    }

    get baseUrl(): string {
        return this.baseUrl;
    }
}