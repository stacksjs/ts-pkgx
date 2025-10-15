import process from 'node:process'
import { dts } from 'bun-plugin-dtsx'

// Build the main library first
console.log('Building main library...')
const libraryResult = await Bun.build({
  entrypoints: ['src/index.ts', 'bin/cli.ts'],
  outdir: './dist',
  target: 'node',
  splitting: true,
  minify: true,
  plugins: [dts()],
})

if (!libraryResult.success) {
  console.error('Library build failed:', libraryResult.logs)
  process.exit(1)
}

console.log('Library build completed successfully!')
