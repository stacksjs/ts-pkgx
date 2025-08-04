/**
 * **typescriptlang.org** - Package from pantry: typescriptlang.org
 *
 * @domain `typescriptlang.org`
 *
 * @install `launchpad install typescriptlang.org`
 * @dependencies `nodejs.org^20`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.typescriptlangorg
 * console.log(pkg.name)        // "typescriptlang.org"
 * console.log(pkg.description) // "Package from pantry: typescriptlang.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/typescriptlang-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const typescriptlangorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'typescriptlang.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'typescriptlang.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: typescriptlang.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install typescriptlang.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +typescriptlang.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install typescriptlang.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'nodejs.org^20',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/typescriptlang.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type TypescriptlangorgPackage = typeof typescriptlangorgPackage
