/**
 * **tea.xyz** - Package from pantry: tea.xyz
 *
 * @domain `tea.xyz`
 *
 * @install `launchpad install tea.xyz`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.teaxyz
 * console.log(pkg.name)        // "tea.xyz"
 * console.log(pkg.description) // "Package from pantry: tea.xyz"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/tea-xyz.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const teaxyzPackage = {
  /**
   * The display name of this package.
   */
  name: 'tea.xyz' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'tea.xyz' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: tea.xyz' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install tea.xyz' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/tea.xyz/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type TeaxyzPackage = typeof teaxyzPackage
