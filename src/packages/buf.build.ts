/**
 * **buf** - The best way of working with Protocol Buffers.
 *
 * @domain `buf.build`
 * @programs `buf`
 * @version `1.55.1` (43 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/buf-build.md
 *
 * @install `sh <(curl https://pkgx.sh) buf`
 * @name `buf`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.buf
 * // Or access via domain
 * const samePkg = pantry.bufbuild
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "buf"
 * console.log(pkg.description) // "The best way of working with Protocol Buffers."
 * console.log(pkg.programs)    // ["buf"]
 * console.log(pkg.versions[0]) // "1.55.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/buf-build.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const bufPackage = {
  /**
   * The display name of this package.
   */
  name: 'buf' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'buf.build' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'The best way of working with Protocol Buffers.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/buf.build/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) buf' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'buf',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.55.1',
    '1.55.0',
    '1.54.0',
    '1.53.0',
    '1.52.1',
    '1.52.0',
    '1.51.0',
    '1.50.1',
    '1.50.0',
    '1.49.0',
    '1.48.0',
    '1.47.2',
    '1.47.1',
    '1.47.0',
    '1.46.0',
    '1.45.0',
    '1.44.0',
    '1.43.0',
    '1.42.0',
    '1.41.0',
    '1.40.1',
    '1.40.0',
    '1.39.0',
    '1.38.0',
    '1.37.0',
    '1.36.0',
    '1.35.1',
    '1.35.0',
    '1.34.0',
    '1.33.0',
    '1.32.2',
    '1.32.1',
    '1.32.0',
    '1.31.0',
    '1.30.1',
    '1.30.0',
    '1.29.0',
    '1.28.1',
    '1.28.0',
    '1.27.2',
    '1.27.1',
    '1.27.0',
    '1.26.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'buf.build' as const,
}

export type BufPackage = typeof bufPackage
