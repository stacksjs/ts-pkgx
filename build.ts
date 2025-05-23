import { dts } from 'bun-plugin-dtsx'

await Bun.build({
  entrypoints: ['src/index.ts', 'bin/cli.ts'],
  outdir: './dist',
  splitting: true,
  target: 'node',
  minify: true,
  external: ['playwright-core'],
  plugins: [dts()],
})
