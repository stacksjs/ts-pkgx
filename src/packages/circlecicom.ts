/**
 * **circleci** - Enables you to reproduce the CircleCI environment locally
 *
 * @domain `circleci.com`
 * @programs `circleci`
 * @version `0.1.33494` (63 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install circleci`
 * @name `circleci`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.circleci
 * // Or access via domain
 * const samePkg = pantry.circlecicom
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "circleci"
 * console.log(pkg.description) // "Enables you to reproduce the CircleCI environme..."
 * console.log(pkg.programs)    // ["circleci"]
 * console.log(pkg.versions[0]) // "0.1.33494" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/circleci-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const circleciPackage = {
  /**
   * The display name of this package.
   */
  name: 'circleci' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'circleci.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Enables you to reproduce the CircleCI environment locally' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/circleci.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install circleci' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'circleci',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.1.33494',
    '0.1.33470',
    '0.1.33163',
    '0.1.33128',
    '0.1.32638',
    '0.1.32580',
    '0.1.32367',
    '0.1.32323',
    '0.1.32219',
    '0.1.32145',
    '0.1.32111',
    '0.1.32067',
    '0.1.31983',
    '0.1.31879',
    '0.1.31792',
    '0.1.31687',
    '0.1.31632',
    '0.1.31543',
    '0.1.31425',
    '0.1.31151',
    '0.1.30995',
    '0.1.30948',
    '0.1.30888',
    '0.1.30549',
    '0.1.30401',
    '0.1.30163',
    '0.1.30084',
    '0.1.29936',
    '0.1.29658',
    '0.1.29560',
    '0.1.29314',
    '0.1.29041',
    '0.1.28995',
    '0.1.28939',
    '0.1.28811',
    '0.1.28745',
    '0.1.28434',
    '0.1.28391',
    '0.1.28363',
    '0.1.28196',
    '0.1.28084',
    '0.1.27660',
    '0.1.27054',
    '0.1.26896',
    '0.1.26837',
    '0.1.26786',
    '0.1.26646',
    '0.1.26343',
    '0.1.26255',
    '0.1.26094',
    '0.1.26061',
    '0.1.25848',
    '0.1.25725',
    '0.1.25638',
    '0.1.25569',
    '0.1.25519',
    '0.1.25085',
    '0.1.25007',
    '0.1.24783',
    '0.1.24705',
    '0.1.24495',
    '0.1.24435',
    '0.1.23845',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) circleci -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install circleci' as const,
}

export type CircleciPackage = typeof circleciPackage
