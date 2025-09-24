/**
 * **node-build** - Install NodeJS versions
 *
 * @domain `github.com/nodenv/node-build`
 * @programs `node-build`
 * @version `5.4.12` (98 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install node-build`
 * @name `node-build`
 * @dependencies `openssl.org>=3.0.0`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.nodebuild
 * // Or access via domain
 * const samePkg = pantry.githubcomnodenvnodebuild
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "node-build"
 * console.log(pkg.description) // "Install NodeJS versions"
 * console.log(pkg.programs)    // ["node-build"]
 * console.log(pkg.versions[0]) // "5.4.12" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/nodenv/node-build.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const nodebuildPackage = {
  /**
   * The display name of this package.
   */
  name: 'node-build' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/nodenv/node-build' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Install NodeJS versions' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/nodenv/node-build/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install node-build' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'node-build',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org>=3.0.0',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '5.4.12',
    '5.4.11',
    '5.4.10',
    '5.4.9',
    '5.4.8',
    '5.4.7',
    '5.4.6',
    '5.4.5',
    '5.4.4',
    '5.4.3',
    '5.4.2',
    '5.4.1',
    '5.4.0',
    '5.3.37',
    '5.3.36',
    '5.3.35',
    '5.3.34',
    '5.3.33',
    '5.3.32',
    '5.3.31',
    '5.3.30',
    '5.3.29',
    '5.3.28',
    '5.3.27',
    '5.3.26',
    '5.3.25',
    '5.3.24',
    '5.3.23',
    '5.3.22',
    '5.3.21',
    '5.3.20',
    '5.3.19',
    '5.3.18',
    '5.3.17',
    '5.3.16',
    '5.3.15',
    '5.3.14',
    '5.3.13',
    '5.3.12',
    '5.3.11',
    '5.3.10',
    '5.3.9',
    '5.3.8',
    '5.3.7',
    '5.3.6',
    '5.3.5',
    '5.3.4',
    '5.3.3',
    '5.3.2',
    '5.3.1',
    '5.3.0',
    '5.2.0',
    '5.1.0',
    '5.0.4',
    '5.0.2',
    '5.0.1',
    '5.0.0',
    '4.11.0',
    '4.10.1',
    '4.10.0',
    '4.9.150',
    '4.9.149',
    '4.9.148',
    '4.9.147',
    '4.9.146',
    '4.9.145',
    '4.9.144',
    '4.9.143',
    '4.9.142',
    '4.9.141',
    '4.9.140',
    '4.9.139',
    '4.9.138',
    '4.9.137',
    '4.9.136',
    '4.9.135',
    '4.9.134',
    '4.9.133',
    '4.9.132',
    '4.9.131',
    '4.9.130',
    '4.9.129',
    '4.9.128',
    '4.9.127',
    '4.9.126',
    '4.9.125',
    '4.9.124',
    '4.9.123',
    '4.9.122',
    '4.9.121',
    '4.9.120',
    '4.9.119',
    '4.9.118',
    '4.9.117',
    '4.9.116',
    '4.9.115',
    '4.9.114',
    '4.9.113',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) node-build -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install node-build' as const,
}

export type NodebuildPackage = typeof nodebuildPackage
