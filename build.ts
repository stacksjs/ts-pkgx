import process from 'node:process'
import { dts } from 'bun-plugin-dtsx'

console.log('Building...')
const result = await Bun.build({
  entrypoints: ['src/index.ts', 'bin/cli.ts'],
  outdir: './dist',
  target: 'node',
  splitting: true,
  minify: true,
  plugins: [dts()],
})

if (!result.success) {
  console.error('Build failed:', result.logs)
  process.exit(1)
}

console.log('Build completed successfully!')
