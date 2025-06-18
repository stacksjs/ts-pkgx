/**
 * **sig** - Interactive grep (for streaming)
 *
 * @domain `crates.io/sigrs`
 * @programs `sig`
 * @version `0.1.4` (5 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) sig`
 * @name `sig`
 * @aliases `sigrs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.sig
 * // Or access via domain
 * const samePkg = pantry.cratesiosigrs
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "sig"
 * console.log(pkg.description) // "Interactive grep (for streaming)"
 * console.log(pkg.programs)    // ["sig"]
 * console.log(pkg.versions[0]) // "0.1.4" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/sigrs.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sigPackage = {
  /**
   * The display name of this package.
   */
  name: 'sig' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/sigrs' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Interactive grep (for streaming)' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/sigrs/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) sig' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'sig',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.1.4',
    '0.1.3',
    '0.1.2',
    '0.1.1',
    '0.1.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'sigrs',
  ] as const,
  fullPath: 'crates.io/sigrs' as const,
}

export type SigPackage = typeof sigPackage
