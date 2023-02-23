import type { Game } from '$lib/game/entities/Game';
import { derived, writable } from 'svelte/store';

export const game = writable<Game>();
export const machine = derived(game, ($game) => $game.machine);
export const level = derived(game, ($game) => $game.level);
export const playbook = derived(level, ($level) => $level?.playbook);
