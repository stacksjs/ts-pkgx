/**
 * **opencode.ai** - pkgx package
 *
 * @domain `opencode.ai`
 * @version `0.3.29` (21 versions available)
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
 * console.log(pkg.versions[0]) // "0.3.29" (latest)
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
