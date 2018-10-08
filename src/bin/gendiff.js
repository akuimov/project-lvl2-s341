#!/usr/bin/env node

const program = require('commander');

program
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .option('-f, --format [type]', 'Output format');

program.parse(process.argv);
