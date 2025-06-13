import process from 'node:process'
import { dts } from 'bun-plugin-dtsx'

const result = await Bun.build({
  entrypoints: ['src/index.ts', 'bin/cli.ts'],
  outdir: './dist',
  splitting: false,
  target: 'node',
  // minify: true,
  external: ['playwright-core'],
  plugins: [dts()],
})

if (!result.success) {
  console.error('Build failed:', result.logs)
  process.exit(1)
}

console.log('Build completed successfully!')
