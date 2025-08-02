/**
 * **helix-editor.com** - Package from pantry: helix-editor.com
 *
 * @domain `helix-editor.com`
 *
 * @install `launchpad install helix-editor.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.helixeditorcom
 * console.log(pkg.name)        // "helix-editor.com"
 * console.log(pkg.description) // "Package from pantry: helix-editor.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/helix-editor-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const helixeditorcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'helix-editor.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'helix-editor.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: helix-editor.com' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install helix-editor.com' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +helix-editor.com -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install helix-editor.com' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/helix-editor.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type HelixeditorcomPackage = typeof helixeditorcomPackage
