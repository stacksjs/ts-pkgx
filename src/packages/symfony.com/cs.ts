/**
 * **cs** - Package from pantry: symfony.com/cs
 *
 * @domain `symfony.com/cs`
 *
 * @install `launchpad install symfony.com/cs`
 * @dependencies `php.net>=7.4<8.4`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.symfonycomcs
 * console.log(pkg.name)        // "cs"
 * console.log(pkg.description) // "Package from pantry: symfony.com/cs"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/symfony-com/cs.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const symfonycomcsPackage = {
  /**
   * The display name of this package.
   */
  name: 'cs' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'symfony.com/cs' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: symfony.com/cs' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install symfony.com/cs' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +symfony.com/cs -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install symfony.com/cs' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'php.net>=7.4<8.4',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/symfony.com/cs/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type SymfonycomcsPackage = typeof symfonycomcsPackage
