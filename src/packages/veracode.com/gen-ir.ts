/**
 * **gen-ir** - Package from pantry: veracode.com/gen-ir
 *
 * @domain `veracode.com/gen-ir`
 *
 * @install `launchpad install veracode.com/gen-ir`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.veracodecomgenir
 * console.log(pkg.name)        // "gen-ir"
 * console.log(pkg.description) // "Package from pantry: veracode.com/gen-ir"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/veracode-com/gen-ir.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const veracodecomgenirPackage = {
  /**
   * The display name of this package.
   */
  name: 'gen-ir' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'veracode.com/gen-ir' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: veracode.com/gen-ir' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install veracode.com/gen-ir' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +veracode.com/gen-ir -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install veracode.com/gen-ir' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/veracode.com/gen-ir/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type VeracodecomgenirPackage = typeof veracodecomgenirPackage
