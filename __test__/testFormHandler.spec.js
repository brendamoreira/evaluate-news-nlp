import { handleSubmit } from "../src/client/js/formHandler";

describe('Testing the submit form', () =>{
    test('testing the handleSubmit function', () => {
        expect(handleSubmit).toBeDefined();
    });
})