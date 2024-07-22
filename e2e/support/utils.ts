export function generateRandomString(length: number) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export function getTestData(module: string, specName: string = Cypress.spec.name)  {
    const testName: string = specName.replace('.spec.ts', '').replace('E','').toLocaleLowerCase();
    const testData: any[] = require(`../data/${module}.json`);

    return testData.find(item => item.testName === testName);
}

export function capitalizeFirstLetter(text: string) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}