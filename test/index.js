const path = require('path')
const stylelint = require('stylelint')
const test = require('tape')

const config = {
    extends: [
        'stylelint-config-standard',
        path.join(__dirname, '..')
    ]
}

const code = `
@value grey: #ccc;
@value colors: './colors.css';
@value primary, secondary from colors;
@value small as bp-small, large as bp-large from './breakpoints.css';

.base {
    content: 'base';
    color: grey;
}

.composed {
    composes: base;
}

.flexible {
    composes: flex from './utils.css';
    flex-direction: column;
}

:global(.js) .progressive {
    display: block;
}
`

test('should not results errors nor warnings', (t) => {
    const NUMBER_OF_ASSERTIONS = 2

    t.plan(NUMBER_OF_ASSERTIONS)

    stylelint.lint({
        code,
        config
    }).then(
        (data) => {

            const
                WARNINGS = 0,
                NO_WARNINGS = 0

            const {errored, results} = data
            const {warnings} = results[WARNINGS]

            t.notOk(errored, 'no errors')
            t.equal(warnings.length, NO_WARNINGS, 'no warnings')
        }
    )
})
