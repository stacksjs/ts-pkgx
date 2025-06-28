/**
 * **gofumpt** - Package from pantry: mvdan.cc/gofumpt
 *
 * @domain `mvdan.cc/gofumpt`
 *
 * @install `launchpad install mvdan.cc/gofumpt`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.mvdanccgofumpt
 * console.log(pkg.name)        // "gofumpt"
 * console.log(pkg.description) // "Package from pantry: mvdan.cc/gofumpt"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mvdan-cc/gofumpt.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mvdanccgofumptPackage = {
  /**
   * The display name of this package.
   */
  name: 'gofumpt' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mvdan.cc/gofumpt' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: mvdan.cc/gofumpt' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install mvdan.cc/gofumpt' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +mvdan.cc/gofumpt -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install mvdan.cc/gofumpt' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/mvdan.cc/gofumpt/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type MvdanccgofumptPackage = typeof mvdanccgofumptPackage
