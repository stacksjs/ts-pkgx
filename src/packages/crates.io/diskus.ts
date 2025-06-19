/**
 * **diskus** - A minimal, fast alternative to 'du -sh'
 *
 * @domain `crates.io/diskus`
 * @programs `diskus`
 * @version `0.8.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install diskus`
 * @name `diskus`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.diskus
 * // Or access via domain
 * const samePkg = pantry.cratesiodiskus
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "diskus"
 * console.log(pkg.description) // "A minimal, fast alternative to 'du -sh'"
 * console.log(pkg.programs)    // ["diskus"]
 * console.log(pkg.versions[0]) // "0.8.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/diskus.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const diskusPackage = {
  /**
   * The display name of this package.
   */
  name: 'diskus' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/diskus' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A minimal, fast alternative to \'du -sh\'' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/diskus/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install diskus' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'diskus',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.8.0',
    '0.7.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type DiskusPackage = typeof diskusPackage
