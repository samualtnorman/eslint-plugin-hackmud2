/**
 * @fileoverview Linting rules for hackmud player-scripts
 * @author Adam Bosco
 */
// TODO: take a look at using no-restricted-syntax

export * as configs from "./configs"
export { processors } from "./processors"
export { rules } from "./rules"
import environment from "./environment.json"

export const environments = {
	hackmud: environment
}
