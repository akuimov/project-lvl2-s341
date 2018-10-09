#!/usr/bin/env node

import commander from 'commander';

commander
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.1')
  .option('-f, --format [type]', 'Output format');
commander.parse(process.argv);
