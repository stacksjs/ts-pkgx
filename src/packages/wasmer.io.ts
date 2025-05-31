/**
 * **wasmer** - 🚀 Fast, secure, lightweight containers based on WebAssembly
 *
 * @domain `wasmer.io`
 * @programs `wasmer`
 * @version `6.0.1` (23 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/wasmer-io.md
 * @install `sh <(curl https://pkgx.sh) wasmer`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.wasmerio
 * console.log(pkg.name)        // "wasmer"
 * console.log(pkg.description) // "🚀 Fast, secure, lightweight containers based o..."
 * console.log(pkg.programs)    // ["wasmer"]
 * console.log(pkg.versions[0]) // "6.0.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/wasmer-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const wasmerioPackage = {
  /**
   * The display name of this package.
   */
  name: 'wasmer' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'wasmer.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: '🚀 Fast, secure, lightweight containers based on WebAssembly' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/wasmer.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) wasmer' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'wasmer',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '6.0.1',
    '6.0.0',
    '5.0.4',
    '5.0.3',
    '5.0.2',
    '5.0.1',
    '5.0.0',
    '4.4.0',
    '4.3.7',
    '4.3.6',
    '4.3.5',
    '4.3.4',
    '4.3.3',
    '4.3.2',
    '4.3.1',
    '4.3.0',
    '4.2.8',
    '4.2.7',
    '4.2.6',
    '4.2.5',
    '4.2.4',
    '4.2.3',
    '4.2.2',
  ] as const,
  fullPath: 'wasmer.io' as const,
  aliases: [] as const,
}

export type WasmerioPackage = typeof wasmerioPackage
