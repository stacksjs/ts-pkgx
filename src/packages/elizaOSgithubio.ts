/**
 * **elizaOS.github.io** - Package from pantry: elizaOS.github.io
 *
 * @domain `elizaOS.github.io`
 *
 * @install `launchpad install elizaOS.github.io`
 * @dependencies `python.org>=2.7`, `nodejs.org~23.3`, `pnpm.io`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.elizaosgithubio
 * console.log(pkg.name)        // "elizaOS.github.io"
 * console.log(pkg.description) // "Package from pantry: elizaOS.github.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/elizaOS-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const elizaosgithubioPackage = {
  /**
   * The display name of this package.
   */
  name: 'elizaOS.github.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'elizaOS.github.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: elizaOS.github.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install elizaOS.github.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +elizaOS.github.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install elizaOS.github.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org>=2.7',
    'nodejs.org~23.3',
    'pnpm.io',
    'bun.sh^1.2 # since 1.0.5',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/elizaOS.github.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type ElizaosgithubioPackage = typeof elizaosgithubioPackage
