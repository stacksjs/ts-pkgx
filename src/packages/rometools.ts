/**
 * **rome.tools** - Package from pantry: rome.tools
 *
 * @domain `rome.tools`
 *
 * @install `launchpad install rome.tools`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.rometools
 * console.log(pkg.name)        // "rome.tools"
 * console.log(pkg.description) // "Package from pantry: rome.tools"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rome-tools.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rometoolsPackage = {
  /**
   * The display name of this package.
   */
  name: 'rome.tools' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'rome.tools' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: rome.tools' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install rome.tools' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +rome.tools -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install rome.tools' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/rome.tools/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type RometoolsPackage = typeof rometoolsPackage
