const Ajv = require('ajv');
// const hyperSchema = require('./refs/hyper-schema-draft-07');
// const linkSchema = require('./refs/links-draft-07');


var ajv = new Ajv({ allErrors: true, verbose: true, missingRefs: true });
// ajv.addMetaSchema(linkSchema);
// ajv.addMetaSchema(hyperSchema);

// let validate = ajv.compile(hyperSchema);

// ({schemas: [linkSchema, hyperSchema]});
// ajv.addMetaSchema(linkSchema);
// ajv.addMetaSchema(hyperSchema);

var validate = ajv.getSchema('http://json-schema.org/draft-07/schema#');


const testSchema = {
  type: "object",
  properties: {
    "a": { "$ref": "#/definitions/noRequiredFields"}
  },
  required: ["a"]
}

test(testSchema);
// test({ "foo": 2, "bar": 4 });

function test(data) {
  let valid = validate(data);
  if (valid) console.log('Valid!');
  else console.log('Invalid: ' + ajv.errorsText(validate.errors));
}
