/**
 * @fileoverview Linting rules for hackmud player-scripts
 * @author Adam Bosco
 */
// TODO: take a look at using no-restricted-syntax

export * as configs from './configs'
export * as processors from './processors'
export * as rules from './rules'
import environment from './environment.json'

export const environments = {
	hackmud: environment
}
