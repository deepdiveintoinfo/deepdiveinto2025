#!/usr/bin/env node 

import { Command } from 'commander';

const program = new Command();
program
    .name('m')
    .description('CLI to do stuff')
    .version('0.8.0')
    .executableDir('./commands')

program
    .command('create', 'Creates something for the current M-Prime project.')
    .command('generate', 'Generates unit tests and stories from existing typescript files.')
    .command('analyze', 'Analyze a pdf.')
    .command('validate', 'Validate things.')

program.parse();
