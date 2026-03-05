import { Injectable } from '@angular/core';

const STORAGE_KEY = 'albumTitleOverrides';

@Injectable({ providedIn: 'root' })
export class TitleOverrideService {

    private load(): Record<number, string> {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored) : {};
    }

    save(id: number, title: string): void {
        const overrides = this.load();
        overrides[id] = title;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(overrides));
    }

    getTitle(id: number): string | null {
        return this.load()[id] ?? null;
    }

    getAll(): Record<number, string> {
        return this.load();
    }
}