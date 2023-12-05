import * as fs from 'fs';

const C1 = '/home/pgavazov/code/aoc-2023/day-1/input.txt';
const C2 = '/home/pgavazov/code/aoc-2023/day-1/input-2.txt'
const E1 = '/home/pgavazov/code/aoc-2023/day-1/example.txt'

const readFromFile = async (filePath: string) => {
    const content = await fs.readFileSync(filePath, 'utf-8').split('\n');
    let arr: number[] = [];

    for (let word of content) {
        let curr: RegExpMatchArray | null = word.match(/\d+/g);
        if (!curr) continue;

        let value: string = curr.join('');
        arr.push(+(value[0] + value[value.length - 1]));
    }

    return arr.reduce((a, b) => a + b);
}

(async () => {
    console.log(await readFromFile(C1));
})();
