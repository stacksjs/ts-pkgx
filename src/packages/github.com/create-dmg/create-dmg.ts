/**
 * **create-dmg** - A shell script to build fancy DMGs
 *
 * @domain `github.com/create-dmg/create-dmg`
 * @programs `create-dmg`
 * @version `1.2.2` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install create-dmg`
 * @name `create-dmg`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.createdmg
 * // Or access via domain
 * const samePkg = pantry.githubcomcreatedmgcreatedmg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "create-dmg"
 * console.log(pkg.description) // "A shell script to build fancy DMGs"
 * console.log(pkg.programs)    // ["create-dmg"]
 * console.log(pkg.versions[0]) // "1.2.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/create-dmg/create-dmg.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const createdmgPackage = {
  /**
   * The display name of this package.
   */
  name: 'create-dmg' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/create-dmg/create-dmg' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A shell script to build fancy DMGs' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/create-dmg/create-dmg/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install create-dmg' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'create-dmg',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.2.2',
    '1.2.1',
    '1.2.0',
    '1.1.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type CreatedmgPackage = typeof createdmgPackage
