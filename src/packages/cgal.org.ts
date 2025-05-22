/**
 * Generated from pkgx.dev data
 */
export const cgalorgPackage = {
  programs: [
    "cgal_create_CMakeLists",
    "cgal_create_cmake_script",
    "cgal_make_macosx_app",
  ] as const,
  companions: [] as const,
  dependencies: [
    "boost.org",
    "eigen.tuxfamily.org",
    "gnu.org/gmp",
    "gnu.org/mpfr",
    "openssl.org",
  ] as const,
  versions: [
    "6.0.1",
    "6.0.0",
    "5.6.2",
    "5.6.1",
    "5.6.0",
  ] as const,
  name: "cgal.org" as const,
  domain: "cgal.org" as const,
  description: "Package information for cgal.org" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/cgal.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +cgal.org -- $SHELL -i" as const,
}

export type CgalorgPackage = typeof cgalorgPackage
