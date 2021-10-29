import * as noClosureIdentifier from "./no-closure-identifier"
import * as noClosureSiblings from "./no-closure-siblings"
import * as validateSubscriptSyntax from "./validate-subscript-syntax"

export const rules = {
	"no-closure-identifier": noClosureIdentifier,
	"no-closure-siblings": noClosureSiblings,
	"validate-subscript-syntax": validateSubscriptSyntax
}

export default rules
