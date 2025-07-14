/**
 * **opencode.ai** - pkgx package
 *
 * @domain `opencode.ai`
 * @version `0.2.33` (1 versions available)
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
 * console.log(pkg.versions[0]) // "0.2.33" (latest)
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
    '0.2.33',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +opencode.ai -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install opencode.ai' as const,
}

export type OpencodeaiPackage = typeof opencodeaiPackage
