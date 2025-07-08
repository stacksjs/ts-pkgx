/**
 * **markitdown** - Package from pantry: microsoft.com/markitdown
 *
 * @domain `microsoft.com/markitdown`
 *
 * @install `launchpad install microsoft.com/markitdown`
 * @dependencies `pkgx.sh^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.microsoftcommarkitdown
 * console.log(pkg.name)        // "markitdown"
 * console.log(pkg.description) // "Package from pantry: microsoft.com/markitdown"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/microsoft-com/markitdown.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const microsoftcommarkitdownPackage = {
  /**
   * The display name of this package.
   */
  name: 'markitdown' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'microsoft.com/markitdown' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: microsoft.com/markitdown' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install microsoft.com/markitdown' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +microsoft.com/markitdown -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install microsoft.com/markitdown' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/microsoft.com/markitdown/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type MicrosoftcommarkitdownPackage = typeof microsoftcommarkitdownPackage
