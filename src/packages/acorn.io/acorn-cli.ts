/**
 * **acorn** - A simple application deployment framework built on Kubernetes
 *
 * @domain `acorn.io/acorn-cli`
 * @programs `acorn`
 * @version `0.10.1` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install acorn`
 * @name `acorn`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.acorn
 * // Or access via domain
 * const samePkg = pantry.acornioacorncli
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "acorn"
 * console.log(pkg.description) // "A simple application deployment framework built..."
 * console.log(pkg.programs)    // ["acorn"]
 * console.log(pkg.versions[0]) // "0.10.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/acorn-io/acorn-cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const acornPackage = {
  /**
   * The display name of this package.
   */
  name: 'acorn' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'acorn.io/acorn-cli' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A simple application deployment framework built on Kubernetes' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/acorn.io/acorn-cli/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install acorn' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'acorn',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.10.1',
    '0.10.0',
    '0.9.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) acorn -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install acorn' as const,
}

export type AcornPackage = typeof acornPackage
