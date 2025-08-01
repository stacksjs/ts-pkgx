/**
 * **flipt** - Enterprise-ready, GitOps enabled, CloudNative feature management solution
 *
 * @domain `flipt.io`
 * @programs `flipt`
 * @version `1.59.2` (42 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install flipt`
 * @name `flipt`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.flipt
 * // Or access via domain
 * const samePkg = pantry.fliptio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "flipt"
 * console.log(pkg.description) // "Enterprise-ready, GitOps enabled, CloudNative f..."
 * console.log(pkg.programs)    // ["flipt"]
 * console.log(pkg.versions[0]) // "1.59.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/flipt-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const fliptPackage = {
  /**
   * The display name of this package.
   */
  name: 'flipt' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'flipt.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Enterprise-ready, GitOps enabled, CloudNative feature management solution' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/flipt.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install flipt' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'flipt',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.59.2',
    '1.59.1',
    '1.59.0',
    '1.58.5',
    '1.58.4',
    '1.58.3',
    '1.58.2',
    '1.58.1',
    '1.58.0',
    '1.57.0',
    '1.56.0',
    '1.55.1',
    '1.55.0',
    '1.54.2',
    '1.54.1',
    '1.54.0',
    '1.53.2',
    '1.53.1',
    '1.53.0',
    '1.52.2',
    '1.52.1',
    '1.52.0',
    '1.51.1',
    '1.51.0',
    '1.50.1',
    '1.50.0',
    '1.49.2',
    '1.49.1',
    '1.49.0',
    '1.48.1',
    '1.48.0',
    '1.47.1',
    '1.47.0',
    '1.46.3',
    '1.46.2',
    '1.46.1',
    '1.46.0',
    '1.45.2',
    '1.45.1',
    '1.45.0',
    '1.44.1',
    '1.44.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) flipt -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install flipt' as const,
}

export type FliptPackage = typeof fliptPackage
