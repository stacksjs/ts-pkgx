/**
 * **putty** - Package from pantry: chiark.greenend.org.uk/putty
 *
 * @domain `chiark.greenend.org.uk/putty`
 *
 * @install `launchpad install chiark.greenend.org.uk/putty`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.chiarkgreenendorgukputty
 * console.log(pkg.name)        // "putty"
 * console.log(pkg.description) // "Package from pantry: chiark.greenend.org.uk/putty"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/chiark-greenend-org-uk/putty.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const chiarkgreenendorgukputtyPackage = {
  /**
   * The display name of this package.
   */
  name: 'putty' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'chiark.greenend.org.uk/putty' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: chiark.greenend.org.uk/putty' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install chiark.greenend.org.uk/putty' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +chiark.greenend.org.uk/putty -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install chiark.greenend.org.uk/putty' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/chiark.greenend.org.uk/putty/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type ChiarkgreenendorgukputtyPackage = typeof chiarkgreenendorgukputtyPackage
