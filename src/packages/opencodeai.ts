/**
 * **opencode.ai** - pkgx package
 *
 * @domain `opencode.ai`
 * @version `0.3.133` (98 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install opencode.ai`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.opencodeai
 * console.log(pkg.name)        // "opencode.ai"
 * console.log(pkg.versions[0]) // "0.3.133" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/opencode-ai.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const opencodeaiPackage = {
  /**
   * The display name of this package.
   */
  name: 'opencode.ai' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'opencode.ai' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/opencode.ai/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install opencode.ai' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.3.133',
    '0.3.132',
    '0.3.131',
    '0.3.130',
    '0.3.129',
    '0.3.128',
    '0.3.127',
    '0.3.126',
    '0.3.122',
    '0.3.121',
    '0.3.120',
    '0.3.119',
    '0.3.118',
    '0.3.117',
    '0.3.116',
    '0.3.115',
    '0.3.114',
    '0.3.113',
    '0.3.112',
    '0.3.111',
    '0.3.110',
    '0.3.109',
    '0.3.108',
    '0.3.106',
    '0.3.105',
    '0.3.104',
    '0.3.103',
    '0.3.102',
    '0.3.101',
    '0.3.93',
    '0.3.92',
    '0.3.90',
    '0.3.86',
    '0.3.85',
    '0.3.84',
    '0.3.83',
    '0.3.82',
    '0.3.81',
    '0.3.80',
    '0.3.79',
    '0.3.77',
    '0.3.76',
    '0.3.75',
    '0.3.73',
    '0.3.72',
    '0.3.71',
    '0.3.70',
    '0.3.69',
    '0.3.68',
    '0.3.67',
    '0.3.66',
    '0.3.65',
    '0.3.64',
    '0.3.61',
    '0.3.58',
    '0.3.57',
    '0.3.56',
    '0.3.55',
    '0.3.54',
    '0.3.53',
    '0.3.52',
    '0.3.51',
    '0.3.50',
    '0.3.47',
    '0.3.46',
    '0.3.45',
    '0.3.44',
    '0.3.43',
    '0.3.40',
    '0.3.37',
    '0.3.36',
    '0.3.35',
    '0.3.34',
    '0.3.33',
    '0.3.32',
    '0.3.31',
    '0.3.30',
    '0.3.29',
    '0.3.27',
    '0.3.26',
    '0.3.24',
    '0.3.23',
    '0.3.22',
    '0.3.21',
    '0.3.20',
    '0.3.19',
    '0.3.18',
    '0.3.17',
    '0.3.16',
    '0.3.12',
    '0.3.11',
    '0.3.10',
    '0.3.9',
    '0.3.5',
    '0.3.4',
    '0.3.3',
    '0.3.2',
    '0.2.33',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +opencode.ai -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install opencode.ai' as const,
}

export type OpencodeaiPackage = typeof opencodeaiPackage
