const Ajv = require('ajv');
const ajv = new Ajv({ allErrors: true });

const schema = {
  "properties": {
    "foo": { "type": "string" },
    "bar": { "type": "number", "maximum": 3 }
  }
};

const validate = ajv.compile(schema);

test({ "foo": "abc", "bar": 2 });
test({ "foo": 2, "bar": 4 });

function test(data) {
  let valid = validate(data);
  if (valid) console.log('Valid!');
  else console.log('Invalid: ' + ajv.errorsText(validate.errors));
}
