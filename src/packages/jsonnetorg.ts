/**
 * **jsonnet** - Jsonnet - The data templating language
 *
 * @domain `jsonnet.org`
 * @programs `jsonnet`, `jsonnetfmt`
 * @version `0.21.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install jsonnet`
 * @name `jsonnet`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.jsonnet
 * // Or access via domain
 * const samePkg = pantry.jsonnetorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "jsonnet"
 * console.log(pkg.description) // "Jsonnet - The data templating language"
 * console.log(pkg.programs)    // ["jsonnet", "jsonnetfmt"]
 * console.log(pkg.versions[0]) // "0.21.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/jsonnet-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const jsonnetPackage = {
  /**
   * The display name of this package.
   */
  name: 'jsonnet' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'jsonnet.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Jsonnet - The data templating language' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/jsonnet.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install jsonnet' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'jsonnet',
    'jsonnetfmt',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.21.0',
    '0.20.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +jsonnet.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install jsonnet' as const,
}

export type JsonnetPackage = typeof jsonnetPackage
