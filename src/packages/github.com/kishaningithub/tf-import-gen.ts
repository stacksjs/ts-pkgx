/**
 * **tf-import-gen** - Tool to generate terraform import statements to simplify state migrations from one terraform code base to another
 *
 * @domain `github.com/kishaningithub/tf-import-gen`
 * @programs `tf-import-gen`
 * @version `0.19.0` (23 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install tf-import-gen`
 * @name `tf-import-gen`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.tfimportgen
 * // Or access via domain
 * const samePkg = pantry.githubcomkishaningithubtfimportgen
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "tf-import-gen"
 * console.log(pkg.description) // "Tool to generate terraform import statements to..."
 * console.log(pkg.programs)    // ["tf-import-gen"]
 * console.log(pkg.versions[0]) // "0.19.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/kishaningithub/tf-import-gen.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tfimportgenPackage = {
  /**
   * The display name of this package.
   */
  name: 'tf-import-gen' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/kishaningithub/tf-import-gen' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Tool to generate terraform import statements to simplify state migrations from one terraform code base to another' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/kishaningithub/tf-import-gen/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install tf-import-gen' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'tf-import-gen',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.19.0',
    '0.18.0',
    '0.17.0',
    '0.16.0',
    '0.15.0',
    '0.14.0',
    '0.13.1',
    '0.12.0',
    '0.11.1',
    '0.11.0',
    '0.10.2',
    '0.10.1',
    '0.10.0',
    '0.9.0',
    '0.8.0',
    '0.7.4',
    '0.7.3',
    '0.7.2',
    '0.7.1',
    '0.7.0',
    '0.6.0',
    '0.5.0',
    '0.4.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) tf-import-gen -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install tf-import-gen' as const,
}

export type TfimportgenPackage = typeof tfimportgenPackage
