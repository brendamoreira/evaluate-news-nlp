import { checkForName, validURL } from '../src/client/js/urlChecker';

describe('Testing the URL validation', () =>{
    test('testing the checkForName function', () => {
        expect(checkForName).toBeDefined();
    });
    test('test valid URL', () => {
        expect(validURL('https://www.udacity.com')).toBe(true);
    })
    test('test invalid URL', () => {
        expect(validURL('notavalidurl')).toBe(false);
    })
})