/**
 * **cw** - Package from pantry: lucagrulla.com/cw
 *
 * @domain `lucagrulla.com/cw`
 *
 * @install `launchpad install lucagrulla.com/cw`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.lucagrullacomcw
 * console.log(pkg.name)        // "cw"
 * console.log(pkg.description) // "Package from pantry: lucagrulla.com/cw"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/lucagrulla-com/cw.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const lucagrullacomcwPackage = {
  /**
   * The display name of this package.
   */
  name: 'cw' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'lucagrulla.com/cw' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: lucagrulla.com/cw' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install lucagrulla.com/cw' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +lucagrulla.com/cw -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install lucagrulla.com/cw' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/lucagrulla.com/cw/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type LucagrullacomcwPackage = typeof lucagrullacomcwPackage
