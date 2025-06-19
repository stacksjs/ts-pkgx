/**
 * **devpod** - Codespaces but open-source, client-only and unopinionated: Works with any IDE and lets you use any cloud, kubernetes or just localhost docker.
 *
 * @domain `devpod.sh/cli`
 * @programs `devpod`
 * @version `0.6.15` (32 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install devpod`
 * @aliases `devpod`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.devpod
 * // Or access via domain
 * const samePkg = pantry.devpodshcli
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "cli"
 * console.log(pkg.description) // "Codespaces but open-source, client-only and uno..."
 * console.log(pkg.programs)    // ["devpod"]
 * console.log(pkg.versions[0]) // "0.6.15" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/devpod-sh/cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const devpodPackage = {
  /**
   * The display name of this package.
   */
  name: 'cli' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'devpod.sh/cli' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Codespaces but open-source, client-only and unopinionated: Works with any IDE and lets you use any cloud, kubernetes or just localhost docker.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/devpod.sh/cli/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install devpod' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'devpod',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.6.15',
    '0.6.14',
    '0.6.13',
    '0.6.12',
    '0.6.11',
    '0.6.10',
    '0.6.9',
    '0.6.8',
    '0.6.7',
    '0.6.6',
    '0.6.5',
    '0.6.4',
    '0.6.2',
    '0.6.1',
    '0.6.0',
    '0.5.22',
    '0.5.21',
    '0.5.20',
    '0.5.19',
    '0.5.18',
    '0.5.16',
    '0.5.15',
    '0.5.14',
    '0.5.13',
    '0.5.12',
    '0.5.11',
    '0.5.10',
    '0.5.9',
    '0.5.8',
    '0.5.7',
    '0.5.6',
    '0.5.5',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'devpod',
  ] as const,
}

export type DevpodPackage = typeof devpodPackage
