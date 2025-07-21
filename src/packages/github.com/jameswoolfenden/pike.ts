/**
 * **pike** - Pike is a tool for determining the permissions or policy required for IAC code
 *
 * @domain `github.com/jameswoolfenden/pike`
 * @programs `pike`
 * @version `0.3.72` (56 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install pike`
 * @name `pike`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.pike
 * // Or access via domain
 * const samePkg = pantry.githubcomjameswoolfendenpike
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "pike"
 * console.log(pkg.description) // "Pike is a tool for determining the permissions ..."
 * console.log(pkg.programs)    // ["pike"]
 * console.log(pkg.versions[0]) // "0.3.72" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/jameswoolfenden/pike.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pikePackage = {
  /**
   * The display name of this package.
   */
  name: 'pike' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/jameswoolfenden/pike' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Pike is a tool for determining the permissions or policy required for IAC code' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/jameswoolfenden/pike/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/JamesWoolfenden/pike' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install pike' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'pike',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.3.72',
    '0.3.71',
    '0.3.70',
    '0.3.69',
    '0.3.68',
    '0.3.67',
    '0.3.66',
    '0.3.65',
    '0.3.64',
    '0.3.63',
    '0.3.62',
    '0.3.61',
    '0.3.60',
    '0.3.59',
    '0.3.58',
    '0.3.57',
    '0.3.56',
    '0.3.55',
    '0.3.54',
    '0.3.53',
    '0.3.52',
    '0.3.51',
    '0.3.50',
    '0.3.49',
    '0.3.48',
    '0.3.47',
    '0.3.46',
    '0.3.45',
    '0.3.44',
    '0.3.43',
    '0.3.42',
    '0.3.41',
    '0.3.40',
    '0.3.39',
    '0.3.38',
    '0.3.37',
    '0.3.36',
    '0.3.35',
    '0.3.34',
    '0.3.33',
    '0.3.32',
    '0.3.31',
    '0.3.30',
    '0.3.29',
    '0.3.28',
    '0.3.27',
    '0.3.26',
    '0.3.25',
    '0.3.24',
    '0.3.23',
    '0.3.22',
    '0.3.21',
    '0.3.20',
    '0.3.19',
    '0.3.18',
    '0.3.17',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) pike -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install pike' as const,
}

export type PikePackage = typeof pikePackage
