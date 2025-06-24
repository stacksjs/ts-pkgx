/**
 * **dotenv-linter.github.io** - Package from pantry: dotenv-linter.github.io
 *
 * @domain `dotenv-linter.github.io`
 *
 * @install `launchpad install dotenv-linter.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.dotenvlintergithubio
 * console.log(pkg.name)        // "dotenv-linter.github.io"
 * console.log(pkg.description) // "Package from pantry: dotenv-linter.github.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/dotenv-linter-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const dotenvlintergithubioPackage = {
  /**
   * The display name of this package.
   */
  name: 'dotenv-linter.github.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'dotenv-linter.github.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: dotenv-linter.github.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install dotenv-linter.github.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +dotenv-linter.github.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install dotenv-linter.github.io' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/dotenv-linter.github.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type DotenvlintergithubioPackage = typeof dotenvlintergithubioPackage
