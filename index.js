module.exports = {
    extends: [
        'stylelint-config-standard',
        'stylelint-config-css-modules'
    ],
    rules: {
        'at-rule-empty-line-before': null,
        'comment-empty-line-before': null,
        'indentation': 4,
        'declaration-block-no-duplicate-properties': [
            true,
            {
                ignore: ['consecutive-duplicates-with-different-values']
            }
        ]
    }
}
