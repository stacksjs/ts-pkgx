/**
 * **xcodegen** - Generate your Xcode project from a spec file and your folder structure
 *
 * @domain `github.com/yonaskolb/XcodeGen`
 * @programs `xcodegen`
 * @version `2.43.0` (12 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install xcodegen`
 * @aliases `xcodegen`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.xcodegen
 * // Or access via domain
 * const samePkg = pantry.githubcomyonaskolbxcodegen
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "XcodeGen"
 * console.log(pkg.description) // "Generate your Xcode project from a spec file an..."
 * console.log(pkg.programs)    // ["xcodegen"]
 * console.log(pkg.versions[0]) // "2.43.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/yonaskolb/XcodeGen.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xcodegenPackage = {
  /**
   * The display name of this package.
   */
  name: 'XcodeGen' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/yonaskolb/XcodeGen' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Generate your Xcode project from a spec file and your folder structure' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/yonaskolb/XcodeGen/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install xcodegen' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'xcodegen',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.43.0',
    '2.42.0',
    '2.41.0',
    '2.40.1',
    '2.40.0',
    '2.39.1',
    '2.39.0',
    '2.38.0',
    '2.37.0',
    '2.36.1',
    '2.36.0',
    '2.35.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'xcodegen',
  ] as const,
}

export type XcodegenPackage = typeof xcodegenPackage
