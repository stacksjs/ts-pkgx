/**
 * **yarn** - 📦🐈 Active development trunk for Yarn ⚒
 *
 * @domain `yarnpkg.com`
 * @programs `yarn`, `yarnpkg`
 * @version `4.9.1` (39 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/yarnpkg-com.md
 *
 * @install `sh <(curl https://pkgx.sh) +yarnpkg.com -- $SHELL -i`
 * @dependencies `nodejs.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.yarnpkgcom
 * console.log(pkg.name)        // "yarn"
 * console.log(pkg.description) // "📦🐈 Active development trunk for Yarn ⚒"
 * console.log(pkg.programs)    // ["yarn", "yarnpkg"]
 * console.log(pkg.versions[0]) // "4.9.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/yarnpkg-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const yarnpkgcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'yarn' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'yarnpkg.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: '📦🐈 Active development trunk for Yarn ⚒' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/yarnpkg.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +yarnpkg.com -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'yarn',
    'yarnpkg',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'nodejs.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '4.9.1',
    '4.9.0',
    '4.8.1',
    '4.8.0',
    '4.7.0',
    '4.6.0',
    '4.5.3',
    '4.5.2',
    '4.5.1',
    '4.5.0',
    '4.4.1',
    '4.4.0',
    '4.3.1',
    '4.3.0',
    '4.2.2',
    '4.2.1',
    '4.2.0',
    '4.1.1',
    '4.1.0',
    '4.0.2',
    '4.0.1',
    '4.0.0',
    '3.8.7',
    '3.8.6',
    '3.8.5',
    '3.8.4',
    '3.8.3',
    '3.8.2',
    '3.8.1',
    '3.8.0',
    '3.7.0',
    '3.6.4',
    '3.6.3',
    '3.6.2',
    '3.6.1',
    '3.6.0',
    '3.5.1',
    '3.5.0',
    '3.4.1',
  ] as const,
  fullPath: 'yarnpkg.com' as const,
  aliases: [] as const,
}

export type YarnpkgcomPackage = typeof yarnpkgcomPackage
