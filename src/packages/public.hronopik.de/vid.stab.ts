/**
 * **vid.stab** - Package from pantry: public.hronopik.de/vid.stab
 *
 * @domain `public.hronopik.de/vid.stab`
 *
 * @install `launchpad install public.hronopik.de/vid.stab`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.publichronopikdevidstab
 * console.log(pkg.name)        // "vid.stab"
 * console.log(pkg.description) // "Package from pantry: public.hronopik.de/vid.stab"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/public-hronopik-de/vid-stab.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const publichronopikdevidstabPackage = {
  /**
   * The display name of this package.
   */
  name: 'vid.stab' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'public.hronopik.de/vid.stab' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: public.hronopik.de/vid.stab' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install public.hronopik.de/vid.stab' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +public.hronopik.de/vid.stab -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install public.hronopik.de/vid.stab' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/public.hronopik.de/vid.stab/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type PublichronopikdevidstabPackage = typeof publichronopikdevidstabPackage
