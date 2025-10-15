/**
 * **helix-editor** - pkgx package
 *
 * @domain `helix-editor.com`
 * @version `25.7.1` (10 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install helix-editor.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.helixeditorcom
 * console.log(pkg.name)        // "helix-editor"
 * console.log(pkg.versions[0]) // "25.7.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/helix-editor-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const helixeditorcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'helix-editor' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'helix-editor.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/helix-editor.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
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
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '25.7.1',
    '25.7.0',
    '25.1.1',
    '25.1.0',
    '24.7.0',
    '24.3.0',
    '23.10.0',
    '23.5.0',
    '23.3.0',
    '22.12.0',
  ] as const,
  aliases: [] as const,
}

export type HelixeditorcomPackage = typeof helixeditorcomPackage
