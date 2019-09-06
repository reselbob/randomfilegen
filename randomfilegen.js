#!/usr/bin/env node
const faker = require('faker');
const cli = require('cli');
const fs = require('fs');

const options = cli.parse({
    wordcount: ['wc', ' The number of words to put in the file.', 'number', 1000],
    outputfile: ['o', ' The name of the output file.', 'string', 'output.txt']
});

const words = faker.random.words(options.wordcount);

fs.writeFile(options.outputfile, words, function(err) {
    if(err) {
        cli.output(err)
    }
    const str = `The file, ${options.outputfile} was generated with ${options.wordcount} words.`;
    cli.output(str);
});