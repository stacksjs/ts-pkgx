/**
 * **dust** - A more intuitive version of du in rust
 *
 * @domain `crates.io/du-dust`
 * @programs `dust`
 * @version `1.2.1` (6 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) dust`
 * @name `dust`
 * @aliases `du-dust`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.dust
 * // Or access via domain
 * const samePkg = pantry.cratesiodudust
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "dust"
 * console.log(pkg.description) // "A more intuitive version of du in rust"
 * console.log(pkg.programs)    // ["dust"]
 * console.log(pkg.versions[0]) // "1.2.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/du-dust.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const dustPackage = {
  /**
   * The display name of this package.
   */
  name: 'dust' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/du-dust' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A more intuitive version of du in rust' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/du-dust/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) dust' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'dust',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.2.1',
    '1.2.0',
    '1.1.2',
    '1.1.1',
    '1.1.0',
    '1.0.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'du-dust',
  ] as const,
  fullPath: 'crates.io/du-dust' as const,
}

export type DustPackage = typeof dustPackage
