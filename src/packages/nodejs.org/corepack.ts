/**
 * **corepack** - Platform built on V8 to build network applications
 *
 * @domain `nodejs.org/corepack`
 * @programs `corepack`
 * @version `0.33.0` (12 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install corepack`
 * @name `corepack`
 * @dependencies `nodejs.org^20`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.corepack
 * // Or access via domain
 * const samePkg = pantry.nodejsorgcorepack
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "corepack"
 * console.log(pkg.description) // "Platform built on V8 to build network applications"
 * console.log(pkg.programs)    // ["corepack"]
 * console.log(pkg.versions[0]) // "0.33.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/nodejs-org/corepack.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const corepackPackage = {
  /**
   * The display name of this package.
   */
  name: 'corepack' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'nodejs.org/corepack' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Platform built on V8 to build network applications' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/nodejs.org/corepack/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install corepack' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'corepack',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'nodejs.org^20',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.33.0',
    '0.32.0',
    '0.31.0',
    '0.30.0',
    '0.29.4',
    '0.29.3',
    '0.29.2',
    '0.28.2',
    '0.28.1',
    '0.28.0',
    '0.27.0',
    '0.26.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type CorepackPackage = typeof corepackPackage
