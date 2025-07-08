/**
 * **process-compose** - Package from pantry: f1bonacc1.github.io/process-compose
 *
 * @domain `f1bonacc1.github.io/process-compose`
 *
 * @install `launchpad install f1bonacc1.github.io/process-compose`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.f1bonacc1githubioprocesscompose
 * console.log(pkg.name)        // "process-compose"
 * console.log(pkg.description) // "Package from pantry: f1bonacc1.github.io/proces..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/f1bonacc1-github-io/process-compose.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const f1bonacc1githubioprocesscomposePackage = {
  /**
   * The display name of this package.
   */
  name: 'process-compose' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'f1bonacc1.github.io/process-compose' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: f1bonacc1.github.io/process-compose' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install f1bonacc1.github.io/process-compose' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +f1bonacc1.github.io/process-compose -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install f1bonacc1.github.io/process-compose' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/f1bonacc1.github.io/process-compose/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type F1bonacc1githubioprocesscomposePackage = typeof f1bonacc1githubioprocesscomposePackage
