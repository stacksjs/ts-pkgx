import process from 'node:process'
import { dts } from 'bun-plugin-dtsx'

// Build the main library first
console.log('Building main library...')
const libraryResult = await Bun.build({
  entrypoints: ['src/index.ts'],
  outdir: './dist',
  splitting: false,
  target: 'node',
  // minify: true,
  external: ['playwright-core', 'playwright'],
  plugins: [dts()],
})

if (!libraryResult.success) {
  console.error('Library build failed:', libraryResult.logs)
  process.exit(1)
}

console.log('Library build completed successfully!')

// Build the CLI separately
console.log('Building CLI...')
const cliResult = await Bun.build({
  entrypoints: ['bin/cli.ts'],
  outdir: './dist/bin',
  splitting: false,
  target: 'node',
  // minify: true,
  external: ['playwright-core'],
  // Don't generate .d.ts files for CLI
})

if (!cliResult.success) {
  console.error('CLI build failed:', cliResult.logs)
  process.exit(1)
}

// Add shebang to CLI for proper execution
const fs = await import('node:fs')
const cliPath = './dist/bin/cli.js'
if (fs.existsSync(cliPath)) {
  const cliContent = fs.readFileSync(cliPath, 'utf8')
  if (!cliContent.startsWith('#!')) {
    console.log('Adding shebang to CLI...')
    fs.writeFileSync(cliPath, `#!/usr/bin/env bun\n${cliContent}`)
    // Make executable
    fs.chmodSync(cliPath, 0o755)
  }
}

console.log('CLI build completed successfully!')
console.log('All builds completed successfully!')
